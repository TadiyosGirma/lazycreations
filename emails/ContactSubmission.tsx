import React from "react";

type Props = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  budget?: string;
  message: string;
  origin?: string;
  logoUrl?: string;
};

const accent = "#00E5FF";

export default function ContactSubmissionEmail({
  name,
  email,
  company,
  phone,
  budget,
  message,
  origin = "https://lazycreations.ai",
  logoUrl,
}: Props) {
  const computedOrigin = origin.replace(/\/$/, "");
  const isLocal = /localhost|127\.0\.0\.1|0\.0\.0\.0|192\.168\./.test(
    computedOrigin,
  );
  const fallbackRemote = "https://lazycreations.ai/logo.png";
  const logoSrc =
    logoUrl && logoUrl.trim() !== ""
      ? logoUrl
      : isLocal
        ? fallbackRemote
        : `${computedOrigin}/logo.png`;
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
        backgroundColor: "#ffffff",
        color: "#0f172a",
      }}
    >
      <div
        style={{ width: "100%", maxWidth: 640, margin: "0 auto", padding: 20 }}
      >
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <img
            src={logoSrc}
            alt="Lazy Creations"
            width={56}
            height={56}
            style={{ display: "inline-block", borderRadius: 8 }}
          />
        </div>
        <div>
          <h2
            style={{
              margin: 0,
              marginBottom: 10,
              fontSize: 22,
              color: "#111827",
            }}
          >
            New Contact Submission
          </h2>
          <div
            style={{
              border: 0,
              height: 2,
              backgroundColor: accent,
              margin: "0 0 16px 0",
            }}
          />

          <p style={{ margin: 0, marginBottom: 8 }}>
            <strong style={{ color: "#111827" }}>From:</strong> {name}
          </p>
          <p style={{ margin: 0, marginBottom: 8 }}>
            <strong style={{ color: "#111827" }}>Email:</strong>{" "}
            <a href={`mailto:${email}`}>{email}</a>
          </p>
          {company ? (
            <p style={{ margin: 0, marginBottom: 8 }}>
              <strong style={{ color: "#111827" }}>Company:</strong> {company}
            </p>
          ) : null}
          {phone ? (
            <p style={{ margin: 0, marginBottom: 8 }}>
              <strong style={{ color: "#111827" }}>Phone:</strong> {phone}
            </p>
          ) : null}
          {budget ? (
            <p style={{ margin: 0, marginBottom: 8 }}>
              <strong style={{ color: "#111827" }}>Budget:</strong> {budget}
            </p>
          ) : null}

          <p
            style={{
              marginTop: 16,
              marginBottom: 6,
              color: "#111827",
              fontWeight: 700,
            }}
          >
            Message
          </p>
          <div
            style={{
              borderLeft: `4px solid ${accent}`,
              backgroundColor: "#f9f9f9",
              padding: "12px 14px",
              borderRadius: 8,
              whiteSpace: "pre-wrap",
              color: "#111827",
            }}
          >
            {message}
          </div>

          <p style={{ marginTop: 18, color: "#6b7280", fontSize: 12 }}>
            Origin: {origin}
          </p>
        </div>

        <div
          style={{
            border: 0,
            height: 1,
            backgroundColor: "#e5e7eb",
            margin: "20px 0",
          }}
        />

        <div style={{ textAlign: "center" }}>
          <p style={{ margin: 0, color: "#6b7280", fontSize: 12 }}>
            © 2025 Lazy Creations LLC — Built with AI for SMBs ·{" "}
            <a href="https://lazycreations.ai" style={{ color: accent }}>
              lazycreations.ai
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
