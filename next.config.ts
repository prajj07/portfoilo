import type { NextConfig } from "next";
import path from "path";

// Strip Node's broken localStorage stub (seen when --localstorage-file has no path)
const storage = (globalThis as { localStorage?: Storage }).localStorage;
if (storage && typeof storage.getItem !== "function") {
  Reflect.deleteProperty(globalThis, "localStorage");
}

const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  // Avoid picking /Users/prajwal/package-lock.json as the workspace root
  turbopack: {
    root: projectRoot,
  },
  outputFileTracingRoot: projectRoot,
};

export default nextConfig;
