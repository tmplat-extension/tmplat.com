import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { InstallButton } from '../components/install-button';
import { PageShell } from '../components/page-shell';
import { SiteBrandLockup } from '../components/site-app-bar';

const PREDEFINED_TEMPLATES = [
  { name: 'URL', description: 'Copies the URL of the current tab' },
  { name: 'Short URL', description: 'Copies the URL, shortened using your chosen URL shortener' },
  { name: 'Anchor', description: "Copies an HTML anchor tag (<a>) with the URL and the tab's title" },
  { name: 'Encoded', description: 'Copies the URL, encoded so it can be safely used directly in an HTTP query' },
  {
    name: 'BBCode',
    description: "Copies a BBCode URL tag ([url]) with the URL and the tab's title",
    disabledByDefault: true,
  },
  {
    name: 'Markdown',
    description: "Copies a Markdown inline link with the URL and the tab's title",
    disabledByDefault: true,
  },
  {
    name: 'Selection in Markdown',
    description: 'Copies the current selection on the page, converted to Markdown',
    disabledByDefault: true,
  },
];

const URL_SHORTENERS = [
  { name: 'spoo.me', description: 'The default choice — no account or configuration needed' },
  { name: 'da.gd', description: 'A no-configuration alternative to spoo.me' },
  { name: 'YOURLS', description: 'Link to your own self-hosted YOURLS installation' },
];

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

export function Home() {
  return (
    <PageShell maxWidth="lg">
      <Stack spacing={2} sx={{ alignItems: 'center', textAlign: 'center', py: { xs: 4, sm: 8 } }}>
        <SiteBrandLockup height={112} />
        <Typography variant="h5" component="p" color="text.secondary" sx={{ maxWidth: 560 }}>
          Quickly and easily copies info on the current page using a simple and unique template system.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 2 }}>
          <InstallButton />
          <Button
            variant="outlined"
            size="large"
            color="secondary"
            startIcon={<FavoriteIcon />}
            href="https://github.com/sponsors/airmrcr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sponsor
          </Button>
        </Stack>
      </Stack>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ display: 'grid', gap: 6, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
        <Feature title="Templates">
          <Typography color="text.secondary">
            Using a powerful template system, tmplat lets you easily create your own templates, making the possibilities
            endless. A comprehensive guide is built right into the extension&apos;s options page (look for the help
            icon).
          </Typography>
        </Feature>

        <Feature title="Ready-to-go">
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            tmplat comes packed with the following predefined templates:
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {PREDEFINED_TEMPLATES.map((template) => (
              <Tooltip key={template.name} title={template.description}>
                <Chip label={template.name} variant={template.disabledByDefault ? 'outlined' : 'filled'} />
              </Tooltip>
            ))}
          </Stack>
        </Feature>

        <Feature title="Powerful">
          <Typography color="text.secondary">
            With just the click of a button you can quickly and easily copy the information you want directly to your
            system clipboard <em>without any formatting</em>, saving you time on tedious tasks. Keyboard shortcuts and
            right-click menus make accessing your favourite templates even faster.
          </Typography>
        </Feature>

        <Feature title="Shortening">
          <Typography color="text.secondary" sx={{ mb: 2 }}>
            URL shortening is common practise, so tmplat comes prepared with support for these services:
          </Typography>
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1 }}>
            {URL_SHORTENERS.map((shortener) => (
              <Tooltip key={shortener.name} title={shortener.description}>
                <Chip label={shortener.name} />
              </Tooltip>
            ))}
          </Stack>
        </Feature>

        <Feature title="Transparent">
          <Typography color="text.secondary">
            We know it can be daunting to see permission warnings when installing new extensions, so we put together a
            detailed breakdown of everything tmplat requires and why.
          </Typography>
          <Button href="/permissions" sx={{ mt: 1 }}>
            Permissions &rsaquo;
          </Button>
        </Feature>

        <Feature title="Evolution">
          <Typography color="text.secondary">
            We&apos;re always updating tmplat, trying to make it the best it can be.
          </Typography>
          <Button href="/changes" sx={{ mt: 1 }}>
            Changelog &rsaquo;
          </Button>
        </Feature>

        <Feature title="Need Help?">
          <Typography color="text.secondary">
            If you have any problems with tmplat, would like to give feedback, or want to request something new, we
            welcome it all through GitHub Issues.
          </Typography>
          <Button
            href="https://github.com/tmplat-extension/tmplat/issues"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 1 }}
          >
            GitHub Issues &rsaquo;
          </Button>
        </Feature>

        <Feature title="Questions">
          <Typography color="text.secondary">
            Our frequently asked questions are a great starting point for most enquiries.
          </Typography>
          <Button href="/faq" sx={{ mt: 1 }}>
            FAQ &rsaquo;
          </Button>
        </Feature>

        <Feature title="Browsers">
          <Typography color="text.secondary">
            Currently, tmplat is only supported on{' '}
            <Link href="https://google.com/chrome" target="_blank" rel="noopener noreferrer">
              Chrome
            </Link>
            .
          </Typography>
        </Feature>
      </Box>
    </PageShell>
  );
}
