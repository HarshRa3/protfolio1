import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['live.staticflickr.com'], // Add the domain here
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harshrastogi.netlify.app',
        pathname: '/assets/**',
      },
    ],
  },
  output: "standalone",
  // Other Next.js configuration options can go here
};

export default nextConfig;
