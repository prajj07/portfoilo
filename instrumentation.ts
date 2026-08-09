export async function register() {
  // Node may expose a broken localStorage when --localstorage-file is set
  // without a path. That breaks Next SSR/Turbopack. Remove the stub.
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const storage = (globalThis as { localStorage?: Storage }).localStorage;
    if (storage && typeof storage.getItem !== "function") {
      Reflect.deleteProperty(globalThis, "localStorage");
    }
  }
}
