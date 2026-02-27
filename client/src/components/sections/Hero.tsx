import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";

export default function Hero() {
  const text = "Hi, I'm Sachin";
  const subtitle = "Full Stack Developer | AI Enthusiast";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden" id="hero">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col space-y-4"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold font-mono tracking-tighter"
              variants={child}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={child}>
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="text-primary inline-block ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                |
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-medium text-muted-foreground"
              variants={child}
            >
              {subtitle}
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg text-muted-foreground/80 max-w-xl leading-relaxed"
          >
            Final-year BE student with strong experience in full-stack development, backend systems, and AI-based applications. Proficient in Java, Go, Python, React, and REST APIs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#projects" 
              className="glass px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 group"
              data-testid="link-view-projects"
            >
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl font-medium flex items-center gap-2 border border-white/10 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:scale-105 active:scale-95"
              data-testid="link-contact"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center gap-6 pt-8"
          >
            <a href="https://github.com/SachinPattar8866" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/sachin-v-pattar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors hover:-translate-y-1 transform duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/u/Sachin_Pattar/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
              <ExternalLink size={24} />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full filter blur-[80px] opacity-40 animate-pulse"></div>
          
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden glass-card p-2"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-zinc-800 relative">
               <img 
                 src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                 alt="Sachin Profile" 
                 className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent mix-blend-multiply"></div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -left-10 glass px-6 py-3 rounded-2xl flex items-center gap-3"
          >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-medium text-sm">Available for work</span>
          </motion.div>

          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-20 -right-10 glass px-6 py-3 rounded-2xl flex items-center gap-3"
          >
            <span className="text-2xl">🚀</span>
            <span className="font-medium text-sm">Solved 90+ LeetCode</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
