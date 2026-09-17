import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { PageHeader } from '../components/page-header';
import { PageShell } from '../components/page-shell';

const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/faq', label: 'Frequently Asked Questions' },
  { href: '/permissions', label: 'Permissions' },
  { href: '/changes', label: 'Changelog' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/license', label: 'License' },
];

export function Sitemap() {
  return (
    <PageShell>
      <PageHeader title="Sitemap" subtitle="Lost your way?" />
      <List sx={{ listStyleType: 'disc', pl: 4, '& .MuiListItem-root': { display: 'list-item', p: 0.5 } }}>
        {PAGES.map((page) => (
          <ListItem key={page.href}>
            <Link href={page.href}>{page.label}</Link>
          </ListItem>
        ))}
      </List>
    </PageShell>
  );
}
