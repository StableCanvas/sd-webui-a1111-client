/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type modules__progress__ProgressResponse = {
    active: boolean;
    queued: boolean;
    completed: boolean;
    /**
     * The progress with a range of 0 to 1
     */
    progress?: number;
    eta?: number;
    /**
     * Current live preview; a data: uri
     */
    live_preview?: string;
    /**
     * Send this together with next request to prevent receiving same image
     */
    id_live_preview?: number;
    /**
     * Info text used by WebUI.
     */
    textinfo?: string;
};
