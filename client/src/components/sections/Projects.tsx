import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "NeuroSense – Epileptic Seizure Prediction",
      description: "AI-based medical system using Flask and React.js to predict epileptic seizures from EEG spectrograms. Implemented CNN and Hybrid CNN-BiLSTM models with real-time confidence visualization and PDF report generation.",
      tech: ["Flask", "React.js", "CNN", "BiLSTM", "ML"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
      featured: true,
    },
    {
      title: "JobGenie AI – Career Assistant",
      description: "AI-driven career platform with a React.js frontend and Go (Gin) backend to support resume optimization and job matching. Integrated Supabase PostgreSQL and Storage.",
      tech: ["React.js", "Go", "Gin", "PostgreSQL", "Supabase"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
      featured: true,
    },
    {
      title: "Music Streaming App (YouTube Music Clone)",
      description: "Full-stack music streaming application using Spring Boot, MongoDB, React.js. Integrated Jamendo API for music search and streaming. Implemented JWT-based authentication.",
      tech: ["Spring Boot", "MongoDB", "React.js", "Jamendo API", "JWT"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
      github: "https://github.com/SachinPattar8866",
      live: "#",
      featured: false,
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

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div 
                className={`lg:col-span-7 relative group rounded-2xl overflow-hidden glass border-white/10 shadow-2xl ${
                  index % 2 !== 0 ? "lg:col-start-6 lg:row-start-1" : "lg:col-start-1"
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] md:h-[400px] object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div 
                className={`lg:col-span-6 relative z-20 ${
                  index % 2 !== 0 ? "lg:col-start-1 lg:row-start-1 lg:text-left" : "lg:col-start-7 lg:text-right"
                }`}
              >
                <p className="text-secondary font-mono text-sm mb-2 font-medium">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 hover:text-primary transition-colors cursor-pointer">
                  {project.title}
                </h3>
                
                <div className="glass-card p-6 md:p-8 rounded-2xl mb-6 shadow-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm font-mono text-muted-foreground mb-8 ${
                  index % 2 !== 0 ? "justify-start" : "lg:justify-end justify-start"
                }`}>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={`flex items-center gap-6 ${
                  index % 2 !== 0 ? "justify-start" : "lg:justify-end justify-start"
                }`}>
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
