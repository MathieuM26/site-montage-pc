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
  // GitHub Pages (static output in .output/public).
  // Prerender the sub-path route directly: the router has basepath BASE, so
  // requesting BASE matches the index route and renders real HTML. (Requesting
  // "/" would mismatch the basepath and render an empty page.) The file lands
  // under .output/public/site-montage-pc/ and the workflow hoists it to root.
  nitro: {
    preset: "github_pages",
    prerender: { routes: [BASE], crawlLinks: false },
  },
  // NOTE: intentionally NOT overriding tanstackStart.server.entry. Lovable's
  // src/server.ts wrapper only routes correctly inside Lovable's Cloudflare
  // runtime; outside it the SSR handler 404s every route, producing empty
  // prerender output. Using TanStack Start's default (route-aware) server
  // entry lets the prerenderer render real HTML.
});
