import Link from "next/link";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/marketing/cta";
// import { listMdx } from "@/lib/mdx";
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react";

export default function Page() {
  // const posts = listMdx("case-studies");

  const caseStudySummaries = [
    {
      title: "Logistics Email Triage",
      problem: "Multi-location logistics company drowning in customer emails",
      solution: "AI-powered email classification and routing system",
      impact: "60% fewer back-and-forth emails, 40% admin time saved",
      href: "/case-studies/logistics-email-triage",
    },
    {
      title: "Clinic Intake Efficiency",
      problem: "Multi-location clinic struggling with manual patient intake",
      solution: "Automated digital forms with EHR integration",
      impact: "40% reduction in intake time, 18% fewer no-shows",
      href: "/case-studies/clinic-intake-efficiency",
    },
  ];

  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Case studies</h1>
      <SectionHeader
        eyebrow="Case studies"
        title="Real impact for real SMBs"
        subtitle="See how we've helped small and mid-sized businesses save time, reduce errors, and boost revenue with measurable results."
      />

      <div className="mt-8 p-6 glass rounded-xl border border-[var(--accent-1)]/20">
        <p className="text-center text-muted-foreground">
          <strong className="text-foreground">Why case studies matter:</strong>{" "}
          Every SMB faces unique challenges, but the patterns are similar. Our
          case studies show you exactly how we&apos;ve solved problems like
          yours, with real metrics and measurable outcomes. No fluff, just
          results.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {caseStudySummaries.map((study) => (
          <Card
            key={study.title}
            className="neon-border bg-surface/60 hover:bg-surface/80 transition-colors"
          >
            <CardHeader>
              <CardTitle className="font-display text-xl">
                {study.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-1)] mb-1">
                  Problem:
                </h4>
                <p className="text-sm text-muted-foreground">{study.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-[var(--accent-2)] mb-1">
                  Solution:
                </h4>
                <p className="text-sm text-muted-foreground">
                  {study.solution}
                </p>
              </div>
              <div className="p-3 bg-[var(--accent-1)]/10 rounded-lg border border-[var(--accent-1)]/20">
                <h4 className="text-sm font-medium text-[var(--accent-1)] mb-1">
                  Impact:
                </h4>
                <p className="text-sm font-medium">{study.impact}</p>
              </div>
              <Button asChild className="w-full">
                <Link
                  href={study.href}
                  data-cta={`case-study-${study.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Read full case study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 glass rounded-xl">
        <h3 className="font-display text-xl font-semibold mb-4">
          What you&apos;ll find in each case study:
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Users className="h-4 w-4 text-[var(--accent-1)]" />
              Business Context
            </h4>
            <p className="text-sm text-muted-foreground">
              Who the client was, their industry, size, and the specific
              challenges they faced that led them to seek our help.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4 text-[var(--accent-2)]" />
              Constraints & Requirements
            </h4>
            <p className="text-sm text-muted-foreground">
              Technical limitations, compliance requirements, budget
              constraints, and timeline pressures we had to work within.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-400" />
              Measurable Impact
            </h4>
            <p className="text-sm text-muted-foreground">
              Specific metrics showing time saved, errors reduced, revenue
              increased, and other quantifiable improvements.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-[var(--accent-1)]" />
              Implementation Details
            </h4>
            <p className="text-sm text-muted-foreground">
              How we built the solution, what tools we used, and how we ensured
              smooth adoption by the client&apos;s team.
            </p>
          </div>
        </div>
      </div>

      <CTA className="mt-16" />
    </div>
  );
}
