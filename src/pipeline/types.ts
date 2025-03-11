import samplers from "./constants/samplers";
import schedulers from "./constants/schedulers";

type AnyStr = string & {};

export type SamplerName =
  | (typeof samplers)[number]["name"]
  | (typeof samplers)[number]["aliases"][number]
  | AnyStr;

export type SchedulerName =
  | (typeof schedulers)[number]["name"]
  | NonNullable<(typeof schedulers)[number]["aliases"]>[number]
  | AnyStr;
