import "./ensure-fetch";

import fs from "fs";
import { SDWebUIA1111Client, Txt2imgProcess } from "../../dist/main";

export const generate1Girl = async (client: SDWebUIA1111Client) => {
  const pc1 = new Txt2imgProcess({
    prompt: `photorealistic, RAW photo, realistic,4k, high-res, masterpiece, best quality, 1girl, close-up`,
    negative_prompt: `fake, paintings, NG_DeepNegative_V1_75T,`,
  });
  const { images: [image0] = [] } = await pc1.request(client);
  return image0 as undefined | string;
};

async function saveBase64Image(
  base64String: string,
  outputFilename = `image_${Math.floor(Math.random() * 1000000)}`
) {
  let extension = "png";
  let data = base64String;
  if (data.startsWith("data:image/png;base64,")) {
    [, data] = data.split(",");
  }
  const fileName = `${outputFilename}.${extension}`;
  const buffer = Buffer.from(data, "base64");
  await fs.promises.writeFile(fileName, buffer);
  return fileName;
}

const main = async () => {
  const client = new SDWebUIA1111Client({
    BASE: "http://localhost:7860",
  });
  const image = await generate1Girl(client);
  if (!image) {
    throw new Error("Failed to generate image");
  }
  const fileName = await saveBase64Image(image);
  console.log("Generated image done: ", fileName);
};

if (require.main === module) {
  main();
}
