/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TaskModel = {
    id: string;
    api_task_id?: string;
    api_task_callback?: string;
    name?: string;
    /**
     * Either txt2img or img2img
     */
    type: string;
    /**
     * Either pending, running, done or failed
     */
    status?: string;
    /**
     * The parameters of the task in JSON format
     */
    params: Record<string, any>;
    priority?: number;
    /**
     * The result of the task in JSON format
     */
    result?: string;
    bookmarked?: boolean;
    /**
     * The time when the task was created
     */
    created_at?: string;
    /**
     * The time when the task was updated
     */
    updated_at?: string;
};
