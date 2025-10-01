import { MotionHero } from "@/components/hero";
import dynamic from "next/dynamic";
import { CTA } from "@/components/marketing/cta";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { CaseStudyTeasers } from "@/components/marketing/case-study-teasers";
import { Clock, TrendingUp, BarChart2, PenLine } from "lucide-react";
const FeatureBlocks = dynamic(
  () =>
    import("@/components/marketing/features").then((m) => ({
      default: m.FeatureBlocks,
    })),
  { ssr: true },
);
const Metrics = dynamic(
  () =>
    import("@/components/marketing/metrics").then((m) => ({
      default: m.Metrics,
    })),
  { ssr: true },
);
// const Testimonial = dynamic(
//   () =>
//     import("@/components/marketing/testimonial").then((m) => ({
//       default: m.Testimonial,
//     })),
//   { ssr: true },
// );
import { SectionHeader } from "@/components/section-header";

export default function Home() {
  return (
    <div className="min-h-[100svh]">
      <MotionHero />
      <main id="content" role="main" className="container mx-auto px-6 md:px-8">
        <LogoCloud className="mt-16 mb-8" />
        <SectionHeader
          eyebrow="Solutions"
          title="Build. Automate. Scale."
          subtitle="From strategy to managed AI, we deliver measurable impact."
          className="mt-12"
        />
        <FeatureBlocks />
        <Metrics />
        <SectionHeader
          eyebrow="What You Can Expect"
          title="Customers win time back"
          subtitle="Clinics, logistics, and e‑commerce teams reclaim 10+ hours weekly."
          className="mt-16"
        />
        <div className="grid md:grid-cols-2 gap-6 mt-6 mb-12">
          <div className="glass rounded-xl p-6 flex items-start gap-4">
            <Clock
              className="h-6 w-6 text-cyan-400"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))" }}
              aria-hidden
            />
            <p className="text-muted-foreground">
              Save 5–10 hours per week by automating repetitive tasks across
              support, sales, and reporting. Shift time to higher‑value work
              without growing headcount.
            </p>
          </div>
          <div className="glass rounded-xl p-6 flex items-start gap-4">
            <TrendingUp
              className="h-6 w-6 text-violet-400"
              style={{ filter: "drop-shadow(0 0 10px rgba(139,92,246,0.45))" }}
              aria-hidden
            />
            <p className="text-muted-foreground">
              Speed up sales cycles with consistent follow‑ups, lead
              qualification, and CRM hygiene—improving win rates while reducing
              manual data entry.
            </p>
          </div>
          <div className="glass rounded-xl p-6 flex items-start gap-4">
            <BarChart2
              className="h-6 w-6 text-sky-400"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))" }}
              aria-hidden
            />
            <p className="text-muted-foreground">
              Make faster, better decisions with live dashboards showing
              pipeline, revenue, and operational KPIs—no spreadsheet wrangling
              required.
            </p>
          </div>
          <div className="glass rounded-xl p-6 flex items-start gap-4">
            <PenLine
              className="h-6 w-6 text-cyan-400"
              style={{ filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))" }}
              aria-hidden
            />
            <p className="text-muted-foreground">
              Publish consistent, on‑brand content faster with AI‑assisted
              drafts and a lightweight review process—reducing revision cycles.
            </p>
          </div>
        </div>
        <CaseStudyTeasers />
        {/** <Testimonial /> */}
        <CTA className="my-24" />
      </main>
    </div>
  );
}
