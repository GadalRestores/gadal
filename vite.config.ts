// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// The site is served from the custom domain gadalrestores.com at the domain
// root, so assets and routes live at "/". GitHub Pages redirects the default
// <user>.github.io/gadal/ URL to the custom domain once it is connected.
const pages = [
  { path: "/" },
  { path: "/services" },
  { path: "/pricing" },
  { path: "/gallery" },
  { path: "/reviews" },
  { path: "/faq" },
  { path: "/contact" },
  { path: "/privacy" },
  { path: "/terms" },
];

export default defineConfig({
  vite: {
    base: "/",
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every route is fully static (no per-visitor data), so prerender them all
    // to plain HTML files that GitHub Pages can serve without a server.
    pages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
