import { motion } from "framer-motion";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-primary/30 selection:text-primary-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <footer className="py-8 text-center text-muted-foreground font-mono text-sm relative z-10 glass border-t border-white/5 rounded-t-[3rem] mt-20">
        <p>Designed & Built by Sachin</p>
        <p className="mt-2 text-xs opacity-60">© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </div>
  );
}
