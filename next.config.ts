import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/inquiry", permanent: false },
      /* Exact /services only — /services/[slug] pages must not be redirected */
      { source: "/services", destination: "/other-services", permanent: true },
    ];
  },
};

export default nextConfig;
