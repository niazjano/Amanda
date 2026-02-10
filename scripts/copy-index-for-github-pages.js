const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");

const noJekyll = path.join(outDir, ".nojekyll");
fs.writeFileSync(noJekyll, "");
console.log("Created out/.nojekyll");
