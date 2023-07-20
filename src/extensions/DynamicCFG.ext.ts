import { ExtensionScript } from "./ExtensionScript";
/**
 * DynamicCFGParams defines the parameters for the dynamic thresholding UI component
 */
export interface DynamicCFGParams {
  /**
   * Whether dynamic thresholding is enabled
   */
  enabled: boolean;

  /**
   * The scale to mimic for CFG
   */
  mimicScale: number;

  /**
   * The percentile threshold for clamping latent values
   */
  thresholdPercentile: number;

  /**
   * The mode for scheduling the mimic scale value
   */
  mimicMode:
    | "Constant"
    | "Linear"
    | "Cosine"
    | "CosineRepeating"
    | "PowerDown"
    | "PowerUp";

  /**
   * The minimum value when using a scheduled mimic scale
   */
  mimicScaleMin: number;

  /**
   * The mode for scheduling the CFG scale value
   */
  cfgMode:
    | "Constant"
    | "Linear"
    | "Cosine"
    | "CosineRepeating"
    | "PowerDown"
    | "PowerUp";

  /**
   * The minimum value when using a scheduled CFG scale
   */
  cfgScaleMin: number;

  /**
   * The scheduler value used for some modes
   */
  schedVal: number;
}

type DynamicCFGArgs = [
  enabled: DynamicCFGParams["enabled"],
  mimicScale: DynamicCFGParams["mimicScale"],
  thresholdPercentile: DynamicCFGParams["thresholdPercentile"],
  mimicMode: DynamicCFGParams["mimicMode"],
  mimicScaleMin: DynamicCFGParams["mimicScaleMin"],
  cfgMode: DynamicCFGParams["cfgMode"],
  cfgScaleMin: DynamicCFGParams["cfgScaleMin"],
  schedVal: DynamicCFGParams["schedVal"]
];

/**
 * Default values for the parameters
 */
const defaultDynamicCFGParams = (): DynamicCFGParams => ({
  enabled: false,
  mimicScale: 7.0,
  thresholdPercentile: 100,
  mimicMode: "Constant",
  mimicScaleMin: 0,
  cfgMode: "Constant",
  cfgScaleMin: 0,
  schedVal: 4.0,
});

const params2args = (params?: Partial<DynamicCFGParams>): DynamicCFGArgs => {
  const {
    enabled,
    mimicScale,
    thresholdPercentile,
    mimicMode,
    mimicScaleMin,
    cfgMode,
    cfgScaleMin,
    schedVal,
  } = { ...defaultDynamicCFGParams(), ...params };
  return [
    enabled,
    mimicScale,
    thresholdPercentile,
    mimicMode,
    mimicScaleMin,
    cfgMode,
    cfgScaleMin,
    schedVal,
  ];
};

export class DynamicCFGExt extends ExtensionScript<DynamicCFGArgs> {
  constructor(params?: Partial<DynamicCFGParams>) {
    super("Dynamic Thresholding (CFG Scale Fix)", params2args(params));
  }

  /**
   * Update the parameters of object.
   *
   * @param {Partial<DynamicCFGParams>} params - The partial parameters to update.
   */
  update(params: Partial<DynamicCFGParams>) {
    this.args = params2args(params);
  }
}
