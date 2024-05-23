import { OpenAPIConfig, SDWebUIA1111Client } from "../client";
import { CachedApiOptions } from "./CachedApi";
import { ControlNetApi } from "./cnet";
import { ServiceApi } from "./service";

type ApiOptions = {
  client: Partial<OpenAPIConfig> & {
    BASE: string;
  };
  cache?: Partial<Omit<CachedApiOptions, "client">>;
};

/**
 * The API for the A1111 Stable Diffusion API.
 *
 * @param {ApiOptions} options - The options for the constructor.
 */
export class A1111StableDiffusionApi {
  client: SDWebUIA1111Client;

  ControlNet: ControlNetApi;
  Service: ServiceApi;

  constructor(options: ApiOptions) {
    this.client = new SDWebUIA1111Client(options.client);

    this.ControlNet = new ControlNetApi({
      client: this.client,
      ...options.cache,
    });
    this.Service = new ServiceApi({
      client: this.client,
      ...options.cache,
    });
  }
}
