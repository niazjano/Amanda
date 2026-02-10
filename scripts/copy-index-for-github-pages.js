const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

const noJekyll = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyll, "");
console.log("Created out/.nojekyll");

// With basePath "/Amanda", asset URLs are /Amanda/_next and /Amanda/images.
// Move _next and images into out/Amanda/ so deployed branch has Amanda/_next, Amanda/images.
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
