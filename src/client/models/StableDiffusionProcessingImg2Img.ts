/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StableDiffusionProcessingImg2Img = {
    init_images?: Array<any>;
    resize_mode?: number;
    denoising_strength?: number;
    image_cfg_scale?: number;
    mask?: string;
    mask_blur?: number;
    mask_blur_x?: number;
    mask_blur_y?: number;
    inpainting_fill?: number;
    inpaint_full_res?: boolean;
    inpaint_full_res_padding?: number;
    inpainting_mask_invert?: number;
    initial_noise_multiplier?: number;
    prompt?: string;
    styles?: Array<string>;
    seed?: number;
    subseed?: number;
    subseed_strength?: number;
    seed_resize_from_h?: number;
    seed_resize_from_w?: number;
    sampler_name?: string;
    batch_size?: number;
    n_iter?: number;
    steps?: number;
    cfg_scale?: number;
    width?: number;
    height?: number;
    restore_faces?: boolean;
    tiling?: boolean;
    do_not_save_samples?: boolean;
    do_not_save_grid?: boolean;
    negative_prompt?: string;
    eta?: number;
    s_min_uncond?: number;
    s_churn?: number;
    s_tmax?: number;
    s_tmin?: number;
    s_noise?: number;
    override_settings?: Record<string, any>;
    override_settings_restore_afterwards?: boolean;
    script_args?: Array<any>;
    sampler_index?: string;
    include_init_images?: boolean;
    script_name?: string;
    send_images?: boolean;
    save_images?: boolean;
    alwayson_scripts?: Record<string, any>;
};
