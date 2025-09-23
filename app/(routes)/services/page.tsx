import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/marketing/cta";

const bands = [
  {
    name: "Strategy",
    price: "$2k–$5k",
    items: ["Discovery sprint", "Systems audit", "AI roadmap"],
  },
  {
    name: "Implementation",
    price: "$8k–$35k",
    items: ["Automations", "Copilots", "Dashboards"],
  },
  {
    name: "Enablement",
    price: "$3k–$10k",
    items: ["Training", "Playbooks", "Change mgmt"],
  },
  {
    name: "Managed",
    price: "$2k+/mo",
    items: ["SLAs", "Monitoring", "Iteration"],
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Services</h1>
      <SectionHeader
        eyebrow="Services"
        title="Strategy → Implementation → Enablement → Managed"
        subtitle="Pick the lane that matches your risk and speed."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {bands.map((b) => (
          <Card key={b.name} className="neon-border">
            <CardHeader>
              <CardTitle className="font-display flex items-center justify-between">
                {b.name}
                <span className="text-sm text-muted-foreground font-normal">
                  {b.price}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {b.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      <CTA className="mt-16" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy → Implementation → Enablement → Managed. Pricing bands for SMBs.",
  alternates: { canonical: "/services" },
};
