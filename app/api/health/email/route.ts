import { NextResponse } from "next/server";

export async function GET() {
  const hasResend = Boolean(process.env.RESEND_API_KEY);
  const hasSendgrid = Boolean(process.env.SENDGRID_API_KEY);
  const from = process.env.EMAIL_FROM ?? process.env.SENDGRID_FROM ?? null;
  const to = process.env.EMAIL_TO ?? process.env.SENDGRID_TO ?? null;
  return NextResponse.json({
    hasResend,
    hasSendgrid,
    fromConfigured: Boolean(from),
    toConfigured: Boolean(to),
    env: process.env.NODE_ENV,
  });
}
