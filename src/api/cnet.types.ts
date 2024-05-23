import { Body_detect_controlnet_detect_post } from "../client";

export type ModelListResponse = {
  model_list: string[];
};
export type ModuleListResponse = {
  module_list: string[];
  module_detail: Record<
    string,
    {
      model_free: boolean;
      sliders: {
        max: number;
        min: number;
        name: string;
        step: number;
        value: number;
      }[];
    }
  >;
};
export type DetectResponse = {
  images: string[];
  info: "Success" | "Error";
  poses?: {
    animals: any[];
    canvas_height: number;
    canvas_width: number;
    people: {
      face_keypoints_2d: number[];
      hand_left_keypoints_2d: number[];
      hand_right_keypoints_2d: number[];
      pose_keypoints_2d: number[];
    }[];
  }[];
};
export type ControlNetDetectRequestBody = Body_detect_controlnet_detect_post;
export type ControlTypes = {
  version: number;
  models: string[];
  modules: string[];
  types: Record<
    string,
    {
      module_list: string[];
      model_list: string[];
      default_option: string;
      default_model: string;
    }
  >;
};
