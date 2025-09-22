import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const areas = [
  {
    name: "Professional services",
    pains: ["Manual intake", "Lead follow-up", "Proposal delays"],
    kpis: ["Lead-to-meeting", "Cycle time", "Win rate"],
  },
  {
    name: "Clinics",
    pains: ["Intake forms", "EHR sync", "No-shows"],
    kpis: ["Admin time", "Wait time", "Satisfaction"],
  },
  {
    name: "Real estate & construction",
    pains: ["Email triage", "Scheduling", "Change orders"],
    kpis: ["Time-to-quote", "Close time", "Errors"],
  },
  {
    name: "E‑commerce",
    pains: ["Support backlog", "Returns", "Catalog updates"],
    kpis: ["AOV", "AHT", "CSAT"],
  },
];

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <SectionHeader
        eyebrow="Industries"
        title="Pains → Solutions → KPIs"
        subtitle="We focus on measurable outcomes, not demos."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {areas.map((a) => (
          <Card key={a.name} className="neon-border">
            <CardHeader>
              <CardTitle className="font-display">{a.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pains: {a.pains.join(", ")}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                KPIs: {a.kpis.join(", ")}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
