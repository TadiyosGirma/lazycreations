import type { Metadata } from "next";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CTA } from "@/components/marketing/cta";
import {
  CheckCircle,
  Users,
  Target,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";

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
              Today, we&apos;ve helped dozens of SMBs save thousands of hours
              and hundreds of thousands of dollars by implementing practical,
              ROI-focused automation and AI solutions. We&apos;re not just
              consultants—we&apos;re your technology partners in growth.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="neon-border bg-surface/60">
            <CardHeader>
              <CardTitle className="font-display text-xl flex items-center gap-2">
                <Target className="h-5 w-5 text-[var(--accent-1)]" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To help small and mid-sized businesses compete with larger
                players by leveraging modern software and AI. We believe
                technology should be an equalizer, not a barrier to success.
              </p>
            </CardContent>
          </Card>

          <Card className="neon-border bg-surface/60">
            <CardHeader>
              <CardTitle className="font-display text-xl flex items-center gap-2">
                <Users className="h-5 w-5 text-[var(--accent-2)]" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where every SMB has access to enterprise-grade
                technology solutions that deliver measurable value, not just
                impressive demos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--accent-1)]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="h-6 w-6 text-[var(--accent-1)]" />
              </div>
              <h3 className="font-medium mb-2">Craft</h3>
              <p className="text-sm text-muted-foreground">
                We build solutions that work reliably, not just impressive
                demos. Every line of code serves a purpose.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--accent-2)]/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-6 w-6 text-[var(--accent-2)]" />
              </div>
              <h3 className="font-medium mb-2">Clarity</h3>
              <p className="text-sm text-muted-foreground">
                We communicate in plain English, not tech jargon. You&apos;ll
                always know what we&apos;re building and why.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-400/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="font-medium mb-2">Care</h3>
              <p className="text-sm text-muted-foreground">
                We treat your business like our own. Your success is our
                success, and we&apos;re invested in your long-term growth.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="font-medium mb-2">Compounding</h3>
              <p className="text-sm text-muted-foreground">
                We build solutions that get better over time. Small improvements
                today create massive value tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Differentiators */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">
            What Makes Us Different
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-[var(--accent-1)]" />
                Engineer-Led Conversations
              </h3>
              <p className="text-muted-foreground mb-4">
                No sales fluff or technical hand-waving. When you talk to us,
                you&apos;re talking directly to the people who will build your
                solution. We ask the right questions, give honest answers, and
                focus on what actually works.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[var(--accent-2)]" />
                ROI-First Scoping
              </h3>
              <p className="text-muted-foreground mb-4">
                Every project starts with a clear understanding of the business
                value. We won&apos;t build something just because it&apos;s
                cool—we build what will save you time, reduce errors, and
                increase revenue.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-green-400" />
                Bias for Simplicity
              </h3>
              <p className="text-muted-foreground mb-4">
                The best solution is often the simplest one. We avoid
                over-engineering and focus on elegant solutions that your team
                can actually use and maintain.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                Accessible by Default
              </h3>
              <p className="text-muted-foreground mb-4">
                Every solution we build follows accessibility best practices
                from day one. We believe technology should work for everyone,
                regardless of ability or technical comfort level.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">Meet the Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-medium text-lg mb-2">Leadership Team</h3>
              <p className="text-muted-foreground mb-4">
                Our leadership team combines decades of experience in software
                engineering, business operations, and SMB consulting. We&apos;ve
                worked at startups, scale-ups, and enterprise companies, but our
                hearts are with the small businesses that drive our economy.
              </p>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium">Technical Leadership</h4>
                  <p className="text-sm text-muted-foreground">
                    Former senior engineers from companies like Stripe, Shopify,
                    and Microsoft, with deep expertise in AI, automation, and
                    modern web technologies.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Business Strategy</h4>
                  <p className="text-sm text-muted-foreground">
                    Former SMB owners and consultants who understand the unique
                    challenges of running a small business in today&apos;s
                    competitive landscape.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Our Approach</h3>
              <p className="text-muted-foreground mb-4">
                We&apos;re not a traditional agency or consulting firm.
                We&apos;re a team of builders who happen to love working with
                SMBs. Every project is a partnership, and every client becomes
                part of our extended family.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Direct access to senior team members</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Transparent communication and regular updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Ongoing support and optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Flexible engagement models that fit your budget</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Measurable Outcomes */}
        <div className="glass rounded-2xl p-8">
          <h2 className="font-display text-2xl mb-6">Our Track Record</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent-1)] mb-2">
                50+
              </div>
              <div className="text-sm text-muted-foreground">SMBs Helped</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--accent-2)] mb-2">
                2,000+
              </div>
              <div className="text-sm text-muted-foreground">
                Hours Saved Weekly
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-sm text-muted-foreground">
                Client Retention Rate
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6">
            We measure our success by your success. When you save time, reduce
            errors, and grow revenue, we&apos;ve done our job.
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
