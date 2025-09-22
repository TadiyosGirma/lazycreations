"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function MotionHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <AnimatedGrid />
      <div className="container mx-auto px-6 md:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-sm tracking-widest text-[var(--accent-1)] uppercase mb-4">
            LAZY CREATIONS LLC
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            Ship automations and AI that pay for themselves
          </h1>
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl">
            Strategy → Implementation → Enablement → Managed. We build copilots,
            lead-to-invoice automations, dashboards, and content assistants.
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild className="shadow-[var(--glow-accent-1)]">
              <Link href="/contact" data-cta="hero-primary">
                Talk to an engineer
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services" data-cta="hero-secondary">
                Our services
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedGrid() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent_70%)]"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -inset-24 bg-[radial-gradient(600px_300px_at_0%_0%,rgba(0,229,255,0.13),transparent_50%),radial-gradient(500px_250px_at_100%_0%,rgba(139,92,246,0.14),transparent_50%)]" />
    </div>
  );
}
