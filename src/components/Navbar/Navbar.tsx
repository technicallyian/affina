'use client';

import React, { useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from './data';
import { motion, AnimatePresence } from 'motion/react';

const navigationMenuTriggerStyle = cn(
  'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50',
  'text-[#404f63]',
  'text-lg font-semibold leading-6 tracking-tight'
);

const MotionViewport = motion(NavigationMenu.Viewport);

const Navbar = () => {
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [activeMenuValue, setActiveMenuValue] = useState<string | undefined>(undefined);

  return (
    <>
      <NavigationMenu.Root 
        className="relative z-50 bg-white/10 border border-white rounded-full p-2"
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}
        onValueChange={setActiveMenuValue}
        delayDuration={0}
      >
        <NavigationMenu.List className="flex items-center gap-4 list-none m-0 p-1">
          {navItems.map((item) => (
            <NavigationMenu.Item key={item.label} value={item.children ? item.label : undefined}>
              {item.href ? (
                <NavigationMenu.Link asChild className={navigationMenuTriggerStyle}>
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              ) : (
                <>
                  <NavigationMenu.Trigger className={cn(navigationMenuTriggerStyle, 'flex items-center gap-1')}>
                    {item.label}
                    <ChevronDown
                      className="relative top-[1px] ml-1 h-6 w-6 transition duration-200 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute top-0 left-0">
                    <ul className={cn(
                      "grid gap-3 p-4 w-full md:w-[400px] lg:w-[500px]",
                      item.description ? "lg:grid-cols-[.75fr_1fr]" : "grid-cols-2"
                    )}>
                      {item.description && (
                        <li className="row-span-3">
                          <NavigationMenu.Link asChild>
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mt-4 mb-2 text-lg font-medium">
                                Affina Project
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      )}
                      {item.children?.map((child) => (
                        <ListItem 
                          key={child.title} 
                          href={child.href} 
                          title={child.title} 
                          displayType={child.displayType}
                          logoSrc={child.logoSrc}
                        >
                          {child.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </>
              )}
            </NavigationMenu.Item>
          ))}

          <NavigationMenu.Indicator className="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute top-full left-1/2 -translate-x-1/2 flex justify-center pointer-events-none">
          <AnimatePresence>
            {activeMenuValue && (
              <MotionViewport
                className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-3xl bg-white shadow-lg pointer-events-auto"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                forceMount
              />
            )}
          </AnimatePresence>
        </div>
      </NavigationMenu.Root>

      <div 
        className={cn(
          "fixed inset-0 h-screen w-screen backdrop-blur-md z-40 transition-opacity duration-300 ease-in-out",
          isNavbarHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden="true" 
      />
    </>
  );
};

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  children: React.ReactNode;
  title: string;
  href: string;
  displayType?: 'square';
  logoSrc?: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, href, displayType, logoSrc, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        href={href}
        className={cn(
          'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
          displayType === 'square' && 'aspect-square flex flex-col items-center justify-center text-center bg-primary-dark text-white hover:bg-primary-dark/90 focus:bg-primary-dark/90 rounded-3xl',
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {displayType === 'square' && logoSrc && (
          <img src={logoSrc} alt={`${title} logo`} className="w-3/4 object-contain" />
        )}
        {displayType !== 'square' && <div className="text-sm font-medium leading-none">{title}</div>}
        {children && <p className="text-base leading-snug text-muted-foreground h-20 pt-5 font-semibold">{children}</p>}
      </a>
    </NavigationMenu.Link>
  </li>
));
ListItem.displayName = 'ListItem';

export default Navbar; 