# GitHub Merge & Pages Deployment Readiness Plan

## Goal
Make the repository safe to merge into `main` and have the GitHub Pages workflow deploy a working build of the Gadal Restores site.

## Current Problems Found

1. **The Pages workflow uploads the raw repo, not a built site.**
   `.github/workflows/static.yml` currently uploads `path: '.'`. GitHub Pages will serve source files instead of the compiled app.

2. **The workflow never installs dependencies or runs a build.**
   There are no `bun install` / `bun run build` steps, so no `dist/` output is produced.

3. **Node.js 20 deprecation warning from GitHub Actions.**
   The workflow uses `actions/checkout@v4`, `actions/configure-pages@v5`, `actions/upload-pages-artifact@v3`, and `actions/deploy-pages@v5`. GitHub is deprecating the Node.js 20 runtime these actions target and forcing them onto Node.js 24, which produces the warning you see. Updating to the latest stable action versions that run on Node.js 20+ natively will clear the warning.

4. **TanStack Start needs static-export configuration for GitHub Pages.**
   The default TanStack Start build targets a serverless worker. For GitHub Pages we need a static HTML export and the correct base path (repo-name subpath unless a custom domain is configured).

## Plan Steps

### 1. Update GitHub Actions workflow
Edit `.github/workflows/static.yml` to:
- Use `actions/checkout@v4` (kept — already current), `actions/configure-pages@v5` (latest), `actions/upload-pages-artifact@v4` (latest), and `actions/deploy-pages@v5` (latest) to remove the Node.js 20 deprecation warning.
- Add a `setup` step for Bun (`oven-sh/setup-bun@v2`).
- Add `bun install` and `bun run build` steps.
- Upload the build output directory (`dist/` or the configured output path) instead of the entire repository.
- Keep the `main` branch trigger and Pages permissions unchanged.

### 2. Configure static export
In `vite.config.ts` add the TanStack Start static-export settings:
- Disable SSR / enable static generation so HTML files are emitted for every route.
- Set the base path to the repository name for GitHub Pages (e.g. `/gadal-restores/`) unless a custom domain is already configured. If a custom domain is configured, the base path stays `/`.
- Confirm the output directory matches the upload path in the workflow.

### 3. Verify the build locally
Run:
- `bun install`
- `bun run build`
- Inspect the output folder for `index.html` plus route folders (`/services`, `/pricing`, `/faq`, `/contact`, `/gallery`, `/reviews`, `/privacy`, `/terms`).
- Run `bunx tsgo --noEmit` to confirm TypeScript still passes.

### 4. Test the static output
Serve the generated `dist/` folder locally (e.g. `bunx serve dist` or `python -m http.server`) and spot-check:
- Homepage loads.
- Navigation links to `/services`, `/pricing`, `/faq`, `/contact`, `/gallery`, `/reviews` work.
- Before/after carousel, photo gallery lightbox, and quote form render.

### 5. Merge readiness checklist
- No secrets, API keys, or passwords in source code.
- `package.json` scripts are correct.
- `.gitignore` excludes `node_modules` and build output.
- Workflow file references the correct build directory.

## Open Questions Before Implementation

1. **GitHub Pages base path:** Is the repository name `gadal-restores` (or something else)? GitHub Pages on a repo without a custom domain serves from `https://<username>.github.io/<repo-name>/`, so the Vite base path must match exactly.

2. **Custom domain:** Do you already have a custom domain (e.g. `gadalrestores.com`) configured in the GitHub Pages settings? If yes, the base path stays `/`.

3. **Build output directory:** TanStack Start / Nitro may output to `dist/`, `.output/`, or another folder. Should we inspect the first build to confirm the folder name, or do you already know it?

Once you confirm the repo name / custom-domain situation, I can implement the workflow and static-export changes.