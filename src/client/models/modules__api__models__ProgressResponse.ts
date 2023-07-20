/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type modules__api__models__ProgressResponse = {
    /**
     * The progress with a range of 0 to 1
     */
    progress: number;
    eta_relative: number;
    /**
     * The current state snapshot
     */
    state: Record<string, any>;
    /**
     * The current image in base64 format. opts.show_progress_every_n_steps is required for this to work.
     */
    current_image?: string;
    /**
     * Info text used by WebUI.
     */
    textinfo?: string;
};
