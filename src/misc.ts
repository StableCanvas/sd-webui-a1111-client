export const deepClone: <T>(x: T) => T =
  globalThis.structuredClone ?? ((x: any) => JSON.parse(JSON.stringify(x)));

export const not = (x: boolean) => !x;
