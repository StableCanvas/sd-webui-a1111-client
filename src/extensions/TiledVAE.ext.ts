import { ExtensionScript } from "./ExtensionScript";

/**
 * Interface for TiledVAE parameters
 */
export interface TiledVAEParams {
  /**
   * Whether to enable TiledVAE
   */
  enabled: boolean;

  /**
   * Encoder tile size
   */
  encoderTileSize: number;

  /**
   * Decoder tile size
   */
  decoderTileSize: number;

  /**
   * Whether to move VAE to GPU (if possible)
   */
  vaeToGPU: boolean;

  /**
   * Whether to use fast decoder
   */
  fastDecoder: boolean;

  /**
   * Whether to use fast encoder
   */
  fastEncoder: boolean;

  /**
   * Fast encoder color fix
   */
  colorFix: boolean;
}

/**
 * Type for TiledVAE default argument values
 */
export type TiledVAEArgs = [
  /**
   * Whether to enable TiledVAE
   */
  enabled: TiledVAEParams["enabled"],
  /**
   * Encoder tile size
   */
  encoderTileSize: TiledVAEParams["encoderTileSize"],
  /**
   * Decoder tile size
   */
  decoderTileSize: TiledVAEParams["decoderTileSize"],
  /**
   * Whether to move VAE to GPU (if possible)
   */
  vaeToGPU: TiledVAEParams["vaeToGPU"],

  /**
   * Whether to use fast decoder
   */
  fastDecoder: TiledVAEParams["fastDecoder"],
  /**
   * Whether to use fast encoder
   */
  fastEncoder: TiledVAEParams["fastEncoder"],
  /**
   * Fast encoder color fix
   */
  colorFix: TiledVAEParams["colorFix"]
];

/**
 * Get default values for TiledVAE parameters
 */
function defaultParams(): TiledVAEParams {
  return {
    enabled: true,
    encoderTileSize: 1024,
    decoderTileSize: 96,
    vaeToGPU: true,
    fastDecoder: true,
    fastEncoder: true,
    colorFix: false,
  };
}

function params2args(params?: Partial<TiledVAEParams>): TiledVAEArgs {
  const {
    enabled,
    encoderTileSize,
    decoderTileSize,
    vaeToGPU,
    fastDecoder,
    fastEncoder,
    colorFix,
  } = { ...defaultParams(), ...params };
  return [
    enabled,
    encoderTileSize,
    decoderTileSize,
    vaeToGPU,
    fastDecoder,
    fastEncoder,
    colorFix,
  ];
}

export class TiledVAEExt extends ExtensionScript<TiledVAEArgs> {
  constructor(params?: Partial<TiledVAEParams>) {
    super("Tiled VAE", params2args(params));
  }

  /**
   * Update the parameters of the TiledDiffusion object.
   *
   * @param {Partial<TiledVAEParams>} params - The partial parameters to update.
   */
  update(params: Partial<TiledVAEParams>) {
    this.args = params2args(params);
  }
}
