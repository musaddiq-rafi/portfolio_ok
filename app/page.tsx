import { Navbar } from "@/components/Navbar";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Awards } from "@/components/Awards";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Dock } from "@/components/Dock";

export default function Home() {
  return (
    <main className="bg-[var(--bg)] min-h-screen">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Awards />
      <Contact />
      <Footer />
      <Dock />
    </main>
  );
}
