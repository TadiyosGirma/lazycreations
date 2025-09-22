"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/50">
      <div className="container mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-orbitron text-xl tracking-wide">
          LAZY CREATIONS
        </Link>
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((l) => (
                <NavigationMenuItem key={l.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={l.href}
                      className={`px-3 py-1 rounded-md transition-colors ${pathname === l.href ? "text-[var(--accent-1)]" : "text-muted-foreground hover:text-foreground"}`}
                    >
                      {l.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <Button asChild size="sm" className="accent-glow">
          <Link href="/contact" data-cta="header-cta">
            Contact
          </Link>
        </Button>
      </div>
    </header>
  );
}
