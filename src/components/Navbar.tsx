import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <NavigationMenu.Root>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/">
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/components">
              Components
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            About{' '}
            <ChevronDown
              aria-hidden
              size={16}
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <ul>
              <li>
                <NavigationMenu.Link asChild>
                  <a>
                    <div>Affina Project</div>
                    <p>Placeholder text about the project.</p>
                  </a>
                </NavigationMenu.Link>
              </li>

              <ListItem href="#" title="Team">
                Information about the team.
              </ListItem>
              <ListItem href="#" title="Contact">
                How to get in touch.
              </ListItem>
              <ListItem href="#" title="Mission">
                Our project goals.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator>
          <div></div>
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div>
        <NavigationMenu.Viewport />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef<HTMLAnchorElement, { className?: string, children: React.ReactNode, title: string, href: string }>
  (({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a {...props} ref={forwardedRef}>
          <div>{title}</div>
          <p>{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  ));
ListItem.displayName = "ListItem";

export default Navbar; 