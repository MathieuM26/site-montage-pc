// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The site is served from the GitHub Pages project sub-path
// https://<user>.github.io/site-montage-pc/ — every layer (Vite assets,
// TanStack router, Nitro prerender) must agree on this prefix.
// Overridable via BASE_PATH for other hosts (e.g. "/" for a root domain).
const BASE = process.env.BASE_PATH ?? "/site-montage-pc/";

export default defineConfig({
  vite: {
    base: BASE,
  },
  // Force-enable the Nitro build outside the Lovable environment and target
  // GitHub Pages (static output in .output/public, with .nojekyll + 404.html).
  // baseURL keeps Nitro's prerenderer requesting routes under the sub-path so
  // they match the router's basepath instead of 404-ing.
  nitro: { preset: "github_pages", baseURL: BASE },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // SPA mode: emit a static client-rendered shell (index.html) instead of
    // per-route SSR. Required for static hosting like GitHub Pages, and avoids
    // the empty-output that route prerendering produced under the sub-path.
    spa: { enabled: true },
  },
});
