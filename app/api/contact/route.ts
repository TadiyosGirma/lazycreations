import { NextResponse } from "next/server";
import { headers as nextHeaders } from "next/headers";
import { z } from "zod";
import { Resend } from "resend";
import ContactSubmissionEmail from "@/emails/ContactSubmission";
import sgMail from "@sendgrid/mail";

const BodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10),
  website: z.string().optional(), // honeypot
});

const lastSubmissionByIp = new Map<string, number>();

function getClientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  const ra = (req as any).ip || (req as any).socket?.remoteAddress;
  return typeof ra === "string" ? ra : "unknown";
}

function buildEmailHtml(
  data: z.infer<typeof BodySchema>,
  origin: string,
): string {
  return `
  <div style="font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6;font-size:14px;color:#0f172a">
    <h2 style="margin:0 0 12px 0;color:#111827">New Contact Submission</h2>
    <p style="margin:0 0 12px 0">From: <strong>${escapeHtml(data.name)}</strong> &lt;${escapeHtml(
      data.email,
    )}&gt;</p>
    ${data.company ? `<p style="margin:0 0 12px 0">Company: ${escapeHtml(data.company)}</p>` : ""}
    ${data.phone ? `<p style="margin:0 0 12px 0">Phone: ${escapeHtml(data.phone)}</p>` : ""}
    ${data.budget ? `<p style="margin:0 0 12px 0">Budget: ${escapeHtml(data.budget)}</p>` : ""}
    <p style="margin:0 0 12px 0">Message:</p>
    <div style="white-space:pre-wrap;border:1px solid #e5e7eb;border-radius:8px;padding:12px;background:#f9fafb;color:#111827">${escapeHtml(
      data.message,
    )}</div>
    <p style="margin-top:16px;color:#6b7280;font-size:12px">Origin: ${escapeHtml(
      origin,
    )}</p>
  </div>`;
}

function buildEmailText(
  data: z.infer<typeof BodySchema>,
  origin: string,
): string {
  return [
    `New Contact Submission`,
    `From: ${data.name} <${data.email}>`,
    data.company ? `Company: ${data.company}` : undefined,
    data.phone ? `Phone: ${data.phone}` : undefined,
    data.budget ? `Budget: ${data.budget}` : undefined,
    `Message:`,
    data.message,
    ``,
    `Origin: ${origin}`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const h = await nextHeaders();
    const origin = h.get("origin") ?? "unknown";
    const ip = getClientIp(req);
    const now = Date.now();
    const last = lastSubmissionByIp.get(ip) ?? 0;
    if (now - last < 15_000) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please wait a moment." },
        { status: 429 },
      );
    }

    const json = await req.json();
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Invalid input." },
        { status: 400 },
      );
    }
    const data = parsed.data;

    // Honeypot rejection
    if (data.website && data.website.trim() !== "") {
      return NextResponse.json({ ok: true });
    }

    lastSubmissionByIp.set(ip, now);

    const subject = `New Contact Form — ${data.name}`;
    const reactEmail = ContactSubmissionEmail({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone,
      budget: data.budget,
      message: data.message,
      origin,
      logoUrl: process.env.EMAIL_LOGO_URL,
    });
    const html = buildEmailHtml(data, origin);
    const text = buildEmailText(data, origin);

    const emailFrom = process.env.EMAIL_FROM ?? "no-reply@lazycreations.ai";
    const emailTo = process.env.EMAIL_TO ?? "admin@lazycreations.ai";

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: `Lazy Creations Contact` + " <" + emailFrom + ">",
        to: [emailTo],
        replyTo: data.email,
        subject,
        react: reactEmail,
        text,
      });
      if (error) {
        console.error("contact email error (resend)", {
          provider: "resend",
          message: error.message,
        });
        return NextResponse.json(
          { ok: false, error: "Email provider error (Resend)." },
          { status: 500 },
        );
      }
      return NextResponse.json({ ok: true });
    }

    if (process.env.SENDGRID_API_KEY) {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        await sgMail.send({
          to: emailTo,
          from: process.env.SENDGRID_FROM ?? emailFrom,
          replyTo: data.email,
          subject,
          html,
          text,
        });
        return NextResponse.json({ ok: true });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        console.error("contact email error (sendgrid)", {
          provider: "sendgrid",
          message: msg,
        });
        return NextResponse.json(
          { ok: false, error: "Email provider error (SendGrid)." },
          { status: 500 },
        );
      }
    }

    return NextResponse.json(
      { ok: false, error: "Email provider not configured." },
      { status: 503 },
    );
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("contact email route error", { message: msg });
    return NextResponse.json(
      { ok: false, error: "Failed to process request." },
      { status: 500 },
    );
  }
}
