// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  /* config options here */
  // Add your Next.js configuration options here
  transpilePackages: ["ritro-ui"],
  images: {
    domains: ["localhost", "ritro-ui.s3.amazonaws.com"],
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
  },
  env: {
    API_URL: process.env.API_URL,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_REGION: process.env.S3_REGION,
    S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
    S3_SECRET_KEY: process.env.S3_SECRET_KEY,
  },
};

module.exports = nextConfig;
