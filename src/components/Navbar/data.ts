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
  displayType?: 'square'; // Added for custom styling
  logoSrc?: string; // Added for logo path
}

// Define the navigation data
export const navItems: NavItem[] = [
  {
    label: 'Solutions',
    // description: 'Explore our innovative solutions.', // Removed top-level description
    children: [
      { title: 'Crowdplay', href: '#', description: '', displayType: 'square', logoSrc: '/crowdplayLogo.svg' },
      { title: 'Rethink', href: '#', description: '', displayType: 'square', logoSrc: '/rethinkLogo.svg' },
    ],
  },
  // Add more top-level items here
]; 