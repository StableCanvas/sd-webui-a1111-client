import {
  StableDiffusionProcessingImg2Img,
  StableDiffusionProcessingTxt2Img,
  modules__api__models__ProgressResponse,
} from "../client";
import { BatchGeneration } from "./BatchGeneration";
import { CachedApi } from "./CachedApi";
import { GenerationResponseInfo } from "./service.types";

import EventEmitter from "eventemitter3";

class Img2imgBatchGeneration extends BatchGeneration<
  StableDiffusionProcessingImg2Img,
  { images: string[]; info: GenerationResponseInfo }
> {
  constructor(
    readonly serviceApi: ServiceApi,
    body: StableDiffusionProcessingImg2Img,
    options: { batchSize: number; numBatches: number }
  ) {
    super(body, options);
  }

  async runOneBatch() {
    const resp = await this.serviceApi.img2img({
      ...this.body,
      batch_size: this.options.batchSize,
    });
    return resp;
  }
}

class Txt2imgBatchGeneration extends BatchGeneration<
  StableDiffusionProcessingTxt2Img,
  { images: string[]; info: GenerationResponseInfo }
> {
  constructor(
    readonly serviceApi: ServiceApi,
    body: StableDiffusionProcessingTxt2Img,
    options: { batchSize: number; numBatches: number }
  ) {
    super(body, options);
  }

  async runOneBatch() {
    const resp = await this.serviceApi.txt2img({
      ...this.body,
      batch_size: this.options.batchSize,
    });
    return resp;
  }
}

type ProgressResponse = modules__api__models__ProgressResponse;

class ProgressWatcher extends EventEmitter<{
  progress: (progress: ProgressResponse) => void;
  done: () => void;
}> {
  isDone = false;

  constructor(
    readonly options: {
      intervalMs: number;
    },
    readonly serviceApi: ServiceApi
  ) {
    super();
  }

  async start(params?: { getCurrentImage?: boolean | undefined }) {
    while (!this.isDone) {
      const progress = await this.serviceApi.progress(params);
      this.emit("progress", progress);
      await new Promise((resolve) =>
        setTimeout(resolve, this.options.intervalMs)
      );
    }
    this.emit("done");
  }

  stop() {
    this.isDone = true;
  }
}

export class ServiceApi extends CachedApi {
  /**
   * Retrieves the SD models from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the SD models.
   */
  private async _getSDModels() {
    const resp = await this.client.default.getSdModelsSdapiV1SdModelsGet();
    return resp;
  }

  /**
   * Retrieves the samplers from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the samplers.
   */
  private async _getSamplers() {
    const resp = await this.client.default.getSamplersSdapiV1SamplersGet();
    return resp;
  }

  /**
   * Retrieves the SD models from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the SD models.
   */
  async getSDModels() {
    const key = "sdmodels";
    return this._getFromCacheOrFetch(key, this._getSDModels.bind(this));
  }

  /**
   * Retrieves the samplers from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the samplers.
   */
  async getSamplers() {
    const key = "samplers";
    return this._getFromCacheOrFetch(key, this._getSamplers.bind(this));
  }

  /**
   * Retrieves the embeddings from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the embeddings.
   */
  private async _getEmbeddings() {
    const resp = await this.client.default.getEmbeddingsSdapiV1EmbeddingsGet();
    return resp;
  }

  /**
   * Retrieves the embeddings from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the embeddings.
   */
  async getEmbeddings() {
    const key = "embeddings";
    return this._getFromCacheOrFetch(key, this._getEmbeddings.bind(this));
  }

  /**
   * Retrieves the extension list from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the extension list.
   */
  private async _getExtensionList() {
    const resp =
      await this.client.default.getExtensionsListSdapiV1ExtensionsGet();
    return resp;
  }

  /**
   * Retrieves the extension list from the API.
   *
   * @return {Promise<Response>} A promise that resolves to the response containing the extension list.
   */
  async getExtensionList() {
    const key = "extensions";
    return this._getFromCacheOrFetch(key, this._getExtensionList.bind(this));
  }

  /**
   * Pings the API to check the response time.
   *
   * @return {Promise<{ success: boolean, time: number, error?: any }>} An object containing the success status,
   * the response time in milliseconds, and an optional error object if the ping fails.
   */
  async ping() {
    const start = Date.now();
    try {
      await this.client.default.lambdaInternalPingGet();
      return {
        success: true,
        time: Date.now() - start,
      };
    } catch (error) {
      return {
        success: false,
        time: Date.now() - start,
        error,
      };
    }
  }

  /**
   * Asynchronously sends an image to the server for processing and returns the processed image and information.
   *
   * @param {StableDiffusionProcessingImg2Img} requestBody - The image to be processed.
   * @return {Promise<{ image: string, images: string[], info: GenerationResponseInfo }>} The processed image and information.
   */
  async img2img(requestBody: StableDiffusionProcessingImg2Img) {
    const resp = await this.client.default.img2ImgapiSdapiV1Img2ImgPost({
      requestBody,
    });
    const image = resp.images?.[0];
    if (!image) {
      throw new Error("No image returned from the server.");
    }
    return {
      image,
      images: resp.images || [],
      info: JSON.parse(resp.info) as GenerationResponseInfo,
    };
  }

  /**
   * Asynchronously sends a text to the server for processing and returns the processed image and information.
   *
   * @param {StableDiffusionProcessingTxt2Img} requestBody - The text to be processed.
   * @return {Promise<{ image: string, images: string[], info: GenerationResponseInfo }>} The processed image and information.
   */
  async txt2img(requestBody: StableDiffusionProcessingTxt2Img) {
    const resp = await this.client.default.text2ImgapiSdapiV1Txt2ImgPost({
      requestBody,
    });
    const image = resp.images?.[0];
    if (!image) {
      throw new Error("No image returned from the server.");
    }
    return {
      image,
      images: resp.images || [],
      info: JSON.parse(resp.info) as GenerationResponseInfo,
    };
  }

  /**
   * Asynchronously creates a batch of image-to-image generations and returns the batch object.
   *
   * @param {StableDiffusionProcessingImg2Img} body - The image to be processed.
   * @param {Object} options - The options for the batch generation.
   * @param {number} options.batchSize - The number of images to generate in each batch.
   * @param {number} options.numBatches - The total number of batches to generate.
   * @param {boolean} options.manual - Whether to manually run the batch generation.
   * @return {Promise<Img2imgBatchGeneration>} A promise that resolves to the batch object.
   */
  async img2imgBatch(
    body: StableDiffusionProcessingImg2Img,
    options: { batchSize: number; numBatches: number; manual?: boolean }
  ) {
    const batch = new Img2imgBatchGeneration(this, body, options);
    if (!options.manual) {
      batch.run();
    }
    return batch;
  }

  /**
   * Asynchronously creates a batch of text-to-image generations and returns the batch object.
   *
   * @param {StableDiffusionProcessingTxt2Img} body - The text to be processed.
   * @param {Object} options - The options for the batch generation.
   * @param {number} options.batchSize - The number of images to generate in each batch.
   * @param {number} options.numBatches - The total number of batches to generate.
   * @param {boolean} options.manual - Whether to manually run the batch generation.
   * @return {Promise<Txt2imgBatchGeneration>} A promise that resolves to the batch object.
   */
  async txt2imgBatch(
    body: StableDiffusionProcessingTxt2Img,
    options: { batchSize: number; numBatches: number; manual?: boolean }
  ) {
    const batch = new Txt2imgBatchGeneration(this, body, options);
    if (!options.manual) {
      batch.run();
    }
    return batch;
  }

  /**
   * Asynchronously retrieves the progress of a task.
   *
   * @param {Object} [params] - Optional parameters for the progress request.
   * @param {boolean} [params.getCurrentImage] - Whether to include the current image in the response. Defaults to false.
   * @return {Promise<Object>} A promise that resolves to the progress response object.
   */
  async progress(params?: { getCurrentImage?: boolean }) {
    const resp = await this.client.default.progressapiSdapiV1ProgressGet({
      skipCurrentImage: !params?.getCurrentImage,
    });
    return resp;
  }

  /**
   * Asynchronously watches the progress of current task.
   *
   * @param {Object} options - The options for the progress watcher.
   * @param {number} options.intervalMs - The interval in milliseconds to check the progress.
   * @param {boolean} options.manual - Whether to manually start the progress watcher.
   * @param {boolean} options.getCurrentImage - Whether to include the current image in the response. Defaults to false.
   * @return {ProgressWatcher} The progress watcher object.
   */
  watchProgress(options: {
    intervalMs: number;
    manual?: boolean;
    getCurrentImage?: boolean;
  }) {
    const watcher = new ProgressWatcher(options, this);
    if (!options.manual) {
      watcher.start({
        getCurrentImage: options.getCurrentImage,
      });
    }
    return watcher;
  }
}
