import React from 'react';
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
  description: React.ReactNode; // Changed from string to React.ReactNode
  displayType?: 'square'; // Added for custom styling
  logoSrc?: string; // Added for logo path
}

// Define the navigation data
export const navItems: NavItem[] = [
  {
    label: 'Solutions',
    // description: 'Explore our innovative solutions.', // Removed top-level description
    children: [
      { title: 'Crowdplay', href: '#', description: <>Loyalty Platforms Built for Your Team. <span className="text-primary">Powered by Fan Engagement</span>.</>, displayType: 'square', logoSrc: '/crowdplayLogo.svg' },
      { title: 'Rethink', href: '#', description: <>Merchant-Funded Rewards. <span className="text-pink">Built to Power Your Brand</span>.</>, displayType: 'square', logoSrc: '/rethinkLogo.svg' },
    ],
  },
  // Add more top-level items here
]; 