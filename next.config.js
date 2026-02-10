const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Amanda" : "";
// Absolute URL so CSS/JS load reliably on GitHub Pages (avoids Jekyll/_next path issues)
const assetPrefix = isProd ? "https://niazjano.github.io/Amanda/" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
