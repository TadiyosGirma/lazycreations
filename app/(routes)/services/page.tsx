import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/marketing/cta";

const bands = [
  {
    name: "Strategy",
    price: "$2k–$5k",
    description:
      "1-2 week discovery sprint where we map your current processes, audit your systems, and identify high-ROI automation opportunities.",
    deliverables: [
      "Process mapping & gap analysis",
      "Systems audit & integration assessment",
      "AI readiness evaluation",
      "ROI-focused automation roadmap",
      "Budget & timeline recommendations",
    ],
    results:
      "Clear roadmap tailored to SMB budgets and timelines, with 3-5 high-impact opportunities identified.",
    duration: "1-2 weeks",
  },
  {
    name: "Implementation",
    price: "$8k–$35k",
    description:
      "We build custom websites, AI copilots, lead-to-invoice automations, or dashboards, integrating them with your existing tools (CRM, QuickBooks, helpdesk).",
    deliverables: [
      "Custom website or web application",
      "AI copilots for support/sales",
      "Lead-to-invoice automation workflows",
      "Real-time business dashboards",
      "CRM/QuickBooks/helpdesk integrations",
    ],
    results:
      "Prototypes delivered in weeks. Typical results include 30-40% time savings and 25% faster processes.",
    duration: "4-8 weeks",
  },
  {
    name: "Enablement",
    price: "$3k–$10k",
    description:
      "We train your team, create prompt libraries and SOPs, and manage change so adoption sticks and your investment pays off.",
    deliverables: [
      "Team training & workshops",
      "Prompt libraries & best practices",
      "Standard operating procedures",
      "Change management support",
      "Success metrics & monitoring",
    ],
    results:
      "Ensures your team adopts new tools effectively, maximizing ROI and reducing resistance to change.",
    duration: "2-4 weeks",
  },
  {
    name: "Managed",
    price: "$2k+/mo",
    description:
      "Ongoing support, monitoring, and iteration: we handle updates, model tuning, and feature rollouts so SMBs don't need an in-house data science team.",
    deliverables: [
      "24/7 monitoring & maintenance",
      "Performance optimization",
      "Feature updates & enhancements",
      "Model tuning & improvements",
      "Monthly reporting & insights",
    ],
    results:
      "Continuous improvement and peace of mind, with systems that evolve with your business needs.",
    duration: "Ongoing",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Services</h1>
      <SectionHeader
        eyebrow="Services"
        title="Strategy → Implementation → Enablement → Managed"
        subtitle="Four engagement lanes designed for SMB needs, budgets, and timelines."
      />

      <div className="mt-8 p-6 glass rounded-xl border border-[var(--accent-1)]/20">
        <p className="text-center text-muted-foreground">
          <strong className="text-foreground">
            Not sure which lane is right for you?
          </strong>{" "}
          We help clients choose based on budget, timeline, and appetite for
          innovation. Start with a free consultation to map your path forward.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {bands.map((b) => (
          <Card key={b.name} className="neon-border bg-surface/60">
            <CardHeader>
              <CardTitle className="font-display flex items-center justify-between">
                {b.name}
                <span className="text-sm text-[var(--accent-1)] font-medium">
                  {b.price}
                </span>
              </CardTitle>
              <div className="text-sm text-muted-foreground">
                Duration: {b.duration}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{b.description}</p>

              <div>
                <h4 className="text-sm font-medium mb-2">
                  What&apos;s included:
                </h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {b.deliverables.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-[var(--accent-1)] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-[var(--accent-1)]/10 rounded-lg border border-[var(--accent-1)]/20">
                <h4 className="text-sm font-medium text-[var(--accent-1)] mb-1">
                  Typical results:
                </h4>
                <p className="text-sm text-muted-foreground">{b.results}</p>
              </div>
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
