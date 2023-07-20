/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EmbeddingItem = {
    /**
     * The number of steps that were used to train this embedding, if available
     */
    step?: number;
    /**
     * The hash of the checkpoint this embedding was trained on, if available
     */
    sd_checkpoint?: string;
    /**
     * The name of the checkpoint this embedding was trained on, if available. Note that this is the name that was used by the trainer; for a stable identifier, use `sd_checkpoint` instead
     */
    sd_checkpoint_name?: string;
    /**
     * The length of each individual vector in the embedding
     */
    shape: number;
    /**
     * The number of vectors in the embedding
     */
    vectors: number;
};
