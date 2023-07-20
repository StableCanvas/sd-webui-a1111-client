import "esm-hook";
import fetch, { Headers } from "node-fetch";

if (!globalThis.fetch) {
  // @ts-ignore
  globalThis.fetch = fetch;
  // @ts-ignore
  globalThis.Headers = Headers;
}
