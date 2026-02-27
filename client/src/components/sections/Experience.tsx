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
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-secondary">04.</span> Education
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="font-mono text-muted-foreground text-sm bg-white/5 px-4 py-2 rounded-full">
                  {exp.date}
                </div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((desc, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-secondary mt-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
