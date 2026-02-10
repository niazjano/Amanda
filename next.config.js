const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Amanda" : "";
const assetPrefix = isProd ? "/Amanda/" : "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
