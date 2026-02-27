import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "NeuroSense – Epileptic Seizure Prediction",
      bullets: [
        "AI-based medical system using Flask and React.js to predict epileptic seizures from EEG spectrograms.",
        "Implemented CNN and Hybrid CNN-BiLSTM models.",
        "Real-time confidence visualization and PDF report generation."
      ],
      tech: ["Flask", "React.js", "CNN", "BiLSTM", "ML"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
    },
    {
      id: "02",
      title: "JobGenie AI – Career Assistant",
      bullets: [
        "AI-driven career platform with a React.js frontend and Go (Gin) backend.",
        "Resume optimization and job matching functionalities.",
        "Integrated Supabase PostgreSQL and Storage for data management."
      ],
      tech: ["React.js", "Go", "Gin", "PostgreSQL", "Supabase"],
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
    },
    {
      id: "03",
      title: "Music Streaming App",
      bullets: [
        "Full-stack music streaming application using Spring Boot, MongoDB, and React.js.",
        "Integrated Jamendo API for extensive music search and streaming capabilities.",
        "Implemented secure JWT-based authentication and user management."
      ],
      tech: ["Spring Boot", "MongoDB", "React.js", "Jamendo API", "JWT"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono">
            <span className="text-primary">03.</span> Some Things I've Built
          </h2>
          <div className="h-px bg-white/10 flex-grow max-w-xs"></div>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2 relative group rounded-2xl overflow-hidden glass border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-video object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Project Content */}
              <div className={`lg:w-1/2 space-y-6 ${index % 2 !== 0 ? "lg:text-right" : "lg:text-left"}`}>
                <p className="text-secondary font-mono text-sm font-medium">Project {project.id}</p>
                <h3 className="text-2xl md:text-3xl font-bold hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl shadow-xl">
                  <ul className={`space-y-3 text-muted-foreground list-none ${index % 2 !== 0 ? "flex flex-col items-end" : ""}`}>
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base">
                        {index % 2 === 0 && <span className="text-primary">▹</span>}
                        <span>{bullet}</span>
                        {index % 2 !== 0 && <span className="text-primary">◃</span>}
                      </li>
                    ))}
                  </ul>
                </div>

                <ul className={`flex flex-wrap gap-4 text-xs font-mono text-muted-foreground ${index % 2 !== 0 ? "lg:justify-end" : "justify-start"}`}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 ${index % 2 !== 0 ? "lg:justify-end" : "justify-start"}`}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-300">
                    <Github size={24} />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-secondary transition-colors hover:-translate-y-1 transform duration-300">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
