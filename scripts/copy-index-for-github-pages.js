const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const BASE = "https://niazjano.github.io/Amanda";

// Required for GitHub Pages: disables Jekyll so Amanda/_next (underscore) is served
const noJekyll = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyll, "");
console.log("Created out/.nojekyll");

// Move _next and images into out/Amanda/ so deployed branch has Amanda/_next, Amanda/images
const amandaDir = path.join(outDir, "Amanda");
if (!fs.existsSync(amandaDir)) fs.mkdirSync(amandaDir, { recursive: true });
function moveSync(src, dest) {
  if (fs.existsSync(src)) {
    fs.renameSync(src, dest);
    console.log("Moved", path.basename(src), "-> Amanda/" + path.basename(src));
  }
}
moveSync(path.join(outDir, "_next"), path.join(amandaDir, "_next"));
moveSync(path.join(outDir, "images"), path.join(amandaDir, "images"));

// Rewrite all HTML: ensure asset and image paths are absolute so they load on GitHub Pages
function rewriteHtml(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      rewriteHtml(full);
    } else if (e.name.endsWith(".html")) {
      let html = fs.readFileSync(full, "utf8");
      // Replace relative /Amanda/ and /images with absolute BASE
      const next = html
        .replace(/href="\/Amanda\//g, `href="${BASE}/`)
        .replace(/src="\/Amanda\//g, `src="${BASE}/`)
        .replace(/href="\/images\//g, `href="${BASE}/images/`)
        .replace(/src="\/images\//g, `src="${BASE}/images/`);
      if (next !== html) {
        fs.writeFileSync(full, next);
        console.log("Rewrote asset URLs in", path.relative(outDir, full));
      }
    }
  }
}
rewriteHtml(outDir);
