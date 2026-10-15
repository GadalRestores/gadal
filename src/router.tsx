import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    // Served at the domain root on gadalrestores.com.
    basepath: "/",
    // GitHub Pages serves directory routes with a trailing slash
    // (e.g. /services/ from services/index.html). Using "always" keeps the
    // prerender crawler's trailing-slash requests from being redirected.
    trailingSlash: "always",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
