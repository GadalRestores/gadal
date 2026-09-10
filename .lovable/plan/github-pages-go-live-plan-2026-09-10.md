# GitHub Pages Go-Live Plan

## Goal
Publish the Gadal Restores site to GitHub Pages from the `main` branch root folder, then verify it loads correctly.

## What is already done
- `vite.config.ts` sets `base: "/gadal/"` and prerenders all 9 routes (`/`, `/services`, `/pricing`, `/gallery`, `/reviews`, `/faq`, `/contact`, `/privacy`, `/terms`) to static HTML.
- `src/router.tsx` uses production basepath `/gadal` and dev basepath `/`.
- Logo/favicon paths use `import.meta.env.BASE_URL` so they resolve under `/gadal/`.
- `dist/client` was copied to the repo root and a `404.html` fallback plus `.nojekyll` were added.

## Steps for you to complete

1. Push the current code to GitHub
   - Make sure the repository is connected/synced and the latest changes are on the `main` branch.

2. Open GitHub Pages settings
   - Go to your repo on GitHub → **Settings** → **Pages** (left sidebar).

3. Choose the source
   - Under **Build and deployment** → **Source**, select **Deploy from a branch**.
   - Under **Branch**, pick `main` and folder `/ (root)`.
   - Click **Save**.

4. Wait for the first deploy
   - GitHub will show a build/deploy status. The first one usually takes 1–3 minutes.
   - The live URL will be: `https://<your-github-username>.github.io/gadal/`

5. Verify the live site
   - Open the URL above.
   - Check the homepage, navigation links, gallery lightbox, contact form, and mobile layout.
   - If a page shows 404 on refresh, the `404.html` fallback should handle it; if not, come back and I will adjust the redirect script.

## After this works
- Any future edits in Lovable will sync the source code to GitHub, but the built files at root will not update automatically.
- Tell me to "rebuild for GitHub Pages" after each round of changes and I will regenerate the static files before your next push.
