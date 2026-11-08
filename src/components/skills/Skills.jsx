import { motion } from "framer-motion";
import { skillCategories } from "../../data/portfolioData";
import { 
  Code2, 
  BrainCircuit, 
  Server, 
  Smartphone, 
  Database, 
  Layers, 
  Cpu, 
  CheckCircle2
} from "lucide-react";

const iconMap = {
  BrainCircuit: BrainCircuit,
  Code2: Code2,
  Server: Server,
  Smartphone: Smartphone,
  Database: Database,
  Layers: Layers,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-900/60 bg-grid-pattern">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Cpu className="w-3.5 h-3.5" />
            Technical Competencies
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Technology Matrix
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            A multi-layered stack bridging numerical computing and machine learning kernels 
            with resilient backends and elegant client applications.
          </motion.p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 sm:p-7 rounded-2xl glass-panel glass-panel-hover border border-white/10 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} text-white shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List with Badge Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl bg-dark-850/80 hover:bg-dark-800 border border-white/5 hover:border-white/15 transition-all w-full text-xs"
                      >
                        <span className="font-medium text-slate-200">
                          {skill.name}
                        </span>
                        <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${
                          skill.level === "Specialist"
                            ? "bg-purple-950/80 text-purple-300 border border-purple-500/30"
                            : skill.level === "Expert"
                            ? "bg-indigo-950/80 text-indigo-300 border border-indigo-500/30"
                            : "bg-cyan-950/80 text-cyan-300 border border-cyan-500/30"
                        }`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>{category.skills.length} core technologies</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Production tested
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
