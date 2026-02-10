const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

// GitHub Pages uses Jekyll by default, which ignores folders starting with _.
// Adding .nojekyll disables Jekyll so _next/ is served.
const noJekyll = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyll, "");
console.log("Created out/.nojekyll");

// Next.js exports to out/ with basePath in URLs but files at out/_next and out/images.
// GitHub Pages will serve at https://user.github.io/Amanda/ so we need out/Amanda/_next and out/Amanda/images.
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
