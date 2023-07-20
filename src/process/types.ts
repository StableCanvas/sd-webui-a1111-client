import {
  StableDiffusionProcessingImg2Img,
  StableDiffusionProcessingTxt2Img,
} from "../client";
import { SDWebUIA1111SystemSettings } from "./system.types";

enum Img2imgResizeMode {
  "Just resize" = 0,
  "Crop and resize" = 1,
  "Resize and fill" = 2,
  "Just resize (latent upscale)" = 2,
}

enum Img2imgInpaintFill {
  "fill" = 0,
  "original" = 1,
  "latent noise" = 2,
  "latent nothing" = 3,
}

enum Img2imgInpaintFullRes {
  "Whole picture" = 0,
  "Only masked" = 1,
}

export type Img2imgProcessParams = StableDiffusionProcessingImg2Img & {
  resize_mode?: Img2imgResizeMode;
  inpainting_fill?: Img2imgInpaintFill;
  inpainting_mask_invert?: 0 | 1; // false or true
  inpaint_full_res?: Img2imgInpaintFullRes;
  override_settings?: Record<keyof any, any> &
    Partial<SDWebUIA1111SystemSettings>;
};

export type Txt2imgProcessParams = StableDiffusionProcessingTxt2Img & {
  override_settings?: Record<keyof any, any> &
    Partial<SDWebUIA1111SystemSettings>;
};
