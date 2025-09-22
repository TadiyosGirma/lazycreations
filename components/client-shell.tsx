"use client";

import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
    </>
  );
}
