import { ExtensionScript } from "./ExtensionScript";

/**
 * Parameters for the ADetailer feature.
 */
export interface ADetailerParams {
  ad_model: string;
  ad_model_classes: string;
  ad_tab_enable: boolean;
  ad_prompt: string;
  ad_negative_prompt: string;
  ad_confidence: number;
  ad_mask_filter_method: string;
  ad_mask_k: number;
  ad_mask_min_ratio: number;
  ad_mask_max_ratio: number;
  ad_dilate_erode: number;
  ad_x_offset: number;
  ad_y_offset: number;
  ad_mask_merge_invert: string;
  ad_mask_blur: number;
  ad_denoising_strength: number;
  ad_inpaint_only_masked: boolean;
  ad_inpaint_only_masked_padding: number;
  ad_use_inpaint_width_height: boolean;
  ad_inpaint_width: number;
  ad_inpaint_height: number;
  ad_use_steps: boolean;
  ad_steps: number;
  ad_use_cfg_scale: boolean;
  ad_cfg_scale: number;
  ad_use_checkpoint: boolean;
  ad_checkpoint: string | null;
  ad_use_vae: boolean;
  ad_vae: string | null;
  ad_use_sampler: boolean;
  ad_sampler: string;
  ad_scheduler: string;
  ad_use_noise_multiplier: boolean;
  ad_noise_multiplier: number;
  ad_use_clip_skip: boolean;
  ad_clip_skip: number;
  ad_restore_face: boolean;
  ad_controlnet_model: string;
  ad_controlnet_module: string;
  ad_controlnet_weight: number;
  ad_controlnet_guidance_start: number;
  ad_controlnet_guidance_end: number;
}

export type ADetailerExtArgs = [ADetailerParams];

const default_params = (): ADetailerParams => ({
  ad_model: "face_yolov8n.pt",
  ad_model_classes: "",
  ad_tab_enable: true,
  ad_prompt: "",
  ad_negative_prompt: "",
  ad_confidence: 0.3,
  ad_mask_filter_method: "Area",
  ad_mask_k: 0,
  ad_mask_min_ratio: 0.0,
  ad_mask_max_ratio: 1.0,
  ad_dilate_erode: 4,
  ad_x_offset: 0,
  ad_y_offset: 0,
  ad_mask_merge_invert: "None",
  ad_mask_blur: 4,
  ad_denoising_strength: 0.4,
  ad_inpaint_only_masked: true,
  ad_inpaint_only_masked_padding: 32,
  ad_use_inpaint_width_height: false,
  ad_inpaint_width: 512,
  ad_inpaint_height: 512,
  ad_use_steps: false,
  ad_steps: 28,
  ad_use_cfg_scale: false,
  ad_cfg_scale: 7.0,
  ad_use_checkpoint: false,
  ad_checkpoint: null,
  ad_use_vae: false,
  ad_vae: null,
  ad_use_sampler: false,
  ad_sampler: "DPM++ 2M Karras",
  ad_scheduler: "Use same scheduler",
  ad_use_noise_multiplier: false,
  ad_noise_multiplier: 1.0,
  ad_use_clip_skip: false,
  ad_clip_skip: 1,
  ad_restore_face: false,
  ad_controlnet_model: "None",
  ad_controlnet_module: "None",
  ad_controlnet_weight: 1.0,
  ad_controlnet_guidance_start: 0.0,
  ad_controlnet_guidance_end: 1.0,
});

export class ADetailerExt extends ExtensionScript<ADetailerExtArgs> {
  constructor(params?: Partial<ADetailerParams>) {
    super("ADetailer", [Object.assign(default_params(), params)]);
  }

  update(params: Partial<ADetailerParams>) {
    this.args = [Object.assign(default_params(), params)];
  }
}
