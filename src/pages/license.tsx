import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

export function License() {
  return (
    <PageShell>
      <PageHeader title="License" subtitle="You may use any tmplat project under the terms of the MIT License" />
      <Stack spacing={2} color="text.secondary">
        <Typography>
          The MIT License is simple and easy to understand, and it places almost no restrictions on what you can do with
          a tmplat project.
        </Typography>
        <Typography>
          You are free to use a tmplat project in commercial projects as long as the copyright header is left intact.
        </Typography>
        <Typography>
          <Link
            href="https://github.com/tmplat-extension/tmplat/blob/main/LICENSE.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </Link>{' '}
          (
          <Link href="https://en.wikipedia.org/wiki/MIT_License" target="_blank" rel="noopener noreferrer">
            more information
          </Link>
          )
        </Typography>
      </Stack>
    </PageShell>
  );
}
