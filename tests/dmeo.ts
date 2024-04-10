import { SDWebUIA1111Client } from "../src/main";

const client = new SDWebUIA1111Client({
  BASE: "http://127.0.0.1:7860",
});

client.default.getExtensionsListSdapiV1ExtensionsGet().then(console.log);
