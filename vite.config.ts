// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // The site is served from the GitHub Pages sub-path
    // https://<user>.github.io/site-montage-pc/ so all asset URLs must be
    // prefixed with it. Overridable via BASE_PATH for other hosts.
    base: process.env.BASE_PATH ?? "/site-montage-pc/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender routes to static HTML so the site can be hosted on GitHub
    // Pages, which serves static files only (no Node server at runtime).
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
