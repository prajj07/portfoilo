import type { NextConfig } from "next";

// Strip Node's broken localStorage stub (seen when --localstorage-file has no path)
const storage = (globalThis as { localStorage?: Storage }).localStorage;
if (storage && typeof storage.getItem !== "function") {
  Reflect.deleteProperty(globalThis, "localStorage");
}

const nextConfig: NextConfig = {};

export default nextConfig;
