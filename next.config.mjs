/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export
  output: "export",

  // Optional: Add if you want to deploy to a subdirectory (e.g., /docs)
  // basePath: '/docs',

  // Optional: Enable React Strict Mode
  reactStrictMode: true,

  // Optional: Add trailingSlash if you need it for S3 compatibility
  // trailingSlash: true,

  // Optional: Image optimization configuration (static exports don't support next/image by default)
  images: {
    unoptimized: true, // Required for static export
  },

  // Optional: Environment variables
  env: {
    // Your environment variables here
  },
};

export default nextConfig;
