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
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/blog", label: "AI Adoption Blog" },
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
        <div className="flex items-center gap-2">
          <nav className="hidden md:block" aria-label="Primary">
            <NavigationMenu>
              <NavigationMenuList>
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <NavigationMenuItem key={l.href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={l.href}
                          prefetch={false}
                          aria-current={active ? "page" : undefined}
                          className={`px-4 py-2 rounded-md transition-colors ${active ? "text-[var(--accent-1)]" : "text-muted-foreground hover:text-foreground"}`}
                        >
                          {l.label}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  data-cta="mobile-menu-open"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                id="mobile-menu"
                className="border-r border-border/50"
              >
                <nav aria-label="Mobile primary">
                  <ul className="p-4 space-y-1">
                    {links.map((l) => {
                      const active = pathname === l.href;
                      return (
                        <li key={l.href}>
                          <SheetClose asChild>
                            <Link
                              href={l.href}
                              aria-current={active ? "page" : undefined}
                              className={`block px-3 py-2 rounded-md transition-colors ${active ? "text-[var(--accent-1)]" : "text-muted-foreground hover:text-foreground hover:bg-surface/60"}`}
                            >
                              {l.label}
                            </Link>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="mt-auto p-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full">
                      <Link
                        href="/contact"
                        prefetch={false}
                        data-cta="mobile-header-cta"
                      >
                        Contact
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          <Button
            asChild
            size="sm"
            className="accent-glow hidden md:inline-flex"
          >
            <Link href="/contact" prefetch={false} data-cta="header-cta">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
