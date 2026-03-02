import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import FeaturedContent from "@/components/FeaturedContent";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import CTASection from "@/components/CTASection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Metrics />
        <FeaturedContent />
        <Testimonials />
        <Brands />
        <CTASection />
      </main>
      <Contact />
    </>
  );
}
