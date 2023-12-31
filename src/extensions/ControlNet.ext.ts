import { ExtensionScript } from "./ExtensionScript";

interface ControlNetUnitRequest {
  /**
   * Image to use in this unit.
   * Defaults to null.
   */
  input_image?: string | null;

  /**
   * Mask pixel_perfect to filter the image.
   * Defaults to null.
   */
  mask?: string | null;

  /**
   * Preprocessor to use on the image passed to this unit before using it for conditioning.
   * Accepts values returned by the /controlnet/module_list route.
   * Defaults to "none".
   */
  module?: string;

  /**
   * Name of the model to use for conditioning in this unit.
   * Accepts values returned by the /controlnet/model_list route.
   * Defaults to "None".
   */
  model?: string;

  /**
   * Weight of this unit.
   * Defaults to -1.
   */
  weight?: number;

  /**
   * How to resize the input image so as to fit the output resolution of the generation.
   * Defaults to "Scale to Fit (Inner Fit)".
   * Accepted values:
   * - 0 or "Just Resize": simply resize the image to the target width/height
   * - 1 or "Scale to Fit (Inner Fit)": scale and crop to fit smallest dimension, preserves proportions
   * - 2 or "Envelope (Outer Fit)": scale to fit largest dimension, preserves proportions
   */
  resize_mode?: ResizeMode;

  /**
   * Whether to compensate low GPU memory with processing time.
   * Defaults to false.
   */
  lowvram?: boolean;

  /**
   * Resolution of the preprocessor.
   * Defaults to -1.
   */
  processor_res?: number;

  /**
   * First parameter of the preprocessor.
   * Only takes effect when preprocessor accepts arguments.
   * Defaults to -1.
   */
  threshold_a?: number;

  /**
   * Second parameter of the preprocessor, same as above for usage.
   * Defaults to -1.
   */
  threshold_b?: number;

  /**
   * Ratio of generation where this unit starts to have an effect.
   * Defaults to 0.0.
   */
  guidance_start?: number;

  /**
   * Ratio of generation where this unit stops to have an effect.
   * Defaults to 1.0.
   */
  guidance_end?: number;

  /**
   * See the related issue for usage.
   * Defaults to 0.
   * Accepted values:
   * - 0 or "Balanced": balanced, no preference between prompt and control model
   * - 1 or "My prompt is more important": the prompt has more impact than the model
   * - 2 or "ControlNet is more important": the controlnet model has more impact than the prompt
   */
  control_mode?: ControlMode;

  /**
   * Enable pixel-perfect preprocessor.
   * Defaults to false.
   */
  pixel_perfect?: boolean;
}

type ResizeMode =
  | "Just Resize"
  | "Scale to Fit (Inner Fit)"
  | "Envelope (Outer Fit)"
  | 0
  | 1
  | 2;

type ControlMode =
  | "Balanced"
  | "My prompt is more important"
  | "ControlNet is more important"
  | 0
  | 1
  | 2;

const defaultControlNetUnitRequest = (): ControlNetUnitRequest => ({
  input_image: null,
  mask: null,
  module: "none",
  model: "None",
  weight: 1,
  resize_mode: "Scale to Fit (Inner Fit)",
  lowvram: false,
  processor_res: -1,
  threshold_a: -1,
  threshold_b: -1,
  guidance_start: 0.0,
  guidance_end: 1.0,
  control_mode: "Balanced",
  pixel_perfect: false,
});

export class ControlNetExt extends ExtensionScript<
  Array<Partial<ControlNetUnitRequest>>
> {
  constructor(unit0?: Partial<ControlNetUnitRequest>) {
    super("ControlNet", []);
    if (unit0) {
      this.addUnit(unit0);
    }
  }

  addUnit(unit: Partial<ControlNetUnitRequest>) {
    if (Object.keys(unit).length === 0) {
      throw new Error("Unit must have at least one key");
    }

    this.args.push({
      ...defaultControlNetUnitRequest(),
      ...unit,
    });
  }

  clear() {
    this.args = [];
  }
}
