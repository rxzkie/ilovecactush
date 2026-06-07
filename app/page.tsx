import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Catalog } from "./components/Catalog";
import { SeoIntro } from "./components/SeoIntro";
import { Gallery } from "./components/Gallery";
import { Faq } from "./components/Faq";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { JsonLd } from "./components/JsonLd";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <About />
        <SeoIntro />
        <Products />
        <Catalog />
        <Gallery />
        <Faq />
        <CTA />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
