import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/inquiry", permanent: false },
      { source: "/services", destination: "/what-we-offer", permanent: true },
      { source: "/services/:path*", destination: "/what-we-offer", permanent: true },
      { source: "/case-studies", destination: "/about", permanent: false },
      { source: "/success-stories", destination: "/about", permanent: false },
      { source: "/experts", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
