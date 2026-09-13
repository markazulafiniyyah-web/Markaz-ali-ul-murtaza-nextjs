import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.e2b.app"],
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/donate.html", destination: "/donate", permanent: true },
      { source: "/hadith.html", destination: "/hadith", permanent: true }
    ];
  }
};
export default nextConfig;
