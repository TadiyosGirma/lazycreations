import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTA({ className = "" }: { className?: string }) {
  return (
    <div className={`glass rounded-2xl p-8 md:p-10 text-center ${className}`}>
      <h3 className="font-display text-2xl md:text-3xl font-semibold">
        Ready to save 10+ hours per week?
      </h3>
      <p className="text-muted-foreground mt-2">
        Tell us your bottleneck and we'll propose a pragmatic, ROI-first plan.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild size="lg">
          <Link href="/contact" data-cta="cta-final">
            Talk to an engineer
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="mailto:info@lazycreations.ai" data-cta="cta-mailto">
            Or email us
          </Link>
        </Button>
      </div>
    </div>
  );
}
