import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // experimental: {
  //   reactCompiler: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'itczatbmopzvkeqqithe.supabase.co',
        port: '', // Leave empty unless you have a specific port
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default nextConfig;
