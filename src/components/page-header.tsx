import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ReactNode } from 'react';

export function PageHeader({ title, subtitle }: { title: ReactNode; subtitle?: ReactNode }) {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" component="p" color="text.secondary" sx={{ fontWeight: 400 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
