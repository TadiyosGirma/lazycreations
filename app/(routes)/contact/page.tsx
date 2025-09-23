"use client";

import { useRef, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export default function Page() {
  const [busy, setBusy] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const lastSentRef = useRef(0);
  const onSubmit = async (values: FormValues) => {
    if (busy) return;
    const now = Date.now();
    if (now - lastSentRef.current < 3000) return; // debounce 3s
    if (values.website) return; // bot
    try {
      setBusy(true);
      const endpoint =
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
        "https://formspree.io/f/xayrknqp";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thanks — we'll reply shortly.");
      lastSentRef.current = now;
      reset();
    } catch {
      toast.error("Couldn't send. Use mailto:info@lazycreations.ai");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="container mx-auto px-6 md:px-8 py-16">
      <h1 className="sr-only">Contact</h1>
      <h1 className="font-display text-4xl font-bold">Contact</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">
        Tell us about your goals. Include systems and constraints. Optional:
        share a calendar link.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 grid md:grid-cols-2 gap-6"
      >
        <div>
          <Label htmlFor="name">Name*</Label>
          <Input id="name" {...register("name")} />
          {formState.errors.name && (
            <p className="text-error text-sm mt-1">Required</p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" {...register("company")} />
        </div>
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input id="email" type="email" {...register("email")} />
          {formState.errors.email && (
            <p className="text-error text-sm mt-1">Valid email required</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" {...register("phone")} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="budget">Budget</Label>
          <Input id="budget" placeholder="$5k–$25k" {...register("budget")} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message">Message*</Label>
          <Textarea id="message" rows={6} {...register("message")} />
          {formState.errors.message && (
            <p className="text-error text-sm mt-1">Required</p>
          )}
        </div>
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
        <div className="md:col-span-2 flex gap-3">
          <Button type="submit" disabled={busy}>
            {busy ? "Sending…" : "Send"}
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:info@lazycreations.ai">Or email us</a>
          </Button>
        </div>
      </form>
    </div>
  );
}
