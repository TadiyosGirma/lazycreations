// Disabled by default. Enable by setting RESEND_API_KEY and switching the contact form endpoint.
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Disabled" },
        { status: 503 },
      );
    }
    await req.json();
    // Example shape: { name, company, email, phone, budget, message }
    // TODO: Send email via Resend SDK here.
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
