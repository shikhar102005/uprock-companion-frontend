import { Header } from "@/components/sections/header";// Header is react component which is being imported from components
import { Hero } from "@/components/sections/hero";// imports the Hero section which usually comprises the main Headline and CTA
import { IntroScroll } from "@/components/sections/intro-scroll";// imports the scrolling animations and anything which is triggered by scrolling
import { AssistanceScroll } from "@/components/sections/assistance-scroll";// does a similar job to IntroScroll but for the assistance section
import { FunctionsGrid } from "@/components/sections/functions-grid";// imports a grid layout for the product features
import { ProductShowcase } from "@/components/sections/product-showcase";// imports a visual demonstration process of the product
import { Specifications } from "@/components/sections/specifications";// imports a detailed section in the structure of a list or a table 
import { Footer } from "@/components/sections/footer";// imports the site footer which usually contains links and legal info

export default function Home() {// exports the default home component for the main page
  return ( //JSX page begins from here
    <main className="min-h-screen bg-background"> // min-h-screen makes sure the main section takes at least the full height of the viewport. bg-background applies a background color or image defined in the CSS or Tailwind config.
     // anything inside main is the content of the page which is to be rendered in this order
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
