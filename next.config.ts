import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Anchor resolution to this project even when a parent directory has a lockfile.
  turbopack: { root: __dirname },
};

export default nextConfig;

