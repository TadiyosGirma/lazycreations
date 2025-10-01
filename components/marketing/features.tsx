import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  Bot,
  BarChart3,
  Workflow,
  Compass,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Support Copilot",
    body: "Integrates with your CRM and helpdesk to automatically triage tickets, classify intent, and suggest replies. Typical results: 30% reduction in average handle time, 60% fewer back-and-forth emails, and 22% increase in customer satisfaction. Delivered in 4-6 weeks.",
  },
  {
    icon: Workflow,
    title: "Lead → Invoice",
    body: "Automates your entire sales process from lead capture to invoice generation. Captures leads via forms, enriches with CRM data, qualifies prospects, and triggers follow-ups. Typical results: 30% faster sales cycles, eliminates manual data entry, and 40% reduction in admin time. Integrates with QuickBooks, HubSpot, and Salesforce.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    body: "Real-time visibility into your business metrics without the complexity. Tracks pipeline health, revenue trends, operational KPIs, and team performance in one clean interface. Typical results: 50% faster reporting, data-driven decisions, and 25% improvement in goal tracking. Connects to your existing tools automatically.",
  },
  {
    icon: Cpu,
    title: "Content Assistant",
    body: "Streamlines content creation from brief to publication with AI-powered writing, brand compliance checks, and approval workflows. Typical results: 40% faster content production, consistent brand voice, and 60% reduction in revision cycles. Includes templates, style guides, and multi-channel publishing.",
  },
  {
    icon: Compass,
    title: "AI Readiness & Roadmap",
    body: "Assess processes, data, and tooling to identify high-ROI AI use cases. Deliver a phased adoption plan with risk controls, stack recommendations, and a 90-day execution map. Typical results: clarity on 3–5 pilots, 2-week assessment with quick wins.",
  },
  {
    icon: GraduationCap,
    title: "AI Skills Training & Workshops",
    body: "Hands-on enablement for teams: prompt engineering, workflow design, QA guardrails, and ethical usage. Typical results: faster adoption, consistent outputs, and 5–10 hours saved weekly across functions.",
  },
];

export function FeatureBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {features.map((f) => (
        <Card key={f.title} className="neon-border bg-surface/60">
          <CardHeader>
            <div className="flex items-center gap-4">
              <f.icon
                className="h-12 w-12 text-cyan-400"
                style={{ filter: "drop-shadow(0 0 10px rgba(0,229,255,0.45))" }}
                aria-hidden
              />
              <CardTitle className="font-display text-xl md:text-2xl">
                {f.title}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{f.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
