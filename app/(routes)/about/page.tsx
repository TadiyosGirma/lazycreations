import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { CTA } from "@/components/marketing/cta";

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <SectionHeader
        eyebrow="About"
        title="Mission & values"
        subtitle="We ship reliable software and AI that move KPIs, not slide decks."
      />
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-xl mb-2">Differentiators</h3>
          <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-5">
            <li>Engineer-led conversations</li>
            <li>ROI-first scoping</li>
            <li>Managed post-launch iteration</li>
          </ul>
        </div>
        <div className="glass rounded-xl p-6">
          <h3 className="font-display text-xl mb-2">Team & values</h3>
          <ul className="text-muted-foreground text-sm space-y-1 list-disc pl-5">
            <li>Bias for simplicity</li>
            <li>Accessible by default</li>
            <li>Measurable outcomes</li>
          </ul>
        </div>
      </div>
      <CTA className="mt-16" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Mission, differentiators, values. Talk to an engineer.",
  alternates: { canonical: "/about" },
};
