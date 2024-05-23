import "./ensure-fetch";

import fs from "fs";
import { A1111StableDiffusionApi } from "../../dist/main";

import cliProgress from "cli-progress";
import open from "open";

// progress bar
let timer: any = null;
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
bar1.start(100, 0);
const logProgress = (api: A1111StableDiffusionApi) => {
  if (timer) {
    clearInterval(timer);
  }
  timer = setInterval(async () => {
    const { progress } = await api.Service.progress();
    if (!progress) {
      return;
    }
    bar1.update(Math.ceil(progress * 100));
  }, 300);
};

// call generate api from client
export const generate1Girl_batch = async (api: A1111StableDiffusionApi) => {
  const batch1 = await api.Service.txt2imgBatch(
    {
      prompt: `photorealistic, RAW photo, best quality, 1girl, fashion orange top, half body, pastel grey background, highly detailed face, cold light`,
      negative_prompt: `fake, paintings, error, bad art, NG_DeepNegative_V1_75T,`,
      sampler_name: "DPM++ SDE Karras",
      width: 512,
      height: 768,
      steps: 20,
    },
    {
      batchSize: 2,
      numBatches: 5,
    }
  );
  return batch1;
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
  await fs.promises.writeFile(`./outputs/${fileName}`, buffer);
  return fileName;
}

const main = async () => {
  const api = new A1111StableDiffusionApi({
    client: {
      BASE: "http://127.0.0.1:7860",
    },
  });
  logProgress(api);

  console.time("batch image generate");
  const batch1 = await generate1Girl_batch(api);

  batch1
    .waitForComplete()
    .catch((err) => {
      console.error(err);
      return [];
    })
    .finally(() => {
      bar1.update(100);
      bar1.stop();
      console.timeEnd("batch image generate");
      process.exit();
    });

  batch1.on("batch_complete", async ({ images }) => {
    for (const image of images) {
      const fileName = await saveBase64Image(image);
      console.log("Generated image done: ", fileName);
    }
  });
};

if (require.main === module) {
  main();
}
