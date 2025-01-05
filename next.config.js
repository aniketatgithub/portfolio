/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint issues during the build
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
