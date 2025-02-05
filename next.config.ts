import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  }
  /* config options here */
};

export default nextConfig;
