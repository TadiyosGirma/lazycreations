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
import { cn } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

type FormValues = z.infer<typeof schema>;

export default function Page() {
  const [busy, setBusy] = useState(false);
  const { register, handleSubmit, reset, formState, setValue, watch } =
    useForm<FormValues>({
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        const msg = data?.error || "Send failed. Please try again.";
        throw new Error(msg);
      }
      toast.success("Thanks — we'll reply shortly.");
      lastSentRef.current = now;
      reset();
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Send failed.";
      toast.error(msg + " If the issue persists, email admin@lazycreations.ai");
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
          <Label htmlFor="name" className="mb-2">
            Name*
          </Label>
          <Input
            id="name"
            className={cn(
              (watch("name") ?? "").trim() !== "" &&
                "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900",
            )}
            {...register("name")}
          />
          {formState.errors.name && (
            <p className="text-error text-sm mt-1">Required</p>
          )}
        </div>
        <div>
          <Label htmlFor="company" className="mb-2">
            Company
          </Label>
          <Input
            id="company"
            className={cn(
              (watch("company") ?? "").trim() !== "" &&
                "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900",
            )}
            {...register("company")}
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2">
            Email*
          </Label>
          <Input
            id="email"
            type="email"
            className={cn(
              (watch("email") ?? "").trim() !== "" &&
                "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900",
            )}
            {...register("email")}
          />
          {formState.errors.email && (
            <p className="text-error text-sm mt-1">Valid email required</p>
          )}
        </div>
        <div>
          <Label htmlFor="phone" className="mb-2">
            Phone
          </Label>
          <Input
            id="phone"
            className={cn(
              (watch("phone") ?? "").trim() !== "" &&
                "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900",
            )}
            {...register("phone")}
          />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="budget" className="mb-2">
            Budget
          </Label>
          <Select
            value={watch("budget") || undefined}
            onValueChange={(v) =>
              setValue("budget", v, { shouldValidate: false })
            }
          >
            <SelectTrigger
              aria-label="Budget"
              role="combobox"
              className={cn(
                "border-input",
                (watch("budget") ?? "") !== ""
                  ? "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900"
                  : "dark:bg-input/30",
              )}
            >
              <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="under-5k">Under $5k</SelectItem>
              <SelectItem value="5k-25k">$5k–$25k</SelectItem>
              <SelectItem value="25k-50k">$25k–$50k</SelectItem>
              <SelectItem value="50k-100k">$50k–$100k</SelectItem>
              <SelectItem value="100k-plus">$100k+</SelectItem>
            </SelectContent>
          </Select>
          <input type="hidden" {...register("budget")} />
        </div>
        <div className="md:col-span-2">
          <Label htmlFor="message" className="mb-2">
            Message*
          </Label>
          <Textarea
            id="message"
            rows={6}
            className={cn(
              (watch("message") ?? "").trim() !== "" &&
                "dark:bg-[#e8eef7] bg-[#e8eef7] text-slate-900",
            )}
            {...register("message")}
          />
          {formState.errors.message && (
            <p className="text-error text-sm mt-1">
              Please enter at least 10 characters
            </p>
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
            <a href="mailto:admin@lazycreations.ai">Or email us</a>
          </Button>
        </div>
      </form>
    </div>
  );
}
