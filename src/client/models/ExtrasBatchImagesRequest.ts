/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FileData } from './FileData';

export type ExtrasBatchImagesRequest = {
    /**
     * Sets the resize mode: 0 to upscale by upscaling_resize amount, 1 to upscale up to upscaling_resize_h x upscaling_resize_w.
     */
    resize_mode?: 0 | 1;
    /**
     * Should the backend return the generated image?
     */
    show_extras_results?: boolean;
    /**
     * Sets the visibility of GFPGAN, values should be between 0 and 1.
     */
    gfpgan_visibility?: number;
    /**
     * Sets the visibility of CodeFormer, values should be between 0 and 1.
     */
    codeformer_visibility?: number;
    /**
     * Sets the weight of CodeFormer, values should be between 0 and 1.
     */
    codeformer_weight?: number;
    /**
     * By how much to upscale the image, only used when resize_mode=0.
     */
    upscaling_resize?: number;
    /**
     * Target width for the upscaler to hit. Only used when resize_mode=1.
     */
    upscaling_resize_w?: number;
    /**
     * Target height for the upscaler to hit. Only used when resize_mode=1.
     */
    upscaling_resize_h?: number;
    /**
     * Should the upscaler crop the image to fit in the chosen size?
     */
    upscaling_crop?: boolean;
    /**
     * The name of the main upscaler to use, it has to be one of this list: 
     */
    upscaler_1?: string;
    /**
     * The name of the secondary upscaler to use, it has to be one of this list: 
     */
    upscaler_2?: string;
    /**
     * Sets the visibility of secondary upscaler, values should be between 0 and 1.
     */
    extras_upscaler_2_visibility?: number;
    /**
     * Should the upscaler run before restoring faces?
     */
    upscale_first?: boolean;
    /**
     * List of images to work on. Must be Base64 strings
     */
    imageList: Array<FileData>;
};
