import { generate1Girl } from "./1girl";
import fs from "fs";

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
  const image = await generate1Girl();
  if (!image) {
    throw new Error("Failed to generate image");
  }
  const fileName = await saveBase64Image(image);
  console.log("Generated image done: ", fileName);
};

if (require.main === module) {
  main();
}
