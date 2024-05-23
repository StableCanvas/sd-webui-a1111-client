import { StableDiffusionProcessingTxt2Img } from "../client";
import { ControlNetExt, ControlNetUnitRequest } from "../extensions";
import {
  Img2imgProcess,
  Img2imgProcessParams,
  Txt2imgProcess,
  Txt2imgProcessParams,
} from "../process";
import { BatchGeneration } from "./BatchGeneration";
import { CachedApi } from "./CachedApi";
import { ControlTypes } from "./cnet.types";
import {
  ModelListResponse,
  ModuleListResponse,
  ControlNetDetectRequestBody,
  DetectResponse,
} from "./cnet.types";
import { GenerationResponseInfo } from "./service.types";

class Img2imgBatchGeneration extends BatchGeneration<
  Img2imgProcessParams,
  { images: string[]; info: GenerationResponseInfo }
> {
  constructor(
    readonly api: ControlNetApi,
    body: Img2imgProcessParams,
    options: { batchSize: number; numBatches: number },
    readonly units: ControlNetUnitRequest[]
  ) {
    super(body, options);
  }

  async runOneBatch() {
    const resp = await this.api.img2img({
      params: {
        ...this.body,
        batch_size: this.options.batchSize,
      },
      units: this.units,
    });
    return resp;
  }
}

class Txt2imgBatchGeneration extends BatchGeneration<
  Txt2imgProcessParams,
  { images: string[]; info: GenerationResponseInfo }
> {
  constructor(
    readonly api: ControlNetApi,
    body: Txt2imgProcessParams,
    options: { batchSize: number; numBatches: number },
    readonly units: ControlNetUnitRequest[]
  ) {
    super(body, options);
  }

  async runOneBatch() {
    const resp = await this.api.txt2img({
      params: {
        ...this.body,
        batch_size: this.options.batchSize,
      },
      units: this.units,
    });
    return resp;
  }
}

export class ControlNetApi extends CachedApi {
  get client() {
    return this.options.client;
  }

  /**
   * Retrieves a list of models from the controlnet API.
   *
   * @return {Promise<string[]>} A promise that resolves to an array of model names.
   */
  private async _getModels() {
    const resp: ModelListResponse =
      await this.client.default.modelListControlnetModelListGet({});
    return (resp?.model_list || []) as string[];
  }

  /**
   * Retrieves the module list response from the controlnet API.
   *
   * @return {Promise<ModuleListResponse>} A promise that resolves to the module list response.
   */
  private async _getModuleResponse() {
    const resp: ModuleListResponse =
      await this.client.default.moduleListControlnetModuleListGet({});
    return resp;
  }

  /**
   * Retrieves a list of models from the controlnet API, caching the result if caching is enabled.
   *
   * @return {Promise<string[]>} A promise that resolves to an array of model names.
   */
  async getModels() {
    const key = "models";
    return this._getFromCacheOrFetch(key, this._getModels.bind(this));
  }

  /**
   * Retrieves a list of modules from the cache if caching is enabled, otherwise makes a request to the controlnet API.
   *
   * @return {Promise<string[]>} A promise that resolves to an array of module names.
   */
  async getModules() {
    const key = "modules";
    return this._getFromCacheOrFetch(key, this._getModuleResponse.bind(this));
  }

  /**
   * Retrieves the detail of a module from the cache if caching is enabled, otherwise makes a request to the controlnet API.
   *
   * @param {string} module - The name of the module to retrieve the detail for.
   * @return {Promise<{model_free: boolean, sliders: {max: number, min: number, name: string, step: number, value: number}[],}>} A promise that resolves to the module detail.
   */
  async getModuleDetail(module: string) {
    const key = `module_detail_${module}`;
    return this._getFromCacheOrFetch(key, this._getModuleResponse.bind(this));
  }

  /**
   * Retrieves the version of the controlnet API.
   *
   * @return {Promise<number>} A promise that resolves to the version number.
   */
  private async _getVersion() {
    const resp: {
      version: number;
    } = await this.client.default.versionControlnetVersionGet();
    return resp.version;
  }

  /**
   * Retrieves the control types from the controlnet API.
   *
   * @return {Promise<ControlTypes>} A promise that resolves to the control types.
   **/
  private async _getControlTypes() {
    const resp: {
      control_types: ControlTypes;
    } = await this.client.default.controlTypesControlnetControlTypesGet();
    return resp.control_types;
  }

  /**
   * Retrieves the control types from the controlnet API.
   *
   * @return {Promise<ControlTypes>} A promise that resolves to the control types.
   **/
  async getControlTypes() {
    const key = "control_types";
    return this._getFromCacheOrFetch(key, this._getControlTypes.bind(this));
  }

  /**
   * Retrieves the version of the controlnet API.
   *
   * @return {Promise<number>} A promise that resolves to the version number.
   */
  async getVersion() {
    const key = "version";
    return this._getFromCacheOrFetch(key, this._getVersion.bind(this));
  }

  /**
   * Retrieves the details of all modules from the cache if caching is enabled, otherwise makes a request to the controlnet API.
   *
   * @return {Promise<Record<string, {model_free: boolean, sliders: {max: number, min: number, name: string, step: number, value: number}[],}>} A promise that resolves to an object containing the details of all modules.
   */
  async getAllModuleDetail() {
    const key = "all_module_detail";
    return this._getFromCacheOrFetch(key, this._getModuleResponse.bind(this));
  }

  /**
   * Detects objects in an image using the controlnet API.
   *
   * @param {ControlNetDetectRequestBody} params - The parameters for the detection.
   * @return {Promise<DetectResponse>} A promise that resolves to the detection response.
   */
  async detect(params: ControlNetDetectRequestBody) {
    const resp: DetectResponse =
      await this.client.default.detectControlnetDetectPost({
        requestBody: params,
      });
    return resp;
  }

  /**
   * Asynchronously sends a text to the server for processing and returns the processed image and information.
   *
   * @param {Object} options - The options for the text to image processing.
   * @param {Txt2imgProcessParams} options.params - The parameters for the text to image processing.
   * @param {ControlNetUnitRequest[]} options.units - The control net units for the text to image processing.
   * @return {Promise<{ image: string, images: string[], info: GenerationResponseInfo }>} The processed image and information.
   * @throws {Error} If no image is returned from the server.
   */
  async txt2img({
    params,
    units,
  }: {
    params: Txt2imgProcessParams;
    units: ControlNetUnitRequest[];
  }) {
    if (units.length === 0) {
      throw new Error(
        "At least one control net unit is required for text to image processing."
      );
    }

    const pc1 = new Txt2imgProcess(params);
    const cnet_ext = new ControlNetExt();
    for (const unit of units) {
      cnet_ext.addUnit(unit);
    }
    pc1.use(cnet_ext);
    const resp = await pc1.request(this.client);
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
   * Asynchronously sends an image to the server for processing and returns the processed image and information.
   *
   * @param {Object} options - The options for the image to image processing.
   * @param {Img2imgProcessParams} options.params - The parameters for the image to image processing.
   * @param {ControlNetUnitRequest[]} options.units - The control net units for the image to image processing.
   * @return {Promise<{ image: string, images: string[], info: GenerationResponseInfo }>} The processed image and information.
   * @throws {Error} If no image is returned from the server.
   */
  async img2img({
    params,
    units,
  }: {
    params: Img2imgProcessParams;
    units: ControlNetUnitRequest[];
  }) {
    if (units.length === 0) {
      throw new Error(
        "At least one control net unit is required for text to image processing."
      );
    }

    const pc1 = new Img2imgProcess(params);
    const cnet_ext = new ControlNetExt();
    for (const unit of units) {
      cnet_ext.addUnit(unit);
    }
    pc1.use(cnet_ext);
    const resp = await pc1.request(this.client);
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
   * @param {Object} param - The parameters for the batch generation.
   * @param {Img2imgProcessParams} param.params - The image processing parameters.
   * @param {Object} param.options - The options for the batch generation.
   * @param {number} param.options.batchSize - The number of images to generate in each batch.
   * @param {number} param.options.numBatches - The total number of batches to generate.
   * @param {boolean} [param.options.manual] - Whether to manually run the batch generation.
   * @param {ControlNetUnitRequest[]} param.units - The control network units for the batch generation.
   * @return {Promise<Img2imgBatchGeneration>} A promise that resolves to the batch object.
   */
  async img2imgBatch({
    params,
    options,
    units,
  }: {
    params: Img2imgProcessParams;
    options: { batchSize: number; numBatches: number; manual?: boolean };
    units: ControlNetUnitRequest[];
  }) {
    const batch = new Img2imgBatchGeneration(this, params, options, units);
    if (!options.manual) {
      batch.run();
    }
    return batch;
  }

  /**
   * Asynchronously sends a text to the server for processing and returns the processed image and information.
   *
   * @param {Object} options - The options for the text to image processing.
   * @param {Txt2imgProcessParams} options.params - The parameters for the text to image processing.
   * @param {Object} options.options - The options for the text to image processing.
   * @param {number} options.options.batchSize - The number of images to generate in each batch.
   * @param {number} options.options.numBatches - The total number of batches to generate.
   * @param {boolean} [options.options.manual] - Whether to manually run the batch generation.
   * @param {ControlNetUnitRequest[]} options.units - The control net units for the batch generation.
   * @return {Promise<Txt2imgBatchGeneration>} A promise that resolves to the batch object.
   */
  async txt2imgBatch({
    params,
    options,
    units,
  }: {
    params: Txt2imgProcessParams;
    options: { batchSize: number; numBatches: number; manual?: boolean };
    units: ControlNetUnitRequest[];
  }) {
    const batch = new Txt2imgBatchGeneration(this, params, options, units);
    if (!options.manual) {
      batch.run();
    }
    return batch;
  }
}
