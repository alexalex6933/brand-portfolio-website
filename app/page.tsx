import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Metrics from "@/components/Metrics";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Brands />
        <Contact />
      </main>
    </>
  );
}
