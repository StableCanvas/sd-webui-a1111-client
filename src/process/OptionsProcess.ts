import { SDWebUIA1111Client } from "../client";
import { SDProcessing } from "./SDProcessing";
import { SDWebUIA1111SystemSettings } from "./system.types";

// for typescript
export class OptionsProcess extends SDProcessing<
  Partial<SDWebUIA1111SystemSettings>
> {
  request(client: SDWebUIA1111Client) {
    return client.default.setConfigSdapiV1OptionsPost({
      requestBody: this.toJSON(),
    });
  }
}
