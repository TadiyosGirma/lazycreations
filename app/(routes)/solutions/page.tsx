import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { FeatureBlocks } from "@/components/marketing/features";
import { CTA } from "@/components/marketing/cta";
import { ProductOfferSeo } from "@/components/seo-product";

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <ProductOfferSeo />
      <SectionHeader
        eyebrow="Solutions"
        title="Productized offers"
        subtitle="Support Copilot, Lead → Invoice, Dashboards, Content Assistant."
      />
      <FeatureBlocks />
      <CTA className="mt-16" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Productized offers: Support Copilot, Lead → Invoice, Dashboards, Content Assistant.",
  alternates: { canonical: "/solutions" },
};
