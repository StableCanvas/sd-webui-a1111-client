import { SDWebUIA1111Client } from "../client";
import { ExtensionScript } from "../extensions/ExtensionScript";

function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  const clone = Array.isArray(obj) ? ([] as T) : ({} as T);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

export class SDProcessing<Body> {
  protected extensions = [] as ExtensionScript[];

  constructor(readonly init_body: Body) {}

  /**
   * Converts the object to its JSON representation.
   *
   * @return {any} The JSON representation of the object.
   */
  toJSON() {
    const body = deepClone(this.init_body);
    for (const ext of this.extensions) {
      ext.install(body as any);
    }
    return body;
  }

  /**
   * Adds an extension to the list of extensions.
   *
   * @param {ExtensionScript} ext - The extension to be added.
   */
  use(ext: ExtensionScript) {
    this.extensions.push(ext);
  }

  /**
   * Creates and adds a new ExtensionScript to the list of extensions.
   *
   * @param {string} name - The name of the extension script.
   * @param {any[]} args - The arguments for the extension script.
   */
  useCustomExt(name: string, args: any[]) {
    const ext = new ExtensionScript(name, args);
    this.extensions.push(ext);
  }

  /**
   * Clears the extensions array.
   *
   */
  clear() {
    this.extensions = [];
  }

  /**
   * A description of the entire function.
   *
   * @param {SDWebUIA1111Client} client - The SDWebUIA1111Client object used for the request.
   * @return {any} The response from the request.
   */
  request(client: SDWebUIA1111Client): any {
    throw new Error("Method not implemented.");
  }
}
