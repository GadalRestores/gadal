// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves projects from a repo-name subpath unless a custom domain is configured.
// Replace "/gadal-restores/" with your actual repository name if it differs.
const base = "/gadal-restores/";

export default defineConfig({
  vite: {
    base,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static routes to prerender as HTML for GitHub Pages deployment.
    pages: [
      { path: "/" },
      { path: "/services" },
      { path: "/pricing" },
      { path: "/faq" },
      { path: "/contact" },
      { path: "/gallery" },
      { path: "/reviews" },
      { path: "/privacy" },
      { path: "/terms" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
