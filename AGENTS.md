<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Deployment rules

- Static GitHub Pages output at repo root is regenerated with `bun run build` (cleans generated root files, prerenders, publishes `dist/client` to root with `404.html` + `.nojekyll`). Why: the site ships as prerendered HTML from the `main` branch root for GitHub Pages + custom domain gadalrestores.com.
- The router uses `basepath: "/"` and `trailingSlash: "always"`. Why: the Lovable build pins prerender `maxRedirects: 0`, and GitHub Pages serves directory routes with a trailing slash, so trailing-slash requests must return 200 directly instead of redirecting — otherwise prerender only outputs the homepage.
- Internal `Link to` values and canonical URLs use trailing-slash form (`/services/`). Why: keeps router types valid under `trailingSlash: "always"` and matches the final served URL.
