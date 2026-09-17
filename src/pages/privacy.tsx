import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

const SOURCE_URL = 'https://github.com/tmplat-extension/tmplat';
const ISSUE_URL = 'https://github.com/tmplat-extension/tmplat/issues';

// Bump whenever the wording below changes in a way that affects what the policy actually says.
const LAST_UPDATED = '17 September 2026';

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Box component="section" id={id} sx={{ scrollMarginTop: 80 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Stack spacing={1.5} color="text.secondary">
        {children}
      </Stack>
    </Box>
  );
}

const BULLET_LIST_SX = {
  listStyleType: 'disc',
  pl: 4,
  '& .MuiListItem-root': { display: 'list-item', p: 0, mb: 1 },
};

export function Privacy() {
  return (
    <PageShell>
      <PageHeader title="Privacy Policy" subtitle="tmplat collects no data about you. None." />

      <Stack spacing={5}>
        <Alert severity="success" variant="outlined">
          There are no accounts, no analytics, no tracking, no telemetry, no crash reporting, and no ads. Nothing you do
          in tmplat is sent to us, because there is no &quot;us&quot; to send it to &mdash; tmplat has no servers.
        </Alert>

        <Section id="what-we-collect" title="What we collect">
          <Typography>
            Nothing. The tmplat browser extension does not collect, store, transmit, sell, or share any personal
            information or usage data. We never see your templates, your browsing history, the pages you visit, the
            content you copy, or anything else.
          </Typography>
          <Typography>
            tmplat is fully{' '}
            <Link href={SOURCE_URL} target="_blank" rel="noopener noreferrer">
              open source
            </Link>
            , so you don&apos;t have to take our word for it &mdash; every claim on this page can be checked against the
            code.
          </Typography>
        </Section>

        <Section id="on-your-device" title="What stays on your device">
          <Typography>
            tmplat needs to remember your templates and settings, so it saves them using your browser&apos;s own
            extension storage:
          </Typography>
          <List sx={BULLET_LIST_SX}>
            <ListItem>
              <strong>Synced storage</strong> &raquo; your templates and your notification and logging settings. Your
              browser syncs these across the browsers you&apos;re signed into, using your browser account &mdash; this
              is handled entirely by your browser vendor (Google, Mozilla, Microsoft, and so on) under their privacy
              policy, and never passes through us. If you&apos;re not signed in to your browser, it simply stays local.
            </ListItem>
            <ListItem>
              <strong>Local storage</strong> &raquo; your appearance settings and your URL shortener configuration,
              including any URL shortener credentials. These never leave your device except as described below.
            </ListItem>
          </List>
          <Typography>
            Uninstalling tmplat removes this data from your device, in line with how your browser handles extension
            storage.
          </Typography>
        </Section>

        <Section id="page-access" title="Access to the pages you visit">
          <Typography>
            tmplat asks for access to all websites because templates can be run on any page. When you run a template, it
            reads details from the current page &mdash; such as its title, URL, selected text, links, and cookies
            &mdash; purely to fill in your template variables. That information is used in the moment, placed on your
            clipboard, and then forgotten: it is not logged, stored, or transmitted anywhere.
          </Typography>
          <Typography>
            A separate, much narrower script runs only on tmplat.com, solely to switch this site&apos;s
            &quot;Install&quot; button to &quot;Installed&quot; if you already have the extension. It reads nothing
            else. See the full <Link href="/permissions">breakdown of permissions</Link> for more detail.
          </Typography>
        </Section>

        <Section id="location" title="Location">
          <Typography>
            The <code>coords</code> template variable uses your browser&apos;s standard geolocation API, which will ask
            for your permission. Your location is used only to render that template and is never stored or sent
            anywhere. If you never use <code>coords</code>, your location is never requested.
          </Typography>
        </Section>

        <Section id="third-parties" title="When data does leave your device">
          <Typography>
            There is exactly one case, and it only happens when you deliberately choose it: URL shortening. If a
            template you run shortens a URL, that URL must be sent to a shortening service to be shortened. Depending on
            which service you&apos;ve selected in settings:
          </Typography>
          <List sx={BULLET_LIST_SX}>
            <ListItem>
              <strong>spoo.me</strong> (the default) &raquo; the URL being shortened is sent to{' '}
              <Link href="https://spoo.me" target="_blank" rel="noopener noreferrer">
                spoo.me
              </Link>
              .
            </ListItem>
            <ListItem>
              <strong>da.gd</strong> &raquo; the URL being shortened is sent to{' '}
              <Link href="https://da.gd" target="_blank" rel="noopener noreferrer">
                da.gd
              </Link>
              , which publishes no privacy policy of its own.
            </ListItem>
            <ListItem>
              <strong>YOURLS</strong> &raquo; the URL being shortened, along with any credentials you&apos;ve
              configured, is sent to the YOURLS server you specified. That server is yours, not ours.
            </ListItem>
          </List>
          <Typography>
            These services are operated by third parties and handle that request under their own privacy policies, not
            this one. If you never run a template that shortens a URL, nothing is ever sent.
          </Typography>
        </Section>

        <Section id="website" title="This website">
          <Typography>
            tmplat.com serves no analytics, no tracking scripts, and no advertising, and it sets no cookies. It is
            hosted on GitHub Pages, so GitHub may process standard web server request data (such as your IP address) to
            deliver the site, as described in GitHub&apos;s own{' '}
            <Link
              href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy statement
            </Link>
            . We have no access to that data.
          </Typography>
        </Section>

        <Section id="children" title="Children">
          <Typography>
            tmplat collects no data from anyone, of any age, so there is nothing for us to knowingly collect from
            children.
          </Typography>
        </Section>

        <Section id="changes" title="Changes to this policy">
          <Typography>
            If tmplat ever changes what it does with your data, this page will be updated before that change ships, and
            the history is public in the{' '}
            <Link href="https://github.com/tmplat-extension/tmplat.com" target="_blank" rel="noopener noreferrer">
              website repository
            </Link>
            .
          </Typography>
          <Typography>Last updated: {LAST_UPDATED}</Typography>
        </Section>

        <Section id="contact" title="Questions?">
          <Typography>
            If anything here is unclear, or you believe something on this page doesn&apos;t match what the code actually
            does, please{' '}
            <Link href={ISSUE_URL} target="_blank" rel="noopener noreferrer">
              raise an issue
            </Link>
            .
          </Typography>
        </Section>
      </Stack>
    </PageShell>
  );
}
