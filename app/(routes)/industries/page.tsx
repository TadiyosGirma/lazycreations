import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/marketing/cta";
import { CheckCircle, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "Professional Services",
    description:
      "Law firms, accounting practices, consulting agencies, and other service-based businesses",
    painPoints: [
      "Manual client intake processes that take hours to complete",
      "Leads falling through the cracks due to poor follow-up systems",
      "Proposal creation taking days instead of hours",
      "Time tracking and billing inconsistencies",
      "Difficulty scaling without adding overhead",
    ],
    solutions: [
      "Automated client intake forms with document collection",
      "Lead qualification and routing workflows",
      "AI-powered proposal generation from templates",
      "Time tracking integration with billing systems",
      "Client portal for self-service and communication",
    ],
    kpis: [
      "Time to first meeting: down 30%",
      "Proposal turnaround: down 50%",
      "Client onboarding time: down 40%",
      "Billing accuracy: up 25%",
      "Revenue per employee: up 20%",
    ],
    caseStudy:
      "A 15-person law firm reduced proposal creation time from 8 hours to 2 hours using our automated proposal system, while increasing win rates by 18%.",
  },
  {
    name: "Healthcare Clinics",
    description:
      "Medical practices, dental offices, veterinary clinics, and other healthcare providers",
    painPoints: [
      "Paper-based patient intake causing delays and errors",
      "Manual scheduling leading to no-shows and double-bookings",
      "EHR integration challenges and data silos",
      "Staff spending too much time on administrative tasks",
      "Patient communication gaps and missed appointments",
    ],
    solutions: [
      "Digital patient intake forms with EHR integration",
      "Automated appointment scheduling and reminders",
      "AI-powered patient communication and triage",
      "Real-time dashboard for patient flow and wait times",
      "Automated insurance verification and billing",
    ],
    kpis: [
      "Admin time: down 40%",
      "No-shows: down 18%",
      "Patient wait time: down 25%",
      "Error rates: down 70%",
      "Patient satisfaction: up 15%",
    ],
    caseStudy:
      "A multi-location clinic chain automated their patient intake process, reducing administrative time by 40% and improving patient satisfaction scores by 15%.",
  },
  {
    name: "Real Estate & Construction",
    description:
      "Real estate agencies, construction companies, property management firms, and contractors",
    painPoints: [
      "Overwhelming volume of client emails and inquiries",
      "Manual scheduling conflicts and missed appointments",
      "Change order management and approval delays",
      "Lead qualification and follow-up inefficiencies",
      "Project tracking and client communication gaps",
    ],
    solutions: [
      "AI-powered email triage and response suggestions",
      "Automated scheduling with conflict detection",
      "Digital change order workflows with approvals",
      "Lead scoring and automated follow-up sequences",
      "Project dashboards with real-time client updates",
    ],
    kpis: [
      "Time to quote: down 35%",
      "Close time: down 25%",
      "Error rates: down 60%",
      "Lead response time: down 50%",
      "Client retention: up 22%",
    ],
    caseStudy:
      "A construction company automated their change order process, reducing approval time from 5 days to 1 day while eliminating 90% of errors.",
  },
  {
    name: "E-commerce & Retail",
    description:
      "Online retailers, brick-and-mortar stores, and omnichannel businesses",
    painPoints: [
      "Customer support tickets overwhelming small teams",
      "Manual inventory updates and catalog management",
      "Returns processing taking too much time",
      "Customer data scattered across multiple systems",
      "Difficulty personalizing customer experiences",
    ],
    solutions: [
      "AI-powered customer support with ticket triage",
      "Automated inventory management and catalog updates",
      "Streamlined returns processing with tracking",
      "Unified customer data platform",
      "Personalized product recommendations and marketing",
    ],
    kpis: [
      "Average order value: up 18%",
      "Support handle time: down 30%",
      "Return processing time: down 45%",
      "Customer satisfaction: up 20%",
      "Inventory accuracy: up 35%",
    ],
    caseStudy:
      "An online retailer implemented AI-powered customer support, reducing average handle time by 30% while increasing customer satisfaction by 20%.",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Industries</h1>
      <SectionHeader
        eyebrow="Industries"
        title="Industry-specific solutions for SMBs"
        subtitle="We understand the unique challenges each industry faces and deliver solutions that address real pain points with measurable results."
      />

      <div className="space-y-12 mt-10">
        {industries.map((industry) => (
          <Card key={industry.name} className="neon-border bg-surface/60">
            <CardHeader>
              <CardTitle className="font-display text-2xl">
                {industry.name}
              </CardTitle>
              <p className="text-muted-foreground">{industry.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-[var(--accent-1)] mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Common Pain Points
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {industry.painPoints.map((pain, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-red-400 mt-1">•</span>
                        {pain}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-[var(--accent-2)] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Our Solutions
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {industry.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[var(--accent-2)] mt-1">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-green-400 mb-3 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Typical Results
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {industry.kpis.map((kpi, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">•</span>
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end">
                <Button asChild>
                  <Link
                    href="/contact"
                    data-cta={`industry-${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    Get industry-specific consultation
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
  title: "Industries",
  description:
    "Professional services, clinics, real estate/construction, e‑commerce — pains → KPIs.",
  alternates: { canonical: "/industries" },
};
