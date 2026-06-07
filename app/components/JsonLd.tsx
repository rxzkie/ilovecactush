import {
  breadcrumbJsonLd,
  faqJsonLd,
  organizationJsonLd,
  productListJsonLd,
  webPageJsonLd,
  websiteJsonLd,
} from "@/lib/json-ld";

const schemas = [
  organizationJsonLd(),
  websiteJsonLd(),
  webPageJsonLd(),
  productListJsonLd(),
  faqJsonLd(),
  breadcrumbJsonLd(),
];

export function JsonLd() {
  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
