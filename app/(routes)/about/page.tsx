import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/marketing/cta";
// import { CheckCircle, Users, Target, Zap, Shield, BarChart3 } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">About Lazy Creations LLC</h1>
      <SectionHeader
        eyebrow="About"
        title="Why Lazy Creations exists"
        subtitle="We believe SMBs shouldn't have to choose between modern technology and their budget. Our mission is to level the playing field."
      />

      {/* Origin Story */}
      <div className="mt-12 space-y-8">
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-4">Our Origin Story</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground mb-4">
              Lazy Creations LLC was born from a simple observation: small and
              mid-sized businesses were being left behind in the digital
              transformation race.
            </p>
            <p className="text-muted-foreground mb-4">
              While enterprise companies had teams of engineers and unlimited
              budgets for AI and automation, SMBs were stuck with outdated
              processes, manual workflows, and the constant pressure to &quot;do
              more with less.&quot; We saw brilliant business owners spending
              40+ hours per week on tasks that could be automated, while their
              competitors with bigger budgets gained unfair advantages.
            </p>
            <p className="text-muted-foreground mb-4">
              We founded Lazy Creations to change that. Our name reflects our
              philosophy: we make technology work so hard that you don&apos;t
              have to. We believe every SMB deserves access to the same powerful
              tools that help larger companies thrive.
            </p>
            <p className="text-muted-foreground">
              We founded Lazy Creations to help SMBs save thousands of hours and
              hundreds of thousands of dollars by implementing practical,
              ROI-focused automation and AI solutions. We&apos;re not just
              consultants—we&apos;re your technology partners in growth.
            </p>
          </div>
        </div>

        {/* Mission · Values */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">Mission · Values</h2>
          <p className="text-muted-foreground mb-4">
            We empower SMBs with AI and modern software to compete and grow. We
            build practical systems that save time, reduce errors, and unlock
            better decisions.
          </p>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">Craft</strong> — reliable,
              maintainable systems over flashy demos.
            </li>
            <li>
              <strong className="text-foreground">Clarity</strong> — plain
              language, measurable outcomes, no jargon.
            </li>
            <li>
              <strong className="text-foreground">Care</strong> — treat client
              problems like our own.
            </li>
            <li>
              <strong className="text-foreground">Compounding</strong> — small
              wins that stack into durable advantage.
            </li>
          </ul>
          <p className="text-muted-foreground mt-4">
            Our vision: every SMB wields enterprise-grade capability—without the
            enterprise complexity or cost.
          </p>
        </div>

        {/* Team */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">Meet the Team</h2>
          <p className="text-muted-foreground mb-6">
            Lazy Creations is led by a small but dedicated founding team
            combining deep technical expertise with entrepreneurial drive.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-lg mb-2">
                Engineering & Product
              </h3>
              <p className="text-sm text-muted-foreground">
                Our team brings nearly a decade of senior engineering experience
                across global organizations including Bank of America, Home
                Depot, and Paychex. The team members led enterprise-scale system
                upgrades, designed dashboards that streamline operations for
                Fortune 500 companies, and architected microservices that power
                mission-critical applications.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">AI & Innovation</h3>
              <p className="text-sm text-muted-foreground">
                We have hands-on expertise training AI models, building
                generative AI applications, and developing AI-powered platforms.
                As the creator of <strong>UnbiasedAiReview.com</strong>, we’ve
                proven our ability to launch and scale AI-driven products that
                blend advanced engineering with consumer insight.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Leadership & Vision</h3>
              <p className="text-sm text-muted-foreground">
                With graduate degrees in Computer Science and Software
                Engineering and a track record of driving impact across both
                U.S. and international projects, we unite academic strength with
                practical, results-oriented leadership.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">
            We may be a lean team, but our collective skills span software
            engineering, AI adoption, product innovation, and strategy. Our
            focus is helping small and mid-sized businesses unlock the same
            powerful tools and approaches used by the world’s largest firms.
          </p>
        </div>
      </div>

      <CTA className="mt-16" />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About",
  description: "Mission, differentiators, values. Talk to an engineer.",
  alternates: { canonical: "/about" },
};
