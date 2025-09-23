import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Logistics Email Triage",
    problem: "Multi-location logistics company drowning in customer emails",
    solution: "AI-powered email classification and routing system",
    results: "60% fewer back-and-forth emails, 40% admin time saved",
    href: "/case-studies/logistics-email-triage",
  },
  {
    title: "Clinic Intake Efficiency",
    problem: "Multi-location clinic struggling with manual patient intake",
    solution: "Automated digital forms with EHR integration",
    results: "40% reduction in intake time, 18% fewer no-shows",
    href: "/case-studies/clinic-intake-efficiency",
  },
];

export function CaseStudyTeasers() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {caseStudies.map((study) => (
        <Card
          key={study.title}
          className="neon-border bg-surface/60 hover:bg-surface/80 transition-colors"
        >
          <CardHeader>
            <CardTitle className="font-display text-lg">
              {study.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Problem:
                </p>
                <p className="text-sm">{study.problem}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Solution:
                </p>
                <p className="text-sm">{study.solution}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[var(--accent-1)]">
                  Results:
                </p>
                <p className="text-sm font-medium">{study.results}</p>
              </div>
              <Link
                href={study.href}
                className="inline-flex items-center text-sm text-[var(--accent-1)] hover:text-[var(--accent-2)] transition-colors"
              >
                Read full case study
                <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
