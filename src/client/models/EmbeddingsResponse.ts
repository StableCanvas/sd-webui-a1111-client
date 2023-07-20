/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmbeddingItem } from './EmbeddingItem';

export type EmbeddingsResponse = {
    /**
     * Embeddings loaded for the current model
     */
    loaded: Record<string, EmbeddingItem>;
    /**
     * Embeddings skipped for the current model (likely due to architecture incompatibility)
     */
    skipped: Record<string, EmbeddingItem>;
};
