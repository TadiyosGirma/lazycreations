import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your goals. We'll propose a pragmatic, ROI-first plan.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
