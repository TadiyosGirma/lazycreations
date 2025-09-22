"use client";

import { SiteHeader } from "@/components/site-header";
import { PageTransition } from "@/components/page-transition";
import { SiteFooter } from "@/components/site-footer";
import dynamic from "next/dynamic";

const SeoDefaultClient = dynamic(
  () =>
    import("@/components/seo-default").then((m) => ({ default: m.SeoDefault })),
  { ssr: false },
);
const ToasterClient = dynamic(
  () => import("@/components/ui/sonner").then((m) => ({ default: m.Toaster })),
  { ssr: false },
);
const AnalyticsClient = dynamic(
  () =>
    import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })),
  { ssr: false },
);

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoDefaultClient />
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
      <ToasterClient />
      <AnalyticsClient />
    </>
  );
}
