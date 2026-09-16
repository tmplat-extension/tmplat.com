# tmplat.com

The home for [tmplat](https://tmplat.com) is hosted on [GitHub Pages](https://pages.github.com), built with
[Vite](https://vitejs.dev), [React](https://react.dev) and [MUI](https://mui.com) to match the look and feel of the
extension's own options UI.

## Install

You'll need [Node.js](https://nodejs.org) (see `.node-version`) and [pnpm](https://pnpm.io). Then install
dependencies:

```bash
pnpm install
```

## Developing

```bash
pnpm dev
```

## Building

```bash
pnpm build
```

This type-checks the project, builds each page (`index.html`, `faq.html`, `permissions.html`, `changes.html`,
`license.html`, `sitemap.html`, `404.html`) as an independent bundle — mirroring how the
[tmplat extension itself](https://github.com/tmplat-extension/tmplat) builds each of its own UI surfaces — and then
moves every page except `index.html`/`404.html` into `<page>/index.html` so URLs stay extensionless (e.g. `/faq`),
matching the site's existing URL structure. Output is written to `dist/`.

Deployment to GitHub Pages happens automatically via `.github/workflows/deploy.yml` on every push to `main`.
