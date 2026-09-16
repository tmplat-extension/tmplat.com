import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

export function NotFound() {
  return (
    <PageShell>
      <PageHeader title="404" subtitle="Page not found" />
      <Stack spacing={2} color="text.secondary">
        <Typography>The requested page could not be found, but may be available again in the future.</Typography>
        <Typography>Sorry for any inconvenience caused.</Typography>
      </Stack>
    </PageShell>
  );
}
