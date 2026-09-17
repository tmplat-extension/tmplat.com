import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

const ISSUE_URL = 'https://github.com/tmplat-extension/tmplat/issues';
const CROWDIN_URL = 'https://crowdin.com/project/tmplat';

function Question({ id, title, children }: { id: string; title: string; children: ReactNode }) {
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

export function Faq() {
  return (
    <PageShell>
      <PageHeader title="Frequently Asked Questions" />
      <Stack spacing={5}>
        <Question id="writing-templates" title="How do I create my own templates?">
          <Typography>
            Open the options page and click the help icon in the top-right corner to view the built-in guide for writing
            templates. It walks through the full template syntax with examples.
          </Typography>
        </Question>

        <Question id="special-pages" title="Why can't I use some features on certain pages?">
          <Typography>
            Browser extensions can&apos;t run on certain restricted pages, so some features (like keyboard shortcuts and
            variables extracted from the page itself) won&apos;t work there. This includes the Chrome Web Store, and
            equivalent listing/account pages for other browsers (e.g. Firefox&apos;s Add-ons site and account pages, or
            Microsoft Edge&apos;s Add-ons site) &mdash; anywhere the browser itself blocks extensions from running for
            security reasons. If you try to run a template on one of these pages you&apos;ll see &quot;
            <em>&lt;template&gt;</em> could not be executed on a restricted tab&quot;.
          </Typography>
        </Question>

        <Question id="predefined-templates" title="Why can I not edit some templates?">
          <Typography>
            The title, description and content of predefined templates (URL, Short URL, Anchor, Encoded, BBCode,
            Markdown, and Selection in Markdown) are fixed and cannot be changed, and they cannot be deleted. You can,
            however, still enable or disable each one individually to control whether it&apos;s accessible from the
            menus and keyboard shortcuts &mdash; BBCode, Markdown and Selection in Markdown are disabled by default.
          </Typography>
        </Question>

        <Question id="context-menu" title="What URL is used when I right-click on a page?">
          <Typography>
            That depends on what you right-clicked on. tmplat checks in the following priority order:
          </Typography>
          <List sx={{ listStyleType: 'decimal', pl: 4, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
            <ListItem>
              <strong>Link</strong> &raquo; Right-clicking on a link
            </ListItem>
            <ListItem>
              <strong>Media</strong> &raquo; Right-clicking on anything with a <code>src</code> attribute (e.g. images)
            </ListItem>
            <ListItem>
              <strong>Frame</strong> &raquo; Right-clicking anywhere within an internal frame
            </ListItem>
            <ListItem>
              <strong>Page</strong> &raquo; Right-clicking anywhere else that doesn&apos;t match the above
            </ListItem>
          </List>
        </Question>

        <Question id="permissions" title="Why do you need this permission...?">
          <Typography>
            We&apos;ve created a full <Link href="/permissions">breakdown of the permissions</Link> tmplat requires and
            why. If you&apos;d rather see for yourself, the{' '}
            <Link href="https://github.com/tmplat-extension/tmplat" target="_blank" rel="noopener noreferrer">
              source code
            </Link>{' '}
            is open for anyone to read.
          </Typography>
        </Question>

        <Question id="privacy" title="Do you collect any of my data?">
          <Typography>
            No. tmplat has no servers, no accounts, and no analytics &mdash; your templates and settings stay on your
            device (and in your own browser&apos;s sync, if you use it). Our <Link href="/privacy">privacy policy</Link>{' '}
            spells out exactly what happens to your data, including the one case where anything leaves your device: URL
            shortening, which only happens when you run a template that asks for it.
          </Typography>
        </Question>

        <Question id="languages" title="How can I get tmplat in a different language?">
          <Typography>
            Translations are community-driven and managed through{' '}
            <Link href={CROWDIN_URL} target="_blank" rel="noopener noreferrer">
              Crowdin
            </Link>
            . If you&apos;d like to help translate tmplat into your language, visit the project page to get started
            &mdash; no coding required.
          </Typography>
        </Question>

        <Question id="errors" title="Why am I seeing this error message...?">
          <Typography>
            Given the extent of customization available, it&apos;s no surprise something could go wrong. Here&apos;s
            what the current error messages mean:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, '& .MuiListItem-root': { display: 'list-item', p: 0, mb: 1 } }}>
            <ListItem>
              <strong>
                &quot;<em>&lt;template&gt;</em> output was empty&quot;
              </strong>{' '}
              &raquo; The template has no content, or rendered to nothing. There&apos;s nothing to copy in that case.
            </ListItem>
            <ListItem>
              <strong>
                &quot;<em>&lt;template&gt;</em> could not be executed on a restricted tab&quot;
              </strong>
              &raquo; See <Link href="#special-pages">above</Link> &mdash; the current page doesn&apos;t allow
              extensions to run on it.
            </ListItem>
            <ListItem>
              <strong>&quot;Content could not be copied to the system clipboard&quot;</strong> &raquo; The browser
              refused the clipboard write itself. This is rare; if it keeps happening, please{' '}
              <Link href={ISSUE_URL} target="_blank" rel="noopener noreferrer">
                raise an issue
              </Link>
              .
            </ListItem>
            <ListItem>
              <strong>
                &quot;<em>&lt;template&gt;</em> could not be copied&quot;
              </strong>{' '}
              &raquo; A generic fallback for anything unexpected. Please{' '}
              <Link href={ISSUE_URL} target="_blank" rel="noopener noreferrer">
                raise an issue
              </Link>{' '}
              with as much detail as possible so we can investigate.
            </ListItem>
            <ListItem>
              <strong>
                &quot;<em>&lt;shortener&gt;</em> is not fully configured&quot;
              </strong>{' '}
              &raquo; The active URL shortener needs some configuration (e.g. YOURLS) that hasn&apos;t been completed
              yet in settings.
            </ListItem>
            <ListItem>
              <strong>&quot;Cannot shorten an invalid URL&quot;</strong> and{' '}
              <strong>
                &quot;<em>&lt;shortener&gt;</em> returned an unexpected response&quot;
              </strong>{' '}
              &raquo; Something about the request or the shortener&apos;s response wasn&apos;t as expected &mdash;
              usually transient.
            </ListItem>
            <ListItem>
              <strong>
                &quot;<em>&lt;shortener&gt;</em> could not shorten the URL&quot;
              </strong>{' '}
              &raquo; The shortener service itself reported a problem. Try again shortly, or check that service&apos;s
              status.
            </ListItem>
          </List>
        </Question>

        <Question id="updating" title="Why isn't Chrome updating tmplat?">
          <Typography>
            Chrome&apos;s update frequency can be unpredictable. You can force a check via a little-known method:
          </Typography>
          <List sx={{ listStyleType: 'disc', pl: 4, '& .MuiListItem-root': { display: 'list-item', p: 0 } }}>
            <ListItem>
              Open the Extensions page (Menu &rsaquo; Extensions, address bar <code>chrome://extensions</code>, or
              right-click tmplat&apos;s toolbar icon and choose <em>Manage extensions&hellip;</em>)
            </ListItem>
            <ListItem>
              Turn on <em>Developer mode</em> in the top-right corner
            </ListItem>
            <ListItem>
              Click <em>Update</em>
            </ListItem>
          </List>
          <Typography>
            If an update requires new permissions you haven&apos;t already granted, the extension will stay disabled
            until you approve them.
          </Typography>
        </Question>

        <Question id="saving" title="Why aren't my changes being saved?">
          <Typography>
            It depends where you&apos;re editing. Changes to your list of templates (adding, deleting, reordering,
            enabling/disabling, importing) save immediately &mdash; there&apos;s no separate save step. Editing a single
            template&apos;s content does need an explicit <em>Save</em> click in its dialog, which saves and closes in
            one step.
          </Typography>
          <Typography>
            The Settings dialog (general, notifications, appearance, URL shorteners, logging) is the one place that
            still needs an explicit <em>Apply</em> or <em>Save</em> &mdash; if you try to close it with unsaved changes,
            you&apos;ll be prompted to save, discard, or go back.
          </Typography>
        </Question>

        <Question id="url-copy" title={'What happened to "URL Copy"?'}>
          <Typography>
            This extension was originally named <em>URL Copy</em>, then renamed to <em>Template</em> as it grew far
            beyond just that. As of version 2.0.0, it was rebranded again to <em>tmplat</em> &mdash; more unique,
            memorable, and easier to search for.
          </Typography>
        </Question>
      </Stack>
    </PageShell>
  );
}
