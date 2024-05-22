import { SDWebUIA1111Client } from "../client";
import { SDProcessing } from "./SDProcessing";
import { SDWebUIA1111SystemSettings } from "./system.types";

/**
 * SystemSettingProcess
 *
 * usage:
 * ```ts
 * const client = new SDWebUIA1111Client();
 * const process = new SystemSettingProcess({
 *   samples_save: true,
 *   samples_format: "png",
 *   samples_filename_pattern: "sample",
 * });
 * await process.request(client);
 * ```
 */
export class SystemSettingProcess extends SDProcessing<
  Partial<SDWebUIA1111SystemSettings>
> {
  request(client: SDWebUIA1111Client) {
    return client.default.setConfigSdapiV1OptionsPost({
      requestBody: this.toJSON(),
    });
  }
}
