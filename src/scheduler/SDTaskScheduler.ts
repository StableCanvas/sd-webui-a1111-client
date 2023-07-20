// Agent Scheduler

import { SDWebUIA1111Client } from "../client";
import { Img2imgProcess, Txt2imgProcess } from "../process";
import { SDTask, SDTaskStatus } from "./SDTask";

export class SDTaskScheduler {
  constructor(readonly client: SDWebUIA1111Client) {}

  async queueStatus() {
    return this.client.default.queueStatusApiAgentSchedulerV1QueueGet({});
  }

  async queryHistory(status?: SDTaskStatus, limit?: number, offset?: number) {
    return this.client.default.historyApiAgentSchedulerV1HistoryGet({
      status,
      limit,
      offset,
    });
  }

  async pause() {
    return this.client.default.pauseQueueAgentSchedulerV1PausePost();
  }

  async resume() {
    return this.client.default.resumeQueueAgentSchedulerV1ResumePost();
  }

  async createImg2imgTask(
    img2imgProcess: Img2imgProcess,
    checkpoint?: string,
    callback_url?: string
  ) {
    const { task_id } =
      await this.client.default.queueImg2ImgAgentSchedulerV1QueueImg2ImgPost({
        requestBody: {
          ...img2imgProcess.toJSON(),
          checkpoint,
          callback_url,
        },
      });
    return new SDTask(this.client, task_id);
  }
  async createTxt2imgTask(
    txt2imgProcess: Txt2imgProcess,
    checkpoint?: string,
    callback_url?: string
  ) {
    const { task_id } =
      await this.client.default.queueTxt2ImgAgentSchedulerV1QueueTxt2ImgPost({
        requestBody: {
          ...txt2imgProcess.toJSON(),
          checkpoint,
          callback_url,
        },
      });
    return new SDTask(this.client, task_id);
  }
}
