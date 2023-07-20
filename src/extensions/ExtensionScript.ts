import {
  StableDiffusionProcessingImg2Img,
  StableDiffusionProcessingTxt2Img,
} from "../client";

/**
 * 定义拓展脚本的参数
 */
export class ExtensionScript<Args extends Array<any> = Array<any>> {
  constructor(readonly name: string, protected args: Args) {}

  install(
    req: StableDiffusionProcessingImg2Img | StableDiffusionProcessingTxt2Img
  ) {
    if (typeof req !== "object") {
      return;
    }
    req["alwayson_scripts"] ||= {};
    req["alwayson_scripts"][this.name] = {
      args: this.args,
    };
  }
}
