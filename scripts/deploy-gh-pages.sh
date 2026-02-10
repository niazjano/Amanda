#!/bin/bash
set -e
cd "$(dirname "$0")/.."
REPO_ROOT="$PWD"
OUT_BACKUP="${TMPDIR:-/tmp}/amanda_out_$$"

echo "Building on main..."
git checkout main
npm run build
test -d out || { echo "Missing out/ after build"; exit 1; }
cp -r out "$OUT_BACKUP"

echo "Checking out gh-pages..."
git checkout gh-pages

echo "Copying out/ contents to root (including .nojekyll)..."
for f in "$OUT_BACKUP"/* "$OUT_BACKUP"/.[!.]*; do
  [ -e "$f" ] && cp -r "$f" .
done
# Required: disable Jekyll so Amanda/_next (underscore) is served; without this, CSS/JS 404
echo "" > .nojekyll
rm -rf "$OUT_BACKUP"

echo "Removing build artifacts from branch..."
rm -rf out .next node_modules .gitignore README.md next-env.d.ts next.config.js package-lock.json package.json postcss.config.js public scripts src tailwind.config.ts tsconfig.json 2>/dev/null || true

echo "Staging and committing..."
git add -A
git add -f .nojekyll
git commit -m "Deploy: GitHub Pages (absolute assetPrefix, .nojekyll for _next)"
git push origin gh-pages --force

echo "Switching back to main..."
git checkout main
echo "Done. Site: https://niazjano.github.io/Amanda/"
