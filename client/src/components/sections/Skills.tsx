import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { category: "Languages", items: ["Java", "Go", "Python", "JavaScript", "TypeScript", "C++"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "Gin", "Spring Boot", "Django", "GraphQL"] },
    { category: "Database & Cloud", items: ["MongoDB", "PostgreSQL", "Firebase", "Redis", "AWS", "Docker"] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" as const } },
  };

  return (
    <section id="skills" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-secondary">02.</span> Skills & Tech
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-bold mb-6 font-mono border-b border-white/10 pb-4 inline-block relative z-10">
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {skillGroup.items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg text-sm font-medium glass border-white/5 text-muted-foreground group-hover:text-foreground transition-colors hover:bg-primary/20 hover:border-primary/50 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
