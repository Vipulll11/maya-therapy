import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import WhoWeHelp from "@/components/WhoWeHelp";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import About from "@/components/About";
import Office from "@/components/Office";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Discover from "@/components/Discover";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhoWeHelp />
        <Office />
        <About />
        <Discover />
        <Contact />

      </main>
      <Footer />
    </>
  );
}