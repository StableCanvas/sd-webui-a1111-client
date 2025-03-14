import type { SDWebUIA1111Client } from "../client";
import { ExtensionScript } from "../extensions";
import { not } from "../misc";
import {
  InpaintFill,
  Img2imgProcessParams,
  Txt2imgProcessParams,
} from "../process";
import { SDProcessor } from "../process/SDProcessor";
import { SamplerName, SchedulerName } from "./types";

type RequestBody = Img2imgProcessParams & Txt2imgProcessParams;
type BodyKey = keyof RequestBody;
type BodyValue<K extends BodyKey> = NonNullable<RequestBody[K]>;

export class Pipeline {
  private processing: SDProcessor<RequestBody>;

  /**
   * Constructs a new Pipeline instance.
   *
   * @param {SDWebUIA1111Client} client - The client instance used for processing requests.
   * @param {RequestBody} [init_body={}] - The initial request body to be used for processing.
   */

  constructor(
    readonly client: SDWebUIA1111Client,
    init_body: RequestBody = {}
  ) {
    this.processing = new SDProcessor(init_body);
  }

  private async run_t2i(body: RequestBody) {
    return this.client.default.text2ImgapiSdapiV1Txt2ImgPost({
      requestBody: body,
    });
  }

  private async run_i2i(body: RequestBody) {
    return this.client.default.img2ImgapiSdapiV1Img2ImgPost({
      requestBody: body,
    });
  }

  /**
   * Adds an extension to the list of extensions.
   *
   * @param {ExtensionScript} ext - The extension to be added.
   * @return {SDProcessor<Body>} The current SDProcessing object.
   */
  use(ext: ExtensionScript) {
    this.processing.use(ext);
    return this;
  }

  /**
   * Creates and adds a new ExtensionScript to the list of extensions.
   *
   * @param {string} name - The name of the extension script.
   * @param {any[]} args - The arguments for the extension script.
   * @return {SDProcessor<Body>} The current SDProcessing object.
   */
  useCustomExt(name: string, args: any[]) {
    this.processing.useCustomExt(name, args);
    return this;
  }

  is_t2i() {
    return not(this.is_i2i());
  }

  is_i2i() {
    const { init_images, mask } = this.processing.init_body;
    const has_images = Array.isArray(init_images) && init_images.length !== 0;
    const has_mask = mask !== undefined;
    return has_images && has_mask;
  }

  run() {
    const body = this.processing.toJSON();
    if (this.is_t2i()) {
      return this.run_t2i(body);
    } else {
      return this.run_i2i(body);
    }
  }

  _write<K extends keyof RequestBody, V extends RequestBody[K]>(
    key: K,
    value: V
  ) {
    this.processing.init_body[key] = value;
  }

  // **** 拓展参数 ****

  /**
   * Sets the text prompt for image generation.
   * @param {BodyValue<"prompt">} text - The prompt text.
   * @returns {this} The pipeline instance.
   */
  prompt(text: BodyValue<"prompt">) {
    this._write("prompt", text);
    return this;
  }

  /**
   * Sets the negative prompt to avoid undesired features in the image.
   * @param {BodyValue<"negative_prompt">} text - The negative prompt text.
   * @returns {this} The pipeline instance.
   */
  negative(text: BodyValue<"negative_prompt">) {
    this._write("negative_prompt", text);
    return this;
  }

  /**
   * Sets the seed value for deterministic image generation.
   * @param {BodyValue<"seed">} seed - The seed value.
   * @returns {this} The pipeline instance.
   */
  seed(seed: BodyValue<"seed">) {
    this._write("seed", seed);
    return this;
  }

  /**
   * Sets the subseed value for variations in deterministic generation.
   * @param {BodyValue<"subseed">} seed - The subseed value.
   * @returns {this} The pipeline instance.
   */
  subseed(seed: BodyValue<"subseed">) {
    this._write("subseed", seed);
    return this;
  }

  /**
   * Sets the sampler method used for generating images.
   * @param {SamplerName} name - The sampler name.
   * @returns {this} The pipeline instance.
   */
  sampler(name: SamplerName) {
    this._write("sampler_name", name);
    return this;
  }

  /**
   * Sets the scheduler method for image generation.
   * @param {SchedulerName} name - The scheduler name.
   * @returns {this} The pipeline instance.
   */
  scheduler(name: SchedulerName) {
    this._write("scheduler", name);
    return this;
  }

  /**
   * Sets the batch size for image generation.
   * @param {BodyValue<"batch_size">} size - The batch size.
   * @returns {this} The pipeline instance.
   */
  batch(size: BodyValue<"batch_size">) {
    this._write("batch_size", size);
    return this;
  }

  /**
   * Sets the number of inference steps.
   * @param {BodyValue<"steps">} steps - The number of steps.
   * @returns {this} The pipeline instance.
   */
  steps(steps: BodyValue<"steps">) {
    this._write("steps", steps);
    return this;
  }

  /**
   * Sets the classifier-free guidance scale.
   * @param {BodyValue<"cfg_scale">} scale - The CFG scale value.
   * @returns {this} The pipeline instance.
   */
  cfg(scale: BodyValue<"cfg_scale">) {
    this._write("cfg_scale", scale);
    return this;
  }

  /**
   * Sets the image size.
   * @param {BodyValue<"width">} width - The image width.
   * @param {BodyValue<"height">} height - The image height.
   * @returns {this} The pipeline instance.
   */
  size(width: BodyValue<"width">, height: BodyValue<"height">) {
    this._write("width", width);
    this._write("height", height);
    return this;
  }

  /**
   * Enables high-resolution image generation.
   * @param {BodyValue<"enable_hr">} [enable=true] - Whether to enable high-resolution mode.
   * @returns {this} The pipeline instance.
   */
  enableHR(enable: BodyValue<"enable_hr"> = true) {
    this._write("enable_hr", enable);
    return this;
  }

  /**
   * Configures high-resolution settings.
   * @param {BodyValue<"hr_scale">} scale - The upscaling factor.
   * @param {BodyValue<"hr_upscaler">} upscaler - The upscaler algorithm.
   * @param {BodyValue<"hr_second_pass_steps">} [secondPassSteps] - Additional processing steps.
   * @returns {this} The pipeline instance.
   */
  hr(
    scale: BodyValue<"hr_scale">,
    upscaler: BodyValue<"hr_upscaler">,
    secondPassSteps?: BodyValue<"hr_second_pass_steps">
  ) {
    this.enableHR(true);
    this._write("hr_scale", scale);
    this._write("hr_upscaler", upscaler);
    if (secondPassSteps !== undefined) {
      this._write("hr_second_pass_steps", secondPassSteps);
    }
    return this;
  }

  /**
   * Overrides some of the processing settings.
   * @param {BodyValue<"override_settings">} settings - The settings to override.
   * @param {boolean} [restore_afterwards=false] - Whether to restore the original settings after processing.
   * @returns {this} The pipeline instance.
   */
  override(
    settings: BodyValue<"override_settings">,
    restore_afterwards = false
  ) {
    this._write("override_settings", {
      ...this.processing.init_body.override_settings,
      ...settings,
    });
    this._write("override_settings_restore_afterwards", restore_afterwards);
    return this;
  }

  /**
   * Sets the model checkpoint to be used for processing.
   * @param {string} sd_model_checkpoint - The checkpoint identifier for the model.
   * @param {boolean} [restore_afterwards=false] - Whether to restore the original model checkpoint after processing.
   * @returns {this} The pipeline instance.
   */

  model(sd_model_checkpoint: string, restore_afterwards = false) {
    this.override(
      { sd_model_checkpoint: sd_model_checkpoint },
      restore_afterwards
    );
    return this;
  }

  /**
   * Sets the script to be used for processing.
   *
   * @param {BodyValue<"script_name">} name - The name of the script.
   * @param {BodyValue<"script_args">} [args] - Optional arguments for the script.
   * @returns {this} The pipeline instance.
   */
  script(name: BodyValue<"script_name">, args?: BodyValue<"script_args">) {
    this._write("script_name", name);
    if (args) {
      this._write("script_args", args);
    }
    return this;
  }

  /**
   * Controls whether images are saved to disk or not.
   * @param {BodyValue<"save_images">} [save=true] - Whether to save images.
   * @returns {this} The pipeline instance.
   */
  saveImages(save: BodyValue<"save_images"> = true) {
    this._write("save_images", save);
    return this;
  }

  /**
   * Controls whether generated images are sent back to the client or not.
   * @param {BodyValue<"send_images">} [send=true] - Whether to send images.
   * @returns {this} The pipeline instance.
   */
  sendImages(send: BodyValue<"send_images"> = true) {
    this._write("send_images", send);
    return this;
  }

  /**
   * Sets the denoising strength for image processing.
   * @param {BodyValue<"denoising_strength">} value - The denoising strength value.
   * @returns {this} The pipeline instance.
   */

  strength(value: BodyValue<"denoising_strength">) {
    this._write("denoising_strength", value);
    return this;
  }

  /**
   * Sets the initial images for image processing.
   * @param {...BodyValue<"init_images">} images - The initial images.
   * @returns {this} The pipeline instance.
   */
  images(...images: BodyValue<"init_images">) {
    this._write("init_images", images);
    return this;
  }

  /**
   * Sets the resize mode for image processing.
   * @param {BodyValue<"resize_mode">} mode - The resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
   * @returns {this} The pipeline instance.
   */
  resizeMode(mode: BodyValue<"resize_mode">) {
    this._write("resize_mode", mode);
    return this;
  }

  /**
   * Sets the image configuration scale used in image processing.
   * @param {BodyValue<"image_cfg_scale">} scale - The scale value for image configuration.
   * @returns {this} The pipeline instance.
   */

  imageCfgScale(scale: BodyValue<"image_cfg_scale">) {
    this._write("image_cfg_scale", scale);
    return this;
  }

  /**
   * Sets the mask for image processing.
   * @param {BodyValue<"mask">} mask - The mask image (base64).
   * @param {Object} [options] - Optional parameters.
   * @param {BodyValue<"mask_blur_x">} [options.blurX] - The blur value for the mask in the X direction.
   * @param {BodyValue<"mask_blur_y">} [options.blurY] - The blur value for the mask in the Y direction.
   * @param {BodyValue<"mask_blur">} [options.blur] - The blur value for the mask.
   * @param {BodyValue<"mask_round">} [options.round] - Whether to round the mask.
   * @returns {this} The pipeline instance.
   */
  mask(
    mask: BodyValue<"mask">,
    {
      blur,
      blurX,
      blurY,
      round,
    }: {
      blurX?: BodyValue<"mask_blur_x">;
      blurY?: BodyValue<"mask_blur_y">;
      blur?: BodyValue<"mask_blur">;
      round?: BodyValue<"mask_round">;
    } = {}
  ) {
    this._write("mask", mask);
    if (blurX !== undefined) this._write("mask_blur_x", blurX);
    if (blurY !== undefined) this._write("mask_blur_y", blurY);
    if (blur !== undefined) this._write("mask_blur", blur);
    if (round !== undefined) this._write("mask_round", round);
    return this;
  }

  /**
   * Configures inpainting settings for image processing.
   *
   * @param {BodyValue<"inpainting_fill">} fill - The fill type for inpainting, defaults to original.
   * @param {Object} [options] - Optional parameters for inpainting.
   * @param {BodyValue<"inpaint_full_res">} [options.fullRes] - Whether to use full resolution for inpainting.
   * @param {BodyValue<"inpaint_full_res_padding">} [options.fullResPadding] - Padding to apply when using full resolution.
   * @param {BodyValue<"inpainting_mask_invert">} [options.maskInvert] - Invert the mask for inpainting.
   * @returns {this} The pipeline instance.
   */

  inpainting(
    fill: BodyValue<"inpainting_fill"> = InpaintFill.original,
    {
      fullRes,
      fullResPadding,
      maskInvert,
    }: {
      fullRes?: BodyValue<"inpaint_full_res">;
      fullResPadding?: BodyValue<"inpaint_full_res_padding">;
      maskInvert?: BodyValue<"inpainting_mask_invert">;
    } = {}
  ) {
    this._write("inpainting_fill", fill);
    this._write("inpaint_full_res", fullRes);
    if (fullResPadding !== undefined)
      this._write("inpaint_full_res_padding", fullResPadding);
    if (maskInvert !== undefined)
      this._write("inpainting_mask_invert", maskInvert);
    return this;
  }

  /**
   * Sets the initial noise multiplier.
   * @param {BodyValue<"initial_noise_multiplier">} value - The initial noise multiplier.
   * @returns {this} The pipeline instance.
   */
  initialNoiseMultiplier(value: BodyValue<"initial_noise_multiplier">) {
    this._write("initial_noise_multiplier", value);
    return this;
  }

  /**
   * Sets the always-on scripts.
   * @param {BodyValue<"alwayson_scripts">} scripts - The always-on scripts configuration.
   * @returns {this} The pipeline instance.
   */

  alwaysOnScripts(scripts: BodyValue<"alwayson_scripts">) {
    this._write("alwayson_scripts", scripts);

    return this;
  }
}
