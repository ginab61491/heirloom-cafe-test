import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/wine-database", destination: "/", permanent: false },
      { source: "/stephens-wine-database", destination: "/", permanent: false },
      { source: "/stephens-wine-database/:path*", destination: "/", permanent: false },
      { source: "/producers", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
