// Post-build step: GitHub Pages is confirmed (see plan notes) to already serve this site's pages at
// extensionless URLs (e.g. "/faq"), so existing bookmarks/links/SEO must keep working. Vite's asset
// references are absolute ("/assets/..."), so moving each page's HTML into "<name>/index.html" is
// enough to get clean directory-style URLs without touching anything else. "index.html" (home) and
// "404.html" (GitHub Pages' required custom error page) are left at the root untouched.

import { existsSync, mkdirSync, renameSync } from 'node:fs';
import { join } from 'node:path';

const DIST_DIR = join(import.meta.dirname, '..', 'dist');
const CLEAN_URL_PAGES = ['faq', 'permissions', 'changes', 'privacy', 'license', 'sitemap'];

for (const page of CLEAN_URL_PAGES) {
  const source = join(DIST_DIR, `${page}.html`);
  if (!existsSync(source)) {
    throw new Error(`Expected build output missing: ${source}`);
  }

  const destinationDir = join(DIST_DIR, page);
  mkdirSync(destinationDir, { recursive: true });
  renameSync(source, join(destinationDir, 'index.html'));

  console.log(`Moved ${page}.html -> ${page}/index.html`);
}
