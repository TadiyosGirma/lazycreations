export function ProductOfferSeo() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI & Automation Offers",
    brand: "Lazy Creations LLC",
    description:
      "Support Copilot, Lead → Invoice, Dashboards, Content Assistant",
    offers: [
      {
        "@type": "Offer",
        price: "2000",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        price: "8000",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
