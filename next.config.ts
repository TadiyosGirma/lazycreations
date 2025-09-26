import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/case-studies", destination: "/blog", permanent: true },
      { source: "/case-studies/:slug", destination: "/blog", permanent: true },
    ];
  },
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-avatar",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-hover-card",
      "@radix-ui/react-label",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-separator",
      "@radix-ui/react-accordion",
      "lucide-react",
      "framer-motion",
    ],
  },
};

export default nextConfig;
