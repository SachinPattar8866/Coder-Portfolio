import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Bachelor of Engineering (B.E)",
      company: "BLDEACET College of Engineering",
      date: "2023 - 2026 (Expected)",
      description: [
        "Major in Information Science and Engineering.",
        "Current CGPA: 7.68",
        "Focused on DSA, Full Stack Development, and AI/ML applications."
      ]
    },
    {
      role: "Diploma in Computer Science",
      company: "Government Polytechnic College",
      date: "2020 - 2023",
      description: [
        "Completed with CGPA: 8.23",
        "Foundation in Computer Science, SDLC, and Programming Fundamentals."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-secondary">04.</span> Education
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="relative border-l border-white/10 ml-6 md:ml-0 pl-8 md:pl-0 space-y-16">
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent md:hidden opacity-50"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative md:grid md:grid-cols-12 md:gap-8 items-start"
            >
              <div className="hidden md:flex absolute left-1/2 -ml-2 top-2 w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
              <div className="absolute -left-[37px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary md:hidden z-10 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>

              <div className="md:col-span-3 text-left md:text-right mb-2 md:mb-0 pt-1">
                <span className="font-mono text-muted-foreground text-sm">{exp.date}</span>
              </div>

              <div className="hidden md:block absolute left-1/2 top-0 bottom-[-64px] w-px bg-white/10 -ml-px last:bg-transparent"></div>

              <div className="md:col-span-8 md:col-start-5 glass-card p-8 rounded-2xl group hover:border-primary/30 transition-colors">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <ul className="mt-4 space-y-3">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                      <span className="text-secondary mt-1">▹</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
