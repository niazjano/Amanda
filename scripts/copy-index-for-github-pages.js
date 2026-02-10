const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const BASE = "https://niazjano.github.io/Amanda";

// Required for GitHub Pages: disables Jekyll so _next (underscore folder at root) is served
const noJekyll = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyll, "");
console.log("Created out/.nojekyll");

// Do NOT move _next/images into Amanda/. On GitHub Pages project sites, the URL
// .../Amanda/_next/... is served from repo path _next/ (not Amanda/_next/).
// So keep _next and images at out root; they will be at repo root on gh-pages.

// Rewrite all HTML: ensure asset and image paths are absolute (including inside inline RSC script payloads)
function rewriteHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      rewriteHtml(full);
    } else if (e.name.endsWith(".html")) {
      let html = fs.readFileSync(full, "utf8");
      // 1) Attributes: href="/Amanda/ and src="/Amanda/ and /images/
      let next = html
        .replace(/href="\/Amanda\//g, `href="${BASE}/`)
        .replace(/src="\/Amanda\//g, `src="${BASE}/`)
        .replace(/href="\/images\//g, `href="${BASE}/images/`)
        .replace(/src="\/images\//g, `src="${BASE}/images/`);
      // 2) Inside JSON/RSC payload in script tags: \"src\":\"/Amanda/ and \"/images/
      next = next
        .replace(/\\"\/Amanda\//g, `\\"${BASE}/`)
        .replace(/\\"\/images\//g, `\\"${BASE}/images/`);
      // 3) Paths in RSC payload (no leading quote): only when not already full URL
      next = next.replace(/(?<!github\.io)\/Amanda\/images\//g, `${BASE}/images/`);
      next = next.replace(/(?<!github\.io)\/Amanda\/_next\//g, `${BASE}/_next/`);
      if (next !== html) {
        fs.writeFileSync(full, next);
        console.log("Rewrote asset URLs in", path.relative(outDir, full));
      }
    }
  }
}
rewriteHtml(outDir);
