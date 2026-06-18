import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Match Vite's base so routing works under the GitHub Pages sub-path.
    // Strip the trailing slash: a basepath of "/site-montage-pc/" leaves an
    // empty remainder for the "/site-montage-pc/" URL and matches no route,
    // so "/site-montage-pc" is required for the index route to match.
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
