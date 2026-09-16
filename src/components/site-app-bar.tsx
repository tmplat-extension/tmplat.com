import BugReportIcon from '@mui/icons-material/BugReport';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useColorSchemeMode } from '../hooks/use-color-scheme-mode';

const SOURCE_URL = 'https://github.com/tmplat-extension';
const SPONSOR_URL = 'https://github.com/sponsors/airmrcr';
const ISSUE_URL = 'https://github.com/tmplat-extension/tmplat/issues';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/faq', label: 'FAQ' },
  { href: '/permissions', label: 'Permissions' },
  { href: '/changes', label: 'Changelog' },
];

export function SiteAppBar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') || '/' : '/';

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          component="a"
          href="/"
          sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, sm: 0 }, mr: { sm: 3 } }}
        >
          <Box component="img" src="/img/brand/tmplat-logo-inverse.svg" alt="tmplat" sx={{ height: 32 }} />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, flexGrow: 1, gap: 1 }}>
          {NAV_LINKS.map((link) => (
            <Button
              key={link.href}
              href={link.href}
              color="inherit"
              sx={{
                opacity:
                  currentPath === link.href.replace(/\/$/, '') || (link.href === '/' && currentPath === '/') ? 1 : 0.75,
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Tooltip title="Sponsor tmplat on GitHub">
            <IconButton
              size="large"
              aria-label="Sponsor tmplat on GitHub"
              color="inherit"
              href={SPONSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Report an issue on GitHub">
            <IconButton
              size="large"
              aria-label="Report an issue on GitHub"
              color="inherit"
              href={ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BugReportIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="View source on GitHub">
            <IconButton
              size="large"
              aria-label="View source on GitHub"
              color="inherit"
              href={SOURCE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
        </Box>

        <IconButton
          size="large"
          aria-label="Open navigation menu"
          color="inherit"
          sx={{ display: { xs: 'inline-flex', sm: 'none' } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 240 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {NAV_LINKS.map((link) => (
              <ListItemButton key={link.href} component="a" href={link.href}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            <ListItemButton component="a" href={SPONSOR_URL} target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Sponsor" />
            </ListItemButton>
            <ListItemButton component="a" href={ISSUE_URL} target="_blank" rel="noopener noreferrer">
              <ListItemText primary="Report an issue" />
            </ListItemButton>
            <ListItemButton component="a" href={SOURCE_URL} target="_blank" rel="noopener noreferrer">
              <ListItemText primary="View source" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export function SiteBrandLockup({ height = 96 }: { height?: number }) {
  const mode = useColorSchemeMode();
  // The icon keeps its own gradient tile regardless of theme, but the wordmark is bespoke vector
  // line-art with no fill of its own (see tmplat-branding's guidelines) - so, unlike the AppBar's
  // logo (which sits on an always-solid-coloured background), the wordmark here needs to switch
  // between its ink and white variants to stay legible against the page's own light/dark background.
  const wordmarkSrc = mode === 'dark' ? '/img/brand/tmplat-wordmark-inverse.svg' : '/img/brand/tmplat-wordmark.svg';

  return (
    <Typography component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
      <Box component="img" src="/img/brand/tmplat-icon.svg" alt="" sx={{ height }} />
      <Box component="img" src={wordmarkSrc} alt="tmplat" sx={{ height: height * 0.55 }} />
    </Typography>
  );
}
