import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export function SiteFooter() {
  return (
    <Box component="footer" sx={{ borderTop: 1, borderColor: 'divider', py: 4, mt: 8 }}>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ justifyContent: 'space-between', alignItems: { sm: 'center' } }}
        >
          <Typography variant="body2" color="text.secondary">
            &copy; tmplat
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="/license" variant="body2" color="text.secondary" underline="hover">
              License
            </Link>
            <Link href="/sitemap" variant="body2" color="text.secondary" underline="hover">
              Sitemap
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
