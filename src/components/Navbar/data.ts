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
  { label: 'Why Affina', href: '#' },
  {
    label: 'Solutions',
    description: 'Explore our innovative solutions.',
    children: [
      { title: 'Solution One', href: '#', description: 'Description for solution one.' },
      { title: 'Solution Two', href: '#', description: 'Description for solution two.' },
    ],
  },
  { label: 'Company', href: '#' },
  // Add more top-level items here
]; 