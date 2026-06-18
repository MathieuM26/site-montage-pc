// Stand-in for the Lovable-injected error capture module.
// Records the most recent unhandled error so the SSR wrapper (server.ts)
// can surface it instead of an opaque 500.
let lastCapturedError: unknown;

export function captureError(error: unknown): void {
  lastCapturedError = error;
}

export function consumeLastCapturedError(): unknown {
  const error = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}

if (typeof process !== "undefined" && typeof process.on === "function") {
  process.on("unhandledRejection", captureError);
  process.on("uncaughtException", captureError);
}
