

# sd-webui-a1111-client

[![npm](https://img.shields.io/npm/v/@stable-canvas/sd-webui-a1111-client)](https://www.npmjs.com/package/@stable-canvas/sd-webui-a1111-client)
[![npm](https://img.shields.io/npm/dw/@stable-canvas/sd-webui-a1111-client)](https://www.npmjs.com/package/@stable-canvas/sd-webui-a1111-client)
[![GitHub Repo stars](https://img.shields.io/github/stars/StableCanvas/sd-webui-a1111-client)](https://github.com/StableCanvas/sd-webui-a1111-client)


API client for AUTOMATIC1111/stable-diffusion-webui for Node.js and Browser.

- [Types Document](https://stablecanvas.github.io/sd-webui-a1111-client/)

## Features

- Full TypeScript support
- Supports Node.js and browser environments
- Extensions: ControlNet, Cutoff, DynamicCFG, TiledDiffusion, TiledVAE, agent scheduler
- Batch processing support
- Easy integration with popular extensions and models

## Requisites & Supported Versions

### Requisites

- **Enable webui-api**: Use the `--api` command line argument.
- **Disable webui-gui (optional)**: Use `--nowebui` to disable the web GUI.
- > You can find and modify the `COMMANDLINE_ARGS` value in the `webui-user.bat` or `webui-user.sh` file.

### Supported Versions

- **WebUI**: 1.8.0
- **ControlNet**: 3b4eedd

## Getting Started
### Client Instance

```ts
import { SDWebUIA1111Client } from "@stable-canvas/sd-webui-a1111-client";

const client = new SDWebUIA1111Client({
  BASE: "http://localhost:7860",
});
```

### Authentication

Use the `--api-auth` command line argument with "username:password" on the server to enable API authentication.

```ts
const client = new SDWebUIA1111Client({
  BASE: "http://localhost:7860",
  USERNAME: 'your_username',
  PASSWORD: 'your_password'
});
```

### Default Service

Allowing full control over the request body.

```ts
const response = await client.default.text2ImgapiSdapiV1Txt2ImgPost({
  requestBody: {
    prompt: 'an astronaut riding a horse on the moon'
  }
});
```

fully functions here:
[Service Functions](https://stablecanvas.github.io/sd-webui-a1111-client/classes/DefaultService.html)

## Pipeline Usage  

The `pipeline` is a DSL implementation in this library that allows intuitive request initiation through simple chained calls. It makes using the `sd-webui` client extremely straightforward.  

Here is a basic example:  

```ts
import { Pipeline } from "@stable-canvas/sd-webui-a1111-client";
const client = /* client instance */;
const { images, parameters } = await new Pipeline(client)
  .model("sdxl.safetensors")
  .prompt("A beautiful sunset over the mountains")
  .negative("Low quality, blurry")
  .sampler("DPM++ 2M")
  .scheduler("exponential")
  .size(1024, 768)
  .steps(35)
  .cfg(5)
  .use(/* extension */)
  .run();
```

> For details about extensions, refer to the **Processor Usage** section.

## API Usage

### Documentation

[ServiceApi documentation](https://stablecanvas.github.io/sd-webui-a1111-client/classes/ServiceApi.html)

### Instance

Use the `A1111StableDiffusionApi` object for a high-level API client with optimized types and parameter handling.

```ts
const api = new A1111StableDiffusionApi({
  client: {
    BASE: 'http://127.0.0.1:7860',
    // USERNAME: 'your_username',
    // PASSWORD: 'your_password'
  },
  // optional caching
  // cache: {
  //   disableCache: false,
  //   cacheTime: 60 * 1000
  // }
});
```

### txt2img

```ts
const { image, info } = await api.Service.txt2img({
  prompt: '1girl'
});
```

### img2img

```ts
const { image, info } = await api.Service.img2img({
  prompt: '1girl'
});
```

### Batch Generation

Use `txt2imgBatch` and `img2imgBatch` for batch processing.

```ts
const batch = api.Service.txt2imgBatch(
  { /* ... */ },
  {
    batchSize: 2,
    numBatches: 10
  }
);

const responses = await batch.waitForComplete();
```

### ControlNet Api Usage

[ControlNetApi documentation](http://stablecanvas.github.io/sd-webui-a1111-client/classes/ControlNetApi.html)

### Requisites

- Correct installation of [ControlNet Extension](https://github.com/Mikubill/sd-webui-controlnet)
- Install required [ControlNet Models](https://huggingface.co/lllyasviel/ControlNet)

### txt2img with ControlNet

```ts
const { image, info } = await api.ControlNet.txt2img({
  params: {
    prompt: '...',
    // ...
  },
  units: [
    {
      image: '...', // base64 string
      module: 'openpose_full',
      model: 'control_v11p_sd15_openpose [cab727d4]'
    }
  ]
});
```

### img2img with ControlNet

```ts
const { image, info } = await api.ControlNet.img2img({
  params: {
    prompt: '...',
    // ...
  },
  units: [
    {
      image: '...', // base64 string
      module: 'openpose_full',
      model: 'control_v11p_sd15_openpose [cab727d4]'
    }
  ]
});
```

### ControlNet Batch Generation

```ts
const batch = api.ControlNet.txt2imgBatch({
  params: { /* ... */ },
  options: {
    batchSize: 2,
    numBatches: 10
  },
  units: [
    {
      image: '...', // base64 string
      module: 'openpose_full',
      model: 'control_v11p_sd15_openpose [cab727d4]'
    }
  ]
});

const responses = await batch.waitForComplete();
```

### Detect

Thanks to the ControlNet plugin releasing an interface for detection, we can use this API when we only need to detect and not generate images.

> It is worth mentioning that if you want to customize the preprocessing process of ControlNet, you need to set the `module` parameter of the ControlNet Unit to `none`, indicating that the input image has already been preprocessed.

> Regarding the parameters `controlnet_threshold_a` and `controlnet_threshold_b`, you can use `api.ControlNet.getModuleDetail` to get the requirements for these parameters from the current plugin.

```ts
const {
  images,
} = await api.ControlNet.detect({
  controlnet_module: 'openpose_full',
  controlnet_input_images: [
    // image base64
  ],
  controlnet_processor_res: 512,
});
```

### GetModelList

```ts
const modelList = await api.ControlNet.getModels();
```

### GetModuleList

```ts
const moduleList = await api.ControlNet.getModules();
```

## Processor Usage
Advanced processing pipeline, providing more control over requests.

- [img2img documentation](http://stablecanvas.github.io/sd-webui-a1111-client/classes/Img2imgProcess.html)
- [txt2img documentation](http://stablecanvas.github.io/sd-webui-a1111-client/classes/Txt2imgProcess.html)

> The design of the processor lies between the API and the client. It is not as convenient as the API but offers more customized functionalities, which is useful for achieving workflows similar to ComfyUI.

### Text to Image / Image to Image

```ts
const response = await client.default.text2ImgapiSdapiV1Txt2ImgPost({
  requestBody: {
    prompt: 'an astronaut riding a horse on the moon'
  }
});
const { images: [img] } = response;

const buffer = Buffer.from(img, "base64");
await fs.promises.writeFile('result.png', buffer);
```

### Cutoff Extension

```ts
const pc1 = new Txt2imgProcess({ prompt: "1girl, black top, short pink hair" });
pc1.use(new CutoffExt({ targets: 'black, pink' }));
const { images } = await pc1.request(client);
```

### ControlNet Extension
```ts
const input_image = fs.readFileSync('input_image.png', 'base64');
const pc1 = new Img2imgProcess({ prompt: "1girl", init_images: [input_image]});

const cnet_ext = new ControlNetExt();
cnet_ext.addUnit({
  model: 'openpose_full',
  module: 'control_v11p_sd15_openpose [cab727d4]',
  weight: 1,
  pixel_perfect: true,
});

pc1.use(cnet_ext);
const { images } = await pc1.request(client);
```

## Browser Usage

### CDN links

| Type      | unpkg                                                                                                      | jsdelivr                                                                                               |
|-----------|------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| **mjs**   | [unpkg (mjs)](https://unpkg.com/@stable-canvas/sd-webui-a1111-client@latest/dist/main.module.mjs)           | [jsdelivr (mjs)](https://cdn.jsdelivr.net/npm/@stable-canvas/sd-webui-a1111-client@latest/+esm)       |
| **umd**   | [unpkg (umd)](https://unpkg.com/@stable-canvas/sd-webui-a1111-client@latest/dist/main.umd.min.js)          | [jsdelivr (umd)](https://cdn.jsdelivr.net/npm/@stable-canvas/sd-webui-a1111-client@latest/dist/main.umd.min.js) |

### Usage Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="importmap">
    {
      "imports": {
        "@stable-canvas/sd-webui-a1111-client": "https://unpkg.com/@stable-canvas/sd-webui-a1111-client@latest/dist/main.module.mjs"
      }
    }
  </script>
</head>
<body>
  <h1>@stable-canvas/sd-webui-a1111-client DEMO</h1>
  <div id="message"></div>
  <img src="" alt="result" />
  <script type="module">
    import { SDWebUIA1111Client, Txt2imgProcess } from "@stable-canvas/sd-webui-a1111-client";
    
    window.onload = async () => {
      const $msg = document.querySelector("#message");
      const $img = document.querySelector("img");
      
      const client = new SDWebUIA1111Client({ BASE: "http://localhost:7860" });
      const pc1 = new Txt2imgProcess({ prompt: "1girl" });
      
      $msg.innerText = "Generating...";
      
      try {
        const { images } = await pc1.request(client);
        const image = images[0];
        
        $img.src = `data:image/png;base64,${image}`;
        $msg.innerText = "Done.";
      } catch (error) {
        $msg.innerText = error.message;
        console.error(error);
      }
    };
  </script>
</body>
</html>
```

## Example Code

- Full code is available in the [/examples](https://github.com/your-repo/examples) folder.
- Online demo: [CodeSandbox](https://codesandbox.io/s/sd-webui-a1111-client-demo-j38wmy?file=/src/index.js)

## License

Apache-2.0
