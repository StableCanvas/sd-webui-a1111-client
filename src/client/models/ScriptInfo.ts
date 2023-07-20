/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ScriptArg } from './ScriptArg';

export type ScriptInfo = {
    /**
     * Script name
     */
    name?: string;
    /**
     * Flag specifying whether this script is an alwayson script
     */
    is_alwayson?: boolean;
    /**
     * Flag specifying whether this script is an img2img script
     */
    is_img2img?: boolean;
    /**
     * List of script's arguments
     */
    args: Array<ScriptArg>;
};
