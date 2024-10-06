'use client';
import { ChevronsDown, Menu } from 'lucide-react';
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Separator } from '../ui/separator';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Button } from '../ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logoBlack from '@/public/logo-black.png';
import logoWhite from '@/public/logo-white.png';
import { ToggleTheme } from './toogle-theme';
import { useTheme } from 'next-themes';

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  {
    href: '#testimonials',
    label: 'Projects',
  },
  /* {
    href: '#team',
    label: 'Team',
  }, */
  {
    href: '#contact',
    label: 'Contact',
  },
  {
    href: '#faq',
    label: 'FAQ',
  },
];

const featureList: FeatureProps[] = [
  {
    title: 'Commercial',
    description:
      'From control systems troubleshooting to automations & controls, Meter Electric provides tailored solutions for every industry.',
  },
  {
    title: 'Residential',
    description:
      'Top-quality residential services, from EV charger installations to emergency generators, meter service upgrades, panel replacements, and more.',
  },
  {
    title: 'Industrial',
    description:
      'From control systems troubleshooting to automations & controls, Meter Electric provides tailored solutions for every industry.',
  },
];

export const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        {/* <Image src={logoBlack} alt="Official Logo" width={350} height={350} /> */}
        <Image
          width={350}
          height={350}
          src={theme === 'light' ? logoBlack : logoWhite}
          alt="official logo"
        />
      </Link>
      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu onClick={() => setIsOpen(!isOpen)} className="cursor-pointer lg:hidden" />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary">
            <div>
              <SheetHeader className="mb-4 ml-4">
                <Image
                  width={350}
                  height={350}
                  src={theme === 'light' ? logoBlack : logoWhite}
                  alt="official logo"
                />
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base">
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="/services-small.jpg"
                  alt="Logo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />

                <ul className="flex flex-col gap-2">
                  {featureList.map(({ title, description }) => (
                    <li key={title} className="rounded-md p-3 text-sm hover:bg-muted">
                      <p className="mb-1 font-semibold leading-none text-foreground">{title}</p>
                      <p className="line-clamp-2 text-muted-foreground">{description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />

        {/* <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
          <Link
            aria-label="View on GitHub"
            href="https://github.com/nobruf/shadcn-landing-page.git"
            target="_blank">
            <Github className="size-5" />
          </Link>
        </Button> */}
      </div>
    </header>
  );
};
