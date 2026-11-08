import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { GithubIcon } from "../common/Icons";
import { 
  FolderGit2, 
  Sparkles, 
  Activity, 
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
  Eye
} from "lucide-react";

const categories = [
  "All",
  "Full-Stack SaaS",
  "AI & ML Systems",
  "Mobile & Super Apps",
  "Backend & Core",
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const { navigateToProject } = useRouter();

  const filteredProjects = activeTab === "All"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            Engineering Portfolio
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Featured Systems &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Shipped Products
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Explore live production SaaS platforms, AI creative pipelines, low-level C++ tensor extensions, and mobile super-apps. Click any project to inspect screenshots and architectural deep-dives.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow border border-indigo-400/30"
                  : "bg-dark-850 text-slate-300 hover:text-white hover:bg-dark-800 border border-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between overflow-hidden shadow-card hover:border-indigo-500/40 transition-all duration-300"
              >
                <div>
                  {/* Top image or visual header */}
                  <div
                    onClick={() => navigateToProject(project.id)}
                    className="relative h-52 w-full overflow-hidden bg-dark-900 border-b border-white/5 cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                    
                    {/* View details overlay badge on hover */}
                    <div className="absolute inset-0 bg-indigo-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <span className="px-3.5 py-1.5 rounded-xl bg-dark-950/90 text-white font-medium text-xs border border-white/20 backdrop-blur-md flex items-center gap-1.5 shadow-glow">
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        View Full Project & Screenshots
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-dark-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Star/Badge */}
                    {project.featured && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 backdrop-blur-md flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          Flagship
                        </span>
                      </div>
                    )}

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="absolute bottom-2 left-3 right-3">
                        <div className="text-[11px] font-mono text-slate-200 bg-dark-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 flex items-center gap-1.5 truncate">
                          <Activity className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{project.metrics}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3
                      onClick={() => navigateToProject(project.id)}
                      className="text-xl font-bold text-white group-hover:text-brand-cyan transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                    <div className="text-xs font-mono text-indigo-400 mt-1 mb-3">
                      {project.subtitle}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Chips */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.slice(0, 6).map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-dark-900 text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 6 && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-dark-900 text-slate-400 border border-white/5">
                          +{project.tags.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Links & Details CTA */}
                <div className="p-6 pt-0 border-t border-white/5 mt-auto">
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4">
                    
                    {/* Dedicated Project Page CTA Button */}
                    <button
                      onClick={() => navigateToProject(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-glow border border-indigo-400/30 transition-all"
                    >
                      <span>Details & Screenshots</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.links && project.links[0] && (
                        <a
                          href={project.links[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-dark-900 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                          title="Open Live App"
                        >
                          <span>{project.links[0].label}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                        </a>
                      )}

                      <a
                        href="https://github.com/Tadi-san"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        title="Inspect Code on GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom GitHub CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-dark-900 via-dark-850 to-indigo-950/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 text-brand-indigo border border-indigo-500/20">
              <GithubIcon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">
                Looking for more source code & system implementations?
              </h4>
              <p className="text-slate-400 text-sm mt-0.5">
                Explore additional repositories, custom autograd prototypes, and open-source tooling on my GitHub.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/Tadi-san"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-dark-800 hover:bg-dark-750 border border-white/15 hover:border-brand-indigo/50 transition-all text-sm shrink-0"
          >
            <span>Visit @Tadi-san on GitHub</span>
            <ExternalLink className="w-4 h-4 text-brand-cyan" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
