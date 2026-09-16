import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

const CHANGELOG_URL = 'https://github.com/tmplat-extension/tmplat/blob/main/CHANGELOG.md';

export function Changes() {
  return (
    <PageShell>
      <PageHeader title="Changelog" />
      <Stack spacing={3} sx={{ alignItems: 'flex-start' }}>
        <Typography color="text.secondary">
          The changelog is generated directly from tmplat&apos;s release history and lives alongside the source code on
          GitHub, so it&apos;s always up to date.
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<OpenInNewIcon />}
          href={CHANGELOG_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the Changelog on GitHub
        </Button>
      </Stack>
    </PageShell>
  );
}
