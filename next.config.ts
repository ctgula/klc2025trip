import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
