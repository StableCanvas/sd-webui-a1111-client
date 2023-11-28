import "./ensure-fetch";

import fs from "fs";
import { SDWebUIA1111Client, Txt2imgProcess } from "../../dist/main";

import cliProgress from "cli-progress";
import open from "open";

// progress bar
let timer: any = null;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(100, 0);
const logProgress = (client: SDWebUIA1111Client) => {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(async () => {
    const { progress } = await client.default.progressapiSdapiV1ProgressGet({
      skipCurrentImage: true,
    });
    if (!progress) {
      return;
    }
    bar1.update(Math.ceil(progress * 100));
  }, 300);
};

// call generate api from client
export const generate1Girl = async (client: SDWebUIA1111Client) => {
  const pc1 = new Txt2imgProcess({
    prompt: `photorealistic, RAW photo, best quality, 1girl, fashion orange top, half body, pastel grey background, highly detailed face, cold light`,
    negative_prompt: `fake, paintings, error, bad art, NG_DeepNegative_V1_75T,`,
    sampler_name: "DPM++ SDE Karras",
    width: 512,
    height: 768,
    steps: 20,
  });
  const { images: [image0] = [] } = await pc1.request(client);
  return image0 as undefined | string;
};

// save base64 image
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
  logProgress(client);

  console.time("image generate");
  const image = await generate1Girl(client);
  bar1.update(100);
  bar1.stop();
  console.timeEnd("image generate");
  if (!image) {
    throw new Error("Failed to generate image");
  }
  const fileName = await saveBase64Image(image);
  console.log("Generated image done: ", fileName);
  await open(fileName, { wait: true });
  process.exit();
};

if (require.main === module) {
  main();
}
