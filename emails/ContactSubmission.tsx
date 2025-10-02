import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Img,
  Hr,
  Link,
} from "@react-email/components";

type Props = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  budget?: string;
  message: string;
  origin?: string;
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
}: Props) {
  const logoSrc = `${origin.replace(/\/$/, "")}/logo.png`;
  return (
    <Html>
      <Head />
      <Preview>{`New Contact Submission — ${name}`}</Preview>
      <Body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
          backgroundColor: "#ffffff",
          color: "#0f172a",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: 640,
            margin: "0 auto",
            padding: 20,
          }}
        >
          <Section style={{ textAlign: "center", marginBottom: 12 }}>
            <Img
              src={logoSrc}
              alt="Lazy Creations"
              width={56}
              height={56}
              style={{ display: "inline-block", borderRadius: 8 }}
            />
          </Section>
          <Section>
            <Heading
              as="h2"
              style={{
                margin: 0,
                marginBottom: 10,
                fontSize: 22,
                color: "#111827",
              }}
            >
              New Contact Submission
            </Heading>
            <Hr
              style={{
                border: 0,
                height: 2,
                backgroundColor: accent,
                margin: "0 0 16px 0",
              }}
            />

            <Text style={{ margin: 0, marginBottom: 8 }}>
              <strong style={{ color: "#111827" }}>From:</strong> {name}
            </Text>
            <Text style={{ margin: 0, marginBottom: 8 }}>
              <strong style={{ color: "#111827" }}>Email:</strong>{" "}
              <Link href={`mailto:${email}`}>{email}</Link>
            </Text>
            {company ? (
              <Text style={{ margin: 0, marginBottom: 8 }}>
                <strong style={{ color: "#111827" }}>Company:</strong> {company}
              </Text>
            ) : null}
            {phone ? (
              <Text style={{ margin: 0, marginBottom: 8 }}>
                <strong style={{ color: "#111827" }}>Phone:</strong> {phone}
              </Text>
            ) : null}
            {budget ? (
              <Text style={{ margin: 0, marginBottom: 8 }}>
                <strong style={{ color: "#111827" }}>Budget:</strong> {budget}
              </Text>
            ) : null}

            <Text
              style={{
                marginTop: 16,
                marginBottom: 6,
                color: "#111827",
                fontWeight: 700,
              }}
            >
              Message
            </Text>
            <Section
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
            </Section>

            <Text style={{ marginTop: 18, color: "#6b7280", fontSize: 12 }}>
              Origin: {origin}
            </Text>
          </Section>

          <Hr
            style={{
              border: 0,
              height: 1,
              backgroundColor: "#e5e7eb",
              margin: "20px 0",
            }}
          />

          <Section style={{ textAlign: "center" }}>
            <Text style={{ margin: 0, color: "#6b7280", fontSize: 12 }}>
              © 2025 Lazy Creations LLC — Built with AI for SMBs ·{" "}
              <Link href="https://lazycreations.ai" style={{ color: accent }}>
                lazycreations.ai
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
