import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

const PERMISSIONS: { name: string; description: ReactNode }[] = [
  {
    name: 'clipboardWrite',
    description:
      'Lets tmplat copy your generated template output to the clipboard so you can paste it wherever you need it.',
  },
  {
    name: 'contextMenus',
    description:
      "Adds tmplat's template options to the right-click menu, so you can run a template on the current page without opening the extension.",
  },
  {
    name: 'cookies',
    description: (
      <>
        Lets templates read cookies from the page you&apos;re on, for template variables like <code>cookie</code> and{' '}
        <code>cookies</code>.
      </>
    ),
  },
  {
    name: 'geolocation',
    description: (
      <>
        Lets the <code>coords</code> template variable insert your current location into a template, using a location
        lookup that&apos;s independent of the page you&apos;re on (rather than that page&apos;s own location
        permission).
      </>
    ),
  },
  {
    name: 'identity',
    description:
      'Used to securely sign you in to Bitly (for link-shortening templates) via the browser’s built-in OAuth flow.',
  },
  {
    name: 'notifications',
    description:
      'Lets tmplat show a desktop notification when a new version is released. This can be turned off in settings.',
  },
  {
    name: 'offscreen',
    description:
      "Modern browser extensions can't access the page (DOM) from their background code. This permission lets tmplat briefly open a hidden page when it needs to — for copying to the clipboard, converting page content to Markdown, or reading your location.",
  },
  {
    name: 'scripting',
    description:
      "Lets tmplat re-activate itself on tabs you already had open when it's installed or updated, without you needing to refresh the page.",
  },
  {
    name: 'storage',
    description:
      'Lets tmplat save your templates, settings, and sign-in state on your device, and sync them across your browser installs.',
  },
  {
    name: 'tabs',
    description: (
      <>
        Lets tmplat see the URL and title of your open tabs, and message its own scripts running on them, so template
        variables like page title/URL work and the extension can re-activate across all your tabs.
      </>
    ),
  },
];

export function Permissions() {
  return (
    <PageShell>
      <PageHeader title="Permissions" subtitle="A breakdown of the permissions tmplat requests, and why" />

      <Stack spacing={3}>
        <Typography color="text.secondary">
          Browsers ask you to grant permissions to extensions so you stay in control of what they can do. Every
          permission below is required by tmplat for some part of its functionality &mdash; here&apos;s an honest
          breakdown of what each one is for. If you&apos;d rather see for yourself, tmplat is fully{' '}
          <Link href="https://github.com/tmplat-extension/tmplat" target="_blank" rel="noopener noreferrer">
            open source
          </Link>
          .
        </Typography>

        <Box>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 2 }}>
            Permissions
          </Typography>
          <Stack spacing={2}>
            {PERMISSIONS.map((permission) => (
              <Box key={permission.name}>
                <Typography component="code" sx={{ fontWeight: 700, fontFamily: 'monospace' }}>
                  {permission.name}
                </Typography>
                <Typography color="text.secondary">{permission.description}</Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography variant="h5" component="h2" gutterBottom>
            Host permissions
          </Typography>
          <Typography component="code" sx={{ fontWeight: 700, fontFamily: 'monospace', display: 'block', mb: 1 }}>
            http://*/*, https://*/*
          </Typography>
          <Typography color="text.secondary">
            Needed so tmplat can read basic page details (title, URL, selected text, links, and more) on whichever
            website you&apos;re on when you run a template, since templates aren&apos;t limited to specific sites. A
            separate, much narrower script also runs only on tmplat.com itself, purely to swap the &quot;Install&quot;
            button on this site to &quot;Installed&quot; once you already have the extension &mdash; it doesn&apos;t
            read anything else on this page.
          </Typography>
        </Box>
      </Stack>
    </PageShell>
  );
}
