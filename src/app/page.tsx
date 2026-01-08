import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { AssistanceScroll } from "@/components/sections/assistance-scroll";
import { FunctionsGrid } from "@/components/sections/functions-grid";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Specifications } from "@/components/sections/specifications";
import { Footer } from "@/components/sections/footer";
import { IntroScroll } from "@/components/sections/intro-scroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <IntroScroll />
      <Header />
      <Hero />
      <AssistanceScroll />
      <FunctionsGrid />
      <ProductShowcase />
      <Specifications />
      <Footer />
    </main>
  );
}
