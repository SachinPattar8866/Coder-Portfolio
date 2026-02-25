import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Rocket } from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlights = [
    {
      icon: <Globe className="text-secondary w-8 h-8" />,
      title: "Web Development",
      description: "Building responsive, performant, and accessible web applications.",
    },
    {
      icon: <Cpu className="text-primary w-8 h-8" />,
      title: "AI Integration",
      description: "Leveraging LLMs and machine learning to build smart products.",
    },
    {
      icon: <Code2 className="text-green-400 w-8 h-8" />,
      title: "Clean Architecture",
      description: "Writing maintainable, scalable, and testable code.",
    },
    {
      icon: <Rocket className="text-orange-400 w-8 h-8" />,
      title: "Rapid Prototyping",
      description: "Turning ideas into functional prototypes with speed and precision.",
    }
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="text-primary">01.</span> About Me
            </h2>
            <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 group-hover:bg-primary/20 transition-colors duration-700"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Developer, Thinker, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Innovator</span>
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm Sachin, a passionate Full Stack Developer who enjoys building things that live on the internet. My interest in web development started back in 2018 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about design and structure!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                </p>
                <p>
                  I also recently started diving into the world of AI and Machine Learning, exploring how LLMs can be integrated into everyday web applications to enhance user experience.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300 group hover:-translate-y-2">
                  <div className="bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
