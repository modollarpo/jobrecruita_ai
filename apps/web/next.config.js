// next.config.js for monorepo/shared TypeScript support
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow importing TS from outside the web app (shared)
  transpilePackages: ["shared"],
  webpack: (config) => {
    config.resolve.alias["@shared"] = path.resolve(__dirname, "../../shared");
    return config;
  },
};

module.exports = nextConfig;
