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
  // Force-enable the Nitro build outside the Lovable environment.
  // IMPORTANT: do NOT use a static preset (github_pages/static) here — those
  // ship only a static file server with no SSR handler, so the prerenderer has
  // nothing to render and every route 404s. The default (node) preset includes
  // the SSR handler, letting the prerenderer render real HTML into
  // .output/public. Nitro mounts the app at baseURL and redirects other paths
  // to it, so prerender the baseURL path itself.
  nitro: {
    baseURL: BASE,
    prerender: { routes: [BASE], crawlLinks: false },
  },
  // NOTE: intentionally NOT overriding tanstackStart.server.entry. Lovable's
  // src/server.ts wrapper only routes correctly inside Lovable's Cloudflare
  // runtime; outside it the SSR handler 404s every route, producing empty
  // prerender output. Using TanStack Start's default (route-aware) server
  // entry lets the prerenderer render real HTML.
});
