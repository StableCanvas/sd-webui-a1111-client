import "./ensure-fetch";
import { SDWebUIA1111Client, Txt2imgProcess } from "../../dist/main";

export const generate1Girl = async () => {
  const client = new SDWebUIA1111Client({
    BASE: "http://localhost:7860",
  });
  const pc1 = new Txt2imgProcess({
    prompt: `photorealistic, RAW photo, realistic,4k, high-res, masterpiece, best quality, 1girl, close-up`,
    negative_prompt: `fake, paintings, NG_DeepNegative_V1_75T,`,
  });
  const { images: [image0] = [] } = await pc1.request(client);
  return image0 as undefined | string;
};
