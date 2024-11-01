import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '@/public/**',
        search: 'test',
      },
    ],
  },
};

export default nextConfig;
