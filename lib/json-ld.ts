import { faqs } from "./faq";
import { catalog } from "./products";
import { siteConfig } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "GardenStore",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.brand,
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    logo: `${siteConfig.url}/logo.svg`,
    sameAs: [siteConfig.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      addressCountry: siteConfig.location.countryCode,
      addressLocality: siteConfig.location.city,
    },
    areaServed: {
      "@type": "Country",
      name: siteConfig.location.country,
    },
    knowsAbout: [
      "comprar suculentas",
      "comprar cactus",
      "venta de plantas",
      "envío de suculentas Chile",
      "cactus Rancagua",
    ],
    priceRange: "$$",
    currenciesAccepted: "CLP",
    paymentAccepted: "Transferencia",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catálogo de cactus y suculentas",
      itemListElement: catalog.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: product.name,
          image: `${siteConfig.url}${product.image}`,
        },
      })),
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };
}

export function webPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: siteConfig.language,
    primaryImageOfPage: `${siteConfig.url}${siteConfig.ogImage}`,
  };
}

export function productListJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Comprar cactus y suculentas online",
    description:
      "Catálogo para comprar suculentas y cactus en Chile con envío nacional",
    itemListElement: catalog.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: `Compra ${product.name} en Chile con envío nacional`,
        image: `${siteConfig.url}${product.image}`,
        brand: {
          "@type": "Brand",
          name: siteConfig.brand,
        },
        offers: {
          "@type": "Offer",
          price: product.price,
          priceCurrency: "CLP",
          availability: "https://schema.org/InStock",
          url: `${siteConfig.url}/#catalogo`,
          seller: {
            "@id": `${siteConfig.url}/#organization`,
          },
        },
      },
    })),
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Comprar suculentas y cactus",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Catálogo",
        item: `${siteConfig.url}/#catalogo`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Preguntas frecuentes",
        item: `${siteConfig.url}/#preguntas`,
      },
    ],
  };
}
