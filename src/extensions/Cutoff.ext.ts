import { ExtensionScript } from "./ExtensionScript";

/**
 * Parameters for the cutoff feature.
 */
export interface CutoffParams {
  /**
   * Whether the cutoff feature is enabled.
   */
  enabled: boolean;

  /**
   * The target for the cutoff.
   */
  targets: string;

  /**
   * The weight for the cutoff.
   */
  weight: number;

  /**
   * Whether to disable negative cutoff.
   */
  disable_neg: boolean;

  /**
   * Whether to use strong cutoff.
   */
  strong: boolean;

  /**
   * The padding token for the cutoff (can be an ID or a single token).
   */
  padding: string | number;

  /**
   * Input options for the cutoff. Valid values are "Lerp" or "SLerp".
   */
  inpt: "Lerp" | "SLerp";

  /**
   * Whether to enable debug mode for the cutoff.
   */
  debug: boolean;
}

/**
 * Arguments for extending the cutoff params.
 */
export type CutoffExtArgs = [
  enabled: CutoffParams["enabled"],
  targets: CutoffParams["targets"],
  weight: CutoffParams["weight"],
  disable_neg: CutoffParams["disable_neg"],
  strong: CutoffParams["strong"],
  padding: CutoffParams["padding"],
  inpt: CutoffParams["inpt"],
  debug: CutoffParams["debug"]
];

const default_params = (): CutoffParams => ({
  enabled: true,
  targets: "",
  weight: 1,
  disable_neg: false,
  strong: false,
  padding: "",
  inpt: "Lerp",
  debug: false,
});

/**
 * Generates the arguments for the CutoffExtArgs object based on the provided parameters.
 *
 * @param {Partial<CutoffParams>} params - The parameters used to generate the arguments.
 * @return {CutoffExtArgs} - The generated arguments for the CutoffExtArgs object.
 */
function params2args(params?: Partial<CutoffParams>): CutoffExtArgs {
  const {
    enabled,
    targets,
    weight,
    disable_neg,
    strong,
    padding,
    inpt,
    debug,
  } = default_params();
  return [
    params?.enabled ?? enabled,
    params?.targets ?? targets,
    params?.weight ?? weight,
    params?.disable_neg ?? disable_neg,
    params?.strong ?? strong,
    params?.padding ?? padding,
    params?.inpt ?? inpt,
    params?.debug ?? debug,
  ];
}

export class CutoffExt extends ExtensionScript<CutoffExtArgs> {
  constructor(params?: Partial<CutoffParams>) {
    super("Cutoff", params2args(params));
  }

  /**
   * Update the parameters of the cutoff.
   *
   * @param {Partial<CutoffParams>} params - The updated parameters for the cutoff.
   */
  update(params: Partial<CutoffParams>) {
    this.args = params2args(params);
  }
}
