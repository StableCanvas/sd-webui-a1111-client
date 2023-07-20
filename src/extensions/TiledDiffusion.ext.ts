import { ExtensionScript } from "./ExtensionScript";

/**
 * Parameters for tiled diffusion processing
 */
export interface TiledDiffusionParams {
  /**
   * Whether to enable tiled diffusion
   */
  enabled: boolean;

  /**
   * Tiled diffusion method to use
   */
  method: TiledDiffusionMethod;

  /**
   * Whether to overwrite image size instead of using original size
   */
  overwrite_size: boolean;

  /**
   * Keep input image size when doing img2img
   */
  keep_input_size: boolean;

  /**
   * Image width when overwriting size
   */
  image_width: number;

  /**
   * Image height when overwriting size
   */
  image_height: number;

  /**
   * Width of each latent tile
   */
  tile_width: number;

  /**
   * Height of each latent tile
   */
  tile_height: number;

  /**
   * Overlap between latent tiles
   */
  overlap: number;

  /**
   * Batch size for processing latent tiles
   */
  tile_batch_size: number;

  /**
   * Name of upscaler to use for img2img
   */
  upscaler_name: string;

  /**
   * Scale factor for img2img upscaling
   */
  scale_factor: number;

  /**
   * Whether to enable noise inversion
   */
  noise_inverse: boolean;

  /**
   * Number of steps to run noise inversion
   */
  noise_inverse_steps: number;

  /**
   * Noise inversion retouch strength
   */
  noise_inverse_retouch: number;

  /**
   * Noise renoise strength after inversion
   */
  noise_inverse_renoise_strength: number;

  /**
   * Kernel size for renoise after inversion
   */
  noise_inverse_renoise_kernel: number;

  /**
   * Whether to move control tensor to CPU
   */
  control_tensor_cpu: boolean;

  /**
   * Whether region prompt control is enabled
   */
  enable_bbox_control: boolean;

  /**
   * Whether to draw full background when using region control
   */
  draw_background: boolean;

  /**
   * Whether layers are causaled when using region control
   */
  causal_layers: boolean;

  // Bounding box control params
  bbox_control_states: any[];
}

/**
 * Default arguments for tiled diffusion processing
 */
export type TiledDiffusionArgs = [
  enabled: TiledDiffusionParams["enabled"],
  method: TiledDiffusionParams["method"],
  overwrite_size: TiledDiffusionParams["overwrite_size"],
  keep_input_size: TiledDiffusionParams["keep_input_size"],
  image_width: TiledDiffusionParams["image_width"],
  image_height: TiledDiffusionParams["image_height"],
  tile_width: TiledDiffusionParams["tile_width"],
  tile_height: TiledDiffusionParams["tile_height"],
  overlap: TiledDiffusionParams["overlap"],
  tile_batch_size: TiledDiffusionParams["tile_batch_size"],
  upscaler_name: TiledDiffusionParams["upscaler_name"],
  scale_factor: TiledDiffusionParams["scale_factor"],
  noise_inverse: TiledDiffusionParams["noise_inverse"],
  noise_inverse_steps: TiledDiffusionParams["noise_inverse_steps"],
  noise_inverse_retouch: TiledDiffusionParams["noise_inverse_retouch"],
  noise_inverse_renoise_strength: TiledDiffusionParams["noise_inverse_renoise_strength"],
  noise_inverse_renoise_kernel: TiledDiffusionParams["noise_inverse_renoise_kernel"],
  control_tensor_cpu: TiledDiffusionParams["control_tensor_cpu"],
  enable_bbox_control: TiledDiffusionParams["enable_bbox_control"],
  draw_background: TiledDiffusionParams["draw_background"],
  causal_layers: TiledDiffusionParams["causal_layers"],
  bbox_control_states: TiledDiffusionParams["bbox_control_states"]
];

/**
 * Tiled diffusion methods
 */
export enum TiledDiffusionMethod {
  MULTI_DIFF = "MultiDiffusion",
  MIX_DIFF = "Mixture of Diffusers",
}

/**
 * Get default parameters for tiled diffusion
 */
function default_params(): TiledDiffusionParams {
  return {
    enabled: true,
    method: TiledDiffusionMethod.MULTI_DIFF,
    overwrite_size: false,
    keep_input_size: true,
    image_width: 1024,
    image_height: 1024,
    tile_width: 96,
    tile_height: 96,
    overlap: 48,
    tile_batch_size: 4,
    upscaler_name: "None",
    scale_factor: 2.0,
    noise_inverse: false,
    noise_inverse_steps: 10,
    noise_inverse_retouch: 1,
    noise_inverse_renoise_strength: 1,
    noise_inverse_renoise_kernel: 64,
    control_tensor_cpu: false,
    enable_bbox_control: false,
    draw_background: false,
    causal_layers: false,
    bbox_control_states: [],
  };
}

const params2args = (
  params?: Partial<TiledDiffusionParams>
): TiledDiffusionArgs => {
  const {
    enabled,
    method,
    overwrite_size,
    keep_input_size,
    image_width,
    image_height,
    tile_width,
    tile_height,
    overlap,
    tile_batch_size,
    upscaler_name,
    scale_factor,
    noise_inverse,
    noise_inverse_steps,
    noise_inverse_retouch,
    noise_inverse_renoise_strength,
    noise_inverse_renoise_kernel,
    control_tensor_cpu,
    enable_bbox_control,
    draw_background,
    causal_layers,
    bbox_control_states,
  } = { ...default_params(), ...params };

  return [
    enabled,
    method,
    overwrite_size,
    keep_input_size,
    image_width,
    image_height,
    tile_width,
    tile_height,
    overlap,
    tile_batch_size,
    upscaler_name,
    scale_factor,
    noise_inverse,
    noise_inverse_steps,
    noise_inverse_retouch,
    noise_inverse_renoise_strength,
    noise_inverse_renoise_kernel,
    control_tensor_cpu,
    enable_bbox_control,
    draw_background,
    causal_layers,
    bbox_control_states,
  ];
};

export class TiledDiffusionExt extends ExtensionScript<TiledDiffusionArgs> {
  constructor(params?: Partial<TiledDiffusionParams>) {
    super("Tiled Diffusion", params2args(params));
  }

  /**
   * Update the parameters of the TiledDiffusion object.
   *
   * @param {Partial<TiledDiffusionParams>} params - The partial parameters to update.
   */
  update(params: Partial<TiledDiffusionParams>) {
    this.args = params2args(params);
  }
}
