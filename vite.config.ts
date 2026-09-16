import { existsSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';

// scripts/clean-urls.js moves each built page from "<page>.html" to "<page>/index.html" so the
// deployed site can be linked to with extensionless URLs (e.g. "/faq"). GitHub Pages resolves those
// directly to "<page>/index.html" server-side, but `vite preview` only serves exact static file
// matches, so the same links 404 (or, without `appType: 'mpa'`, silently fall back to the home page)
// when previewing a production build locally. This plugin replicates GitHub Pages' resolution so
// `pnpm preview` matches production.
function cleanUrlPreviewFallback(): Plugin {
  return {
    name: 'clean-url-preview-fallback',
    configurePreviewServer(server) {
      server.middlewares.use((req, _res, next) => {
        const pathname = req.url?.split('?')[0];
        if (req.method === 'GET' && pathname && !pathname.endsWith('/') && !extname(pathname)) {
          const outDir = resolve(server.config.root, server.config.build.outDir);
          if (existsSync(join(outDir, pathname, 'index.html'))) {
            req.url = `${pathname}/index.html`;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  appType: 'mpa',
  plugins: [react(), cleanUrlPreviewFallback()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(import.meta.dirname, 'index.html'),
        faq: resolve(import.meta.dirname, 'faq.html'),
        permissions: resolve(import.meta.dirname, 'permissions.html'),
        changes: resolve(import.meta.dirname, 'changes.html'),
        license: resolve(import.meta.dirname, 'license.html'),
        sitemap: resolve(import.meta.dirname, 'sitemap.html'),
        notFound: resolve(import.meta.dirname, '404.html'),
      },
    },
  },
});
