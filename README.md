# sd-webui-a1111-client

a1111/webui client for nodejs/browser

# features

- full api typescript support
- nodejs/browser both ok
- backend process
- extensions (type) support
  - ControlNet
  - Cutoff
  - DynamicCFG
  - TiledDiffusion
  - TiledVAE
  - agent scheduler

# usage
> full code in [/examples](/examples) folder

## nodejs

```ts
import {
  SDWebUIA1111Client,
  Txt2imgProcess,
} from "@stable-canvas/sd-webui-a1111-client";
import fs from "fs";

const client = new SDWebUIA1111Client({
  BASE: "http://localhost:7860",
});
const process = new Txt2imgProcess({ prompt: "1girl" });
const { images } = await process.request(client);
const image = images[0]; // base64 image string
fs.writeFileSync("image.png", Buffer.from(image, "base64"));
```

## browser

```html
<script type="importmap">
  {
    "imports": {
      "@stable-canvas/sd-webui-a1111-client": "https://unpkg.com/@stable-canvas/sd-webui-a1111-client@latest/dist/main.module.mjs"
    }
  }
</script>
<h1>@stable-canvas/sd-webui-a1111-client DEMO</h1>
<div id="message"></div>
<img src="" alt="" />
<script type="module">
  import {
    SDWebUIA1111Client,
    Txt2imgProcess,
  } from "@stable-canvas/sd-webui-a1111-client";
  window.onload = async () => {
    const $msg = document.querySelector("#message");
    const $img = document.querySelector("img");
    const client = new SDWebUIA1111Client({
      BASE: "http://localhost:7860",
    });
    const process = new Txt2imgProcess({ prompt: "1girl" });
    $msg.innerText = "generating...";
    try {
      const { images } = await process.request(client);
      const image = images[0]; // base64 image string
      $img.src = `data:image/png;base64,${image}`;
      $msg.innerText = "done.";
    } catch (error) {
      $msg.innerText = error.message;
      console.error(error);
    }
  };
</script>
```

demo online: [codesandbox](https://codesandbox.io/s/sd-webui-a1111-client-demo-j38wmy?file=/src/index.js)

# license
Apache-2.0
