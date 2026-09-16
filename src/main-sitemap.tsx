import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Sitemap } from './pages/sitemap';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sitemap />
  </StrictMode>,
);
