// Define the structure for navigation items
export interface NavItem {
  label: string;
  href?: string;
  children?: SubNavItem[];
  description?: string; // Optional description for main dropdown link
}

export interface SubNavItem {
  title: string;
  href: string;
  description: string;
}

// Define the navigation data
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  {
    label: 'About',
    description: 'Placeholder text about the project.',
    children: [
      { title: 'Team', href: '#', description: 'Information about the team.' },
      { title: 'Contact', href: '#', description: 'How to get in touch.' },
      { title: 'Mission', href: '#', description: 'Our project goals.' },
    ],
  },
  // Add more top-level items here
]; 