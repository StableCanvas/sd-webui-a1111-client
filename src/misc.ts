export const deepClone: <T>(x: T) => T =
  globalThis.structuredClone ?? ((x: any) => JSON.parse(JSON.stringify(x)));
