import type { SDWebUIA1111Client } from "../client";
import { SDProcessing } from "./SDProcessing";
import type { Txt2imgProcessParams } from "./types";

/**
 * Txt2imgProcess
 *
 * usage:
 * ```ts
 * const client = new SDWebUIA1111Client();
 * const process = new Txt2imgProcess({ prompt: "1girl" });
 * const {images} = await process.request(client);
 * const image = images[0]; // base64 image string
 * ```
 */
export class Txt2imgProcess extends SDProcessing<Txt2imgProcessParams> {
  request(client: SDWebUIA1111Client) {
    const requestBody = this.toJSON();
    return client.default.text2ImgapiSdapiV1Txt2ImgPost({ requestBody });
  }
}
