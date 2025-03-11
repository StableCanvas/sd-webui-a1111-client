import type {
  SDWebUIA1111Client,
  StableDiffusionProcessingImg2Img,
  StableDiffusionProcessingTxt2Img,
} from "../client";
import { ExtensionScript } from "../extensions";
import { not } from "../misc";
import { SDProcessor } from "../process/SDProcessor";
import { SamplerName, SchedulerName } from "./types";

type RequestBody = StableDiffusionProcessingTxt2Img &
  StableDiffusionProcessingImg2Img;
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
    const { init_images } = this.processing.init_body;
    return Array.isArray(init_images) && init_images.length !== 0;
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
  prompt(text: BodyValue<"prompt">) {
    this._write("prompt", text);
    return this;
  }

  negative(text: BodyValue<"negative_prompt">) {
    this._write("negative_prompt", text);
    return this;
  }

  seed(seed: BodyValue<"seed">) {
    this._write("seed", seed);
    return this;
  }

  subseed(seed: BodyValue<"subseed">) {
    this._write("subseed", seed);
    return this;
  }

  sampler(name: SamplerName) {
    this._write("sampler_name", name);
    return this;
  }

  scheduler(name: SchedulerName) {
    this._write("scheduler", name);
    return this;
  }

  batch(size: BodyValue<"batch_size">) {
    this._write("batch_size", size);
    return this;
  }

  steps(steps: BodyValue<"steps">) {
    this._write("steps", steps);
    return this;
  }

  cfg(scale: BodyValue<"cfg_scale">) {
    this._write("cfg_scale", scale);
    return this;
  }

  size(width: BodyValue<"width">, height: BodyValue<"height">) {
    this._write("width", width);
    this._write("height", height);
    return this;
  }

  enableHR(enable: BodyValue<"enable_hr"> = true) {
    this._write("enable_hr", enable);
    return this;
  }

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

  model(sd_model_checkpoint: string, restore_afterwards = false) {
    this.override(
      { sd_model_checkpoint: sd_model_checkpoint },
      restore_afterwards
    );
    return this;
  }

  script(name: BodyValue<"script_name">, args?: BodyValue<"script_args">) {
    this._write("script_name", name);
    if (args) {
      this._write("script_args", args);
    }
    return this;
  }

  saveImages(save: BodyValue<"save_images"> = true) {
    this._write("save_images", save);
    return this;
  }

  sendImages(send: BodyValue<"send_images"> = true) {
    this._write("send_images", send);
    return this;
  }

  strength(value: BodyValue<"denoising_strength">) {
    this._write("denoising_strength", value);
    return this;
  }

  images(...images: BodyValue<"init_images">) {
    this._write("init_images", images);
    return this;
  }

  resizeMode(mode: BodyValue<"resize_mode">) {
    this._write("resize_mode", mode);
    return this;
  }

  imageCfgScale(scale: BodyValue<"image_cfg_scale">) {
    this._write("image_cfg_scale", scale);
    return this;
  }

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
    }
  ) {
    this._write("mask", mask);
    if (blurX !== undefined) this._write("mask_blur_x", blurX);
    if (blurY !== undefined) this._write("mask_blur_y", blurY);
    if (blur !== undefined) this._write("mask_blur", blur);
    if (round !== undefined) this._write("mask_round", round);
    return this;
  }

  inpainting(
    fill: BodyValue<"inpainting_fill">,
    {
      fullRes,
      fullResPadding,
      maskInvert,
    }: {
      fullRes: BodyValue<"inpaint_full_res">;
      fullResPadding?: BodyValue<"inpaint_full_res_padding">;
      maskInvert?: BodyValue<"inpainting_mask_invert">;
    }
  ) {
    this._write("inpainting_fill", fill);
    this._write("inpaint_full_res", fullRes);
    if (fullResPadding !== undefined)
      this._write("inpaint_full_res_padding", fullResPadding);
    if (maskInvert !== undefined)
      this._write("inpainting_mask_invert", maskInvert);
    return this;
  }

  initialNoiseMultiplier(value: BodyValue<"initial_noise_multiplier">) {
    this._write("initial_noise_multiplier", value);
    return this;
  }

  alwaysOnScripts(scripts: BodyValue<"alwayson_scripts">) {
    this._write("alwayson_scripts", scripts);
    return this;
  }
}
