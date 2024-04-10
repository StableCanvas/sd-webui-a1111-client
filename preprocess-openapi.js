/**
 * this script is used to clean unused content in openapi.json
 *
 * 1. remove unused paths
 * 2. remove unused components
 * 3. reset component 'default' value
 *
 */

const fs = require("fs");
const path = require("path");
const UrlPattern = require("url-pattern");

const openapi = JSON.parse(
  fs.readFileSync(path.join(__dirname, "openapi.json"), "utf8")
);

const input_count = {
  paths: Object.keys(openapi.paths).length,
  components: Object.keys(openapi.components.schemas).length,
};

const api_whitelist = [
  "/user*",
  "/app_id*",
  "/info",
  "/assets/*",
  "/proxy*",
  "/stream/*",
  "/file/*",
  "/sdapi/*",
  "/reset*",
  "/api/*",
  "/run/*",
  "/queue/*",
  "/upload",
  "/internal/*",
  "/sd_extra_networks/*",
  "/tacapi/*",
  "/agent-scheduler/*",
  "/controlnet/*",
].map((p) => new UrlPattern(p));

const cleaned_openapi = JSON.parse(JSON.stringify(openapi));

// remove unused paths
Object.keys(cleaned_openapi.paths).forEach((path) => {
  if (api_whitelist.some((p) => p.match(path))) {
    return;
  }
  delete cleaned_openapi.paths[path];
});

// reset component 'default' value
Object.values(cleaned_openapi.components.schemas).forEach((schema) => {
  const { properties } = schema;
  if (!properties) {
    return;
  }
  for (const [k, v] of Object.entries(properties)) {
    if (
      v.default &&
      typeof v.default === "string" &&
      (fs.existsSync(v.default) || isValidPath(v.default))
    ) {
      v.default = "";
    }
    if (
      v.default &&
      Array.isArray(v.default) &&
      v.default.every((x) => typeof x === "string") &&
      v.default.some((x) => fs.existsSync(x) || isValidPath(x))
    ) {
      v.default = [];
    }
  }
});

// remove unused components
const used_components = new Set();
const find_refs_from_schema = (schema) => {
  if (!schema) {
    return;
  }
  const { $ref } = schema;
  if ($ref) {
    const componentSchemaName = $ref.replace("#/components/schemas/", "");
    used_components.add(componentSchemaName);
    return;
  }
  if (Array.isArray(schema)) {
    return schema.forEach((s) => find_refs_from_schema(s));
  }
  if (typeof schema === "object") {
    for (const [k, v] of Object.entries(schema)) {
      find_refs_from_schema(v);
    }
    return;
  }
};
for (const api_path of Object.values(cleaned_openapi.paths)) {
  const apis = Object.values(api_path);
  for (const api of apis) {
    const { requestBody = {}, responses = {} } = api;
    if (requestBody) {
      find_refs_from_schema(requestBody);
    }
    if (responses) {
      Object.values(responses).forEach((r) => find_refs_from_schema(r));
    }
  }
}
// add dependencies to components
for (const schemaName of used_components) {
  find_refs_from_schema(cleaned_openapi.components.schemas[schemaName]);
}
// console.log([...used_components]);
Object.keys(cleaned_openapi.components.schemas).forEach((k) => {
  if (!used_components.has(k)) {
    delete cleaned_openapi.components.schemas[k];
  }
});

const output_count = {
  paths: Object.keys(cleaned_openapi.paths).length,
  components: Object.keys(cleaned_openapi.components.schemas).length,
};

console.log({ input_count, output_count });

// =================================== save file
fs.writeFileSync(
  path.join(__dirname, "openapi-cleaned.json"),
  JSON.stringify(cleaned_openapi, null, 2)
);

// ===================================

function isValidPath(p) {
  // Normalize the path to remove any redundant .. or ./
  const normalizedPath = path.normalize(p);

  // Optional: Add specific checks for your use case.
  // For instance, checking for invalid or reserved names in Windows,
  // checking for max path length, etc.

  try {
    // This throws an error if the path is not a string, hence testing if it's at least a proper string.
    path.parse(normalizedPath);
    return true;
  } catch (error) {
    // The string is not a valid path
    return false;
  }
}
