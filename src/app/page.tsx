import { Preloader } from "@/components/sections/preloader";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { IntroScroll } from "@/components/sections/intro-scroll";
import { AssistanceScroll } from "@/components/sections/assistance-scroll";
import { FunctionsGrid } from "@/components/sections/functions-grid";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Specifications } from "@/components/sections/specifications";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Preloader />
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
