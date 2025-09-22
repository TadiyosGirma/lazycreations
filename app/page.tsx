import { MotionHero } from "@/components/hero";
import { CTA } from "@/components/marketing/cta";
import { LogoCloud } from "@/components/marketing/logo-cloud";
import { FeatureBlocks } from "@/components/marketing/features";
import { Metrics } from "@/components/marketing/metrics";
import { Testimonial } from "@/components/marketing/testimonial";
import { SectionHeader } from "@/components/section-header";

export default function Home() {
  return (
    <div className="min-h-[100svh]">
      <MotionHero />
      <main className="container mx-auto px-6 md:px-8">
        <LogoCloud className="mt-16" />
        <SectionHeader
          eyebrow="Solutions"
          title="Build. Automate. Scale."
          subtitle="From strategy to managed AI, we deliver measurable impact.
"
        />
        <FeatureBlocks />
        <Metrics />
        <SectionHeader
          eyebrow="Proof"
          title="Customers win time back"
          subtitle="Clinics, logistics, and e‑commerce teams reclaim 10+ hours weekly."
        />
        <Testimonial />
        <CTA className="my-24" />
      </main>
    </div>
  );
}
