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
}

// Define the navigation data
export const navItems: NavItem[] = [
  { label: 'Why Affina', href: '#' },
  {
    label: 'Solutions',
    // description: 'Explore our innovative solutions.', // Removed top-level description
    children: [
      { title: 'Crowdplay', href: '#', description: '', displayType: 'square' },
      { title: 'Rethink', href: '#', description: '', displayType: 'square' },
    ],
  },
  // Add more top-level items here
]; 