import InstallDesktopIcon from '@mui/icons-material/InstallDesktop';
import Button from '@mui/material/Button';
import { useState } from 'react';

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/dcjnfaoifoefmnbhhlbppaebgnccfddf';

// The tmplat extension's homepage-content script sets `data-tmplat-installed` on <html> as soon as it
// runs (document_start, so this is present before this component ever mounts) to let this button
// reflect whether the visitor already has it installed.
export function InstallButton() {
  const [installed] = useState(() => document.documentElement.dataset.tmplatInstalled === 'true');

  return (
    <Button
      variant="contained"
      size="large"
      color={installed ? 'success' : 'primary'}
      disabled={installed}
      startIcon={<InstallDesktopIcon />}
      href={CHROME_WEB_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {installed ? 'Installed' : 'Install'}
    </Button>
  );
}
