// Generates dist/client/index.html so static hosts (Netlify, etc.) can serve
// the SPA. TanStack Start's Cloudflare build doesn't emit an index.html — it
// expects SSR through the worker. For Netlify we ship a minimal shell that
// loads the hashed client entry; the bundle calls hydrateRoot(document, ...)
// and fills in the page on first paint.
import { readdir, writeFile, readFile } from "node:fs/promises";
import { join } from "node:path";

const clientDir = "dist/client";
const assetsDir = join(clientDir, "assets");

const files = await readdir(assetsDir);

// The client entry is the JS chunk that calls hydrateRoot (the largest index-*.js).
const jsFiles = files.filter((f) => f.startsWith("index-") && f.endsWith(".js"));
let entry = null;
let maxSize = 0;
for (const f of jsFiles) {
  const content = await readFile(join(assetsDir, f), "utf8");
  if (content.includes("hydrateRoot")) {
    if (content.length > maxSize) {
      maxSize = content.length;
      entry = f;
    }
  }
}
if (!entry) throw new Error("Could not find client entry with hydrateRoot");

const css = files.find((f) => f.endsWith(".css"));

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Achadinhos</title>
    <meta name="description" content="Achadinhos - ofertas e promoções" />
    ${css ? `<link rel="stylesheet" href="/assets/${css}" />` : ""}
    <link rel="modulepreload" href="/assets/${entry}" />
  </head>
  <body>
    <script type="module" src="/assets/${entry}"></script>
  </body>
</html>
`;

await writeFile(join(clientDir, "index.html"), html);
console.log(`✓ Generated ${clientDir}/index.html (entry: ${entry}, css: ${css})`);
