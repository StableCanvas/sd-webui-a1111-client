import EventEmitter from "eventemitter3";

export class BatchGeneration<Body, Response> extends EventEmitter<{
  batch_complete: (
    response: Response,
    progress: { currentBatch: number; totalBatches: number }
  ) => void;
  batch_start: (progress: {
    currentBatch: number;
    totalBatches: number;
  }) => void;
  batch_error: (
    error: any,
    progress: { currentBatch: number; totalBatches: number }
  ) => void;
  complete: (responses: Response[]) => void;
  error: (error: any) => void;
  start: () => void;
}> {
  responses: Response[] = [];

  constructor(
    readonly body: Body,
    readonly options: {
      batchSize: number;
      numBatches: number;
    }
  ) {
    super();
  }

  /**
   * Checks if the current batch generation is complete.
   *
   * @return {boolean} Returns true if the number of responses is equal to the number of batches, false otherwise.
   */
  isComplete() {
    return this.responses.length === this.options.numBatches;
  }

  runOneBatch(): Promise<Response> {
    throw new Error("Not implemented");
  }

  /**
   * Waits for the completion of an asynchronous operation and returns a Promise that resolves with an array of responses.
   *
   * @return {Promise<Response[]>} A Promise that resolves with an array of responses when the operation is complete, or rejects with an error if there is an error.
   */
  waitForComplete() {
    if (this.isComplete()) {
      return Promise.resolve(this.responses);
    }
    return new Promise<Response[]>((resolve, reject) => {
      this.on("complete", (responses) => resolve(responses));
      this.on("error", (error) => reject(error));
    });
  }

  /**
   * Runs the batch generation process.
   *
   * @return {Promise<Response[]>} A Promise that resolves with an array of responses when the batch generation is complete, or rejects with an error if there is an error.
   */
  async run() {
    this.emit("start");
    for (let i = 0; i < this.options.numBatches; i++) {
      this.emit("batch_start", {
        currentBatch: i + 1,
        totalBatches: this.options.numBatches,
      });

      try {
        const response = await this.runOneBatch();
        this.responses.push(response);

        this.emit("batch_complete", response, {
          currentBatch: i + 1,
          totalBatches: this.options.numBatches,
        });
      } catch (error) {
        this.emit("batch_error", error, {
          currentBatch: i + 1,
          totalBatches: this.options.numBatches,
        });
        this.emit("error", error);
        return;
      }
    }
    this.emit("complete", this.responses);
    return this.responses;
  }
}
