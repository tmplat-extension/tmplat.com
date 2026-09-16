import useMediaQuery from '@mui/material/useMediaQuery';
import type { PaletteMode } from '@mui/material/styles';

/**
 * Resolves the OS-level colour scheme preference into an MUI palette mode.
 *
 * This mirrors the minimal part of the extension's `useAppearanceResolvedMode` hook that applies
 * here (`prefers-color-scheme` -> light/dark) — the site has no user-configurable appearance
 * setting of its own, so there's nothing else to resolve.
 */
export function useColorSchemeMode(): PaletteMode {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  return prefersDarkMode ? 'dark' : 'light';
}
