import type { Metadata } from "next";
import { Inter, Space_Grotesk, Orbitron } from "next/font/google";
import "./globals.css";
import { ClientShell } from "@/components/client-shell";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const orbitron = Orbitron({
  variable: "--font-orbitron",
  weight: ["700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lazy Creations LLC — Software & AI for SMBs",
    template: "%s — Lazy Creations LLC",
  },
  description:
    "Dark, futuristic solutions: strategy, automation, AI copilots, analytics. Built to convert.",
  metadataBase: new URL("https://lazycreations.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${orbitron.variable} antialiased bg-background text-foreground`}
      >
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
