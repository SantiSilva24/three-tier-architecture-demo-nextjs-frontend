import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    emotion: true,
  },
  // Enable standalone output mode for Docker
  output: 'standalone',
};

export default nextConfig;
