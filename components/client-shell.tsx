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
  { ssr: false, loading: () => null },
);
const AnalyticsClient = dynamic(
  () =>
    import("@vercel/analytics/react").then((m) => ({ default: m.Analytics })),
  { ssr: false, loading: () => null },
);

export function ClientShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SeoDefaultClient />
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
      {/* Defer non-critical clients to idle for perf */}
      <IdleMount>
        <ToasterClient />
        <AnalyticsClient />
      </IdleMount>
    </>
  );
}

function IdleMount({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = require("react").useState(false);
  require("react").useEffect(() => {
    if ("requestIdleCallback" in window) {
      // @ts-expect-error requestIdleCallback exists in browsers
      requestIdleCallback(() => setReady(true));
    } else {
      setTimeout(() => setReady(true), 100);
    }
  }, []);
  if (!ready) return null;
  return <>{children}</>;
}
