import ConsoleBar from "@/components/ConsoleBar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ConsoleBar />
      <div className="mx-auto max-w-[1080px] px-7">
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
