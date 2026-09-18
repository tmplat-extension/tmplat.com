import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import Button from '@mui/material/Button';
import { useState } from 'react';

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/dcjnfaoifoefmnbhhlbppaebgnccfddf';
const EDGE_ADD_ONS_URL = 'https://microsoftedge.microsoft.com/addons/detail/3b9c79f2-9c4a-4209-8fbc-4b02d6ea6415';

type NavigatorUserAgentData = { brands?: { brand: string; version: string }[] };

/*
 * Chromium-based Edge is the only browser reporting a "Microsoft Edge" brand. `userAgentData` is preferred, as the
 * user agent string is progressively being frozen, but it only exists on Chromium - so the string stays as the
 * fallback, which also covers the Edge builds on iOS and Android that have no `userAgentData` at all.
 */
function isEdge(): boolean {
  const { userAgentData } = navigator as Navigator & { userAgentData?: NavigatorUserAgentData };
  if (userAgentData?.brands) {
    return userAgentData.brands.some(({ brand }) => brand === 'Microsoft Edge');
  }

  return /\bEdg(?:e|A|iOS)?\//.test(navigator.userAgent);
}

// The tmplat extension's homepage-content script sets `data-tmplat-installed` on <html> as soon as it
// runs (document_start, so this is present before this component ever mounts) to let this button
// reflect whether the visitor already has it installed. The extension ships as the very same package
// to both stores, so this works no matter which one the visitor installed it from.
export function InstallButton() {
  const [installed] = useState(() => document.documentElement.dataset.tmplatInstalled === 'true');
  const [storeUrl] = useState(() => (isEdge() ? EDGE_ADD_ONS_URL : CHROME_WEB_STORE_URL));

  return (
    <Button
      variant="contained"
      size="large"
      color={installed ? 'success' : 'primary'}
      disabled={installed}
      startIcon={<InstallDesktopIcon />}
      href={storeUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {installed ? 'Installed' : 'Install'}
    </Button>
  );
}
