/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TaskModel } from './TaskModel';

export type QueueStatusResponse = {
    /**
     * The on progress task id
     */
    current_task_id?: string;
    /**
     * The pending tasks in the queue
     */
    pending_tasks: Array<TaskModel>;
    /**
     * The total pending tasks in the queue
     */
    total_pending_tasks: number;
    /**
     * Whether the queue is paused
     */
    paused: boolean;
};
