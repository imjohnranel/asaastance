import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contact", destination: "/inquiry", permanent: false },
      /* Exact /services only — /services/[slug] pages must not be redirected */
      { source: "/services", destination: "/other-services", permanent: true },
      { source: "/case-studies", destination: "/about", permanent: false },
      { source: "/success-stories", destination: "/about", permanent: false },
      { source: "/experts", destination: "/about", permanent: false },
    ];
  },
};

export default nextConfig;
