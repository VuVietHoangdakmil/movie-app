import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/music",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com", "i.scdn.co"],
  },
};

export default nextConfig;
