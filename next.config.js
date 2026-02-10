/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Amanda",
  assetPrefix: "/Amanda/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
