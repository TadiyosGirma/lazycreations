import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Bot, BarChart3, Workflow } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Support Copilot",
    body: "AI triage + suggested replies reduce handle time and escalations.",
  },
  {
    icon: Workflow,
    title: "Lead → Invoice",
    body: "From form to invoice with enrichment, qualification, and follow-ups.",
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    body: "Pipeline, revenue, and ops metrics in one clean view.",
  },
  {
    icon: Cpu,
    title: "Content Assistant",
    body: "Brief to publish with approvals and brand controls.",
  },
];

export function FeatureBlocks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
      {features.map((f) => (
        <Card key={f.title} className="neon-border bg-surface/60">
          <CardHeader>
            <div className="flex items-center gap-3">
              <f.icon className="text-[var(--accent-2)]" />
              <CardTitle className="font-display">{f.title}</CardTitle>
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
