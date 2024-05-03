import {
  CancelablePromise,
  ImageToImageResponse,
  SDWebUIA1111Client,
} from "../client";
import { SDProcessing } from "./SDProcessing";
import { Img2imgProcessParams } from "./types";

/**
 * Img2imgProcess
 *
 * usage:
 * ```ts
 * const client = new SDWebUIA1111Client();
 * const process = new Img2imgProcess({ prompt: "1girl" });
 * const {images} = await process.request(client);
 * const image = images[0]; // base64 image string
 * ```
 */
export class Img2imgProcess extends SDProcessing<Img2imgProcessParams> {
  request(client: SDWebUIA1111Client) {
    const requestBody = this.toJSON();
    return client.default.img2ImgapiSdapiV1Img2ImgPost({
      requestBody,
    }) as CancelablePromise<
      ImageToImageResponse & {
        parameters: Img2imgProcessParams;
      }
    >;
  }
}
