import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo, type ReactNode } from 'react';
import { useColorSchemeMode } from '../hooks/use-color-scheme-mode';
import { SiteAppBar } from './site-app-bar';
import { SiteFooter } from './site-footer';

export function PageShell({ children, maxWidth = 'md' }: { children: ReactNode; maxWidth?: 'sm' | 'md' | 'lg' }) {
  const mode = useColorSchemeMode();

  // Matches the extension's own theme exactly (`src/lib/ui/*/app/app.tsx`): stock MUI palette, no
  // brand-colour overrides, driven purely by colour-scheme mode.
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <SiteAppBar />
        <Container component="main" maxWidth={maxWidth} sx={{ flexGrow: 1, py: 6 }}>
          {children}
        </Container>
        <SiteFooter />
      </Box>
    </ThemeProvider>
  );
}
