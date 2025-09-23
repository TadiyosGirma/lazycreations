import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/marketing/cta";
import { ProductOfferSeo } from "@/components/seo-product";
import {
  Bot,
  Workflow,
  BarChart3,
  Cpu,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    icon: Bot,
    title: "Support Copilot",
    painPoint:
      "Your support team is drowning in repetitive tickets and back-and-forth emails, leading to slow response times and frustrated customers.",
    description:
      "AI-powered support automation that triages tickets, suggests replies, and reduces handle time while maintaining quality.",
    includes: [
      "Email or helpdesk ticket triage and classification",
      "Intent detection and routing to right team member",
      "Suggested replies based on ticket history and knowledge base",
      "Integration with your existing ticketing system and CRM",
      "Performance analytics and optimization recommendations",
    ],
    timeline: "4-6 weeks",
    results:
      "60% less back-and-forth emails, 28% reduction in average handle time, 12% increase in customer satisfaction",
    prerequisites:
      "Access to your helpdesk/CRM system, sample of past tickets for training",
    cta: "Schedule a demo",
  },
  {
    icon: Workflow,
    title: "Lead → Invoice",
    painPoint:
      "Your sales process is manual and error-prone, with leads getting lost in spreadsheets and invoices taking days to generate.",
    description:
      "Complete automation from lead capture to invoice generation, eliminating manual data entry and accelerating sales cycles.",
    includes: [
      "Custom lead capture forms with validation",
      "Automatic lead enrichment and qualification",
      "CRM integration for contact and opportunity management",
      "Automated follow-up sequences and reminders",
      "Invoice generation and payment processing integration",
    ],
    timeline: "6-8 weeks",
    results:
      "30% faster sales cycles, eliminates manual data entry, 40% reduction in admin time, 25% increase in lead conversion",
    prerequisites:
      "CRM access (HubSpot, Salesforce, or Pipedrive), QuickBooks or accounting system integration",
    cta: "Get a proposal",
  },
  {
    icon: BarChart3,
    title: "Business Dashboards",
    painPoint:
      "You're making decisions based on outdated data and spending hours each week creating reports that should be automatic.",
    description:
      "Real-time business intelligence dashboards that give you instant visibility into your most important metrics without the complexity.",
    includes: [
      "Custom KPI dashboards for your business metrics",
      "Real-time data from CRM, accounting, and operational systems",
      "Automated report generation and distribution",
      "Interactive charts and drill-down capabilities",
      "Mobile-responsive design for on-the-go access",
    ],
    timeline: "3-4 weeks",
    results:
      "50% faster reporting, data-driven decisions, 25% improvement in goal tracking, 2 hours saved per week on manual reporting",
    prerequisites:
      "Access to your data sources (CRM, accounting, etc.), clear definition of key metrics to track",
    cta: "Request a demo",
  },
  {
    icon: Cpu,
    title: "Content Assistant",
    painPoint:
      "Content creation is slow and inconsistent, with your team spending too much time on writing and editing instead of strategy.",
    description:
      "AI-powered content creation platform that streamlines your entire content workflow from brief to publication with brand consistency.",
    includes: [
      "AI-powered writing for blogs, emails, and marketing copy",
      "Brand voice training and consistency checks",
      "Content approval workflows and collaboration tools",
      "Multi-channel publishing and distribution",
      "Performance tracking and optimization suggestions",
    ],
    timeline: "4-5 weeks",
    results:
      "40% faster content production, consistent brand voice, 60% reduction in revision cycles, 3x more content output",
    prerequisites:
      "Brand guidelines and style preferences, sample content for training, approval workflow requirements",
    cta: "See it in action",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <ProductOfferSeo />
      <h1 className="sr-only">Solutions</h1>
      <SectionHeader
        eyebrow="Solutions"
        title="Productized offers that solve real SMB problems"
        subtitle="Each solution addresses a specific pain point with measurable results, clear timelines, and proven ROI."
      />

      <div className="grid gap-8 mt-10">
        {solutions.map((solution) => (
          <Card key={solution.title} className="neon-border bg-surface/60">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[var(--accent-1)]/10 border border-[var(--accent-1)]/20">
                  <solution.icon className="h-6 w-6 text-[var(--accent-1)]" />
                </div>
                <div className="flex-1">
                  <CardTitle className="font-display text-2xl">
                    {solution.title}
                  </CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {solution.timeline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      SMB-focused
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-medium text-[var(--accent-1)] mb-2">
                  The problem we solve:
                </h4>
                <p className="text-muted-foreground">{solution.painPoint}</p>
              </div>

              <div>
                <h4 className="font-medium mb-2">What it does:</h4>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>

              <div>
                <h4 className="font-medium mb-3">What's included:</h4>
                <ul className="space-y-2">
                  {solution.includes.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle className="h-4 w-4 text-[var(--accent-1)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-[var(--accent-1)]/10 rounded-lg border border-[var(--accent-1)]/20">
                  <h4 className="font-medium text-[var(--accent-1)] mb-2">
                    Typical results:
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {solution.results}
                  </p>
                </div>
                <div className="p-4 bg-surface/60 rounded-lg border">
                  <h4 className="font-medium mb-2">What we need from you:</h4>
                  <p className="text-sm text-muted-foreground">
                    {solution.prerequisites}
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <Button asChild>
                  <Link
                    href="/contact"
                    data-cta={`solution-${solution.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {solution.cta}
                  </Link>
                </Button>
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
  title: "Solutions",
  description:
    "Productized offers: Support Copilot, Lead → Invoice, Dashboards, Content Assistant.",
  alternates: { canonical: "/solutions" },
};
