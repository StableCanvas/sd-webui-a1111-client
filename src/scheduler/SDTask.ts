import { SDWebUIA1111Client } from "../client";

type TaskResult = {
  image: string;
  infotext: string;
};

export class SDTaskRunner {
  protected data = [] as TaskResult[];
  protected message = "";

  queryLoop?: Promise<TaskResult[]>;
  constructor(
    protected client: SDWebUIA1111Client,
    readonly task_id: string,
    private intervalMs = 3000
  ) {}

  protected running = false;
  async run() {
    if (this.running) {
      return;
    }
    await this.client.default.runTaskAgentSchedulerV1RunIdPost({
      id: this.task_id,
    });
    this.running = true;
  }

  protected async startQueryLoop() {
    while (true) {
      if (this.interrupted) {
        return [];
      }
      try {
        this.data = await this.queryResults();
        return this.data;
      } catch (error) {
        this.message = (<any>error)?.message || "";
        await new Promise((resolve) =>
          setTimeout(resolve, this.intervalMs + 1000 * Math.random())
        );
      }
    }
  }

  async queryResults() {
    const { success, message, data } =
      (await this.client.default.getTaskResultsAgentSchedulerV1ResultsIdGet({
        id: this.task_id,
        zip: false,
      })) as {
        message: string;
        data: TaskResult[];
        success: boolean;
      };
    if (success) {
      return data;
    }
    throw new Error(message || "query failed");
  }

  async results() {
    if (!this.queryLoop) {
      this.queryLoop = this.startQueryLoop();
    }
    await this.queryLoop;
    return this.data;
  }

  protected interrupted = false;
  async interrupt() {
    if (this.interrupted) {
      return;
    }
    this.interrupted = true;
    // delete task
    await this.client.default.deleteTaskAgentSchedulerV1DeleteIdPost({
      id: this.task_id,
    });
  }
}

export enum SDTaskStatus {
  pending = "pending",
  running = "running",
  done = "done",
  failed = "failed",
  interrupted = "interrupted",
}
export class SDTask {
  protected status: SDTaskStatus = SDTaskStatus.pending;
  protected error?: any;
  protected results?: TaskResult[];
  constructor(protected client: SDWebUIA1111Client, readonly task_id: string) {}

  protected async errWrap<T>(callback: () => T) {
    try {
      const value = await callback();
      return value;
    } catch (error) {
      this.status = SDTaskStatus.failed;
      this.error = error;
    }
  }

  private runner?: SDTaskRunner;
  async run() {
    if (this.results) {
      return this.results;
    }
    if (this.status === SDTaskStatus.interrupted) {
      throw new Error("Task already canceled");
    }
    if (this.status === SDTaskStatus.done) {
      return this.results;
    }
    if (this.status === SDTaskStatus.running && this.runner) {
      return this.runner.results();
    }
    if (this.status === SDTaskStatus.failed) {
      throw new Error("Task failed");
    }
    if (!this.task_id) {
      throw new Error("No task id");
    }
    const runner = new SDTaskRunner(this.client, this.task_id);
    this.runner = runner;

    return this.errWrap(async () => {
      const results = await runner.results();
      if (this.status === SDTaskStatus.interrupted) {
        // TODO 不清楚这样写对不对
        return [];
      }
      this.results = results;
      this.status = SDTaskStatus.done;
      return results;
    });
  }

  async interrupt() {
    if (this.runner) {
      await this.runner.interrupt();
      this.runner = undefined;
    } else {
      // next tick try to cancel again
      setTimeout(() => {
        this.runner?.interrupt();
        this.runner = undefined;
      }, 1);
    }
    this.status = SDTaskStatus.interrupted;
  }
}
