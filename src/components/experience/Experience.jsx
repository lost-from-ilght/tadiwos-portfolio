import { motion } from "framer-motion";
import { experiences } from "../../data/portfolioData";
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  CheckCircle2
} from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-dark-900/60 bg-grid-pattern">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Career Journey
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Work Experience
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Delivering robust software systems across international consultancies, 
            frontier AI labs, and high-growth African startups.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500/50 to-cyan-500/20" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={`${exp.company}-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline node icon on desktop */}
                <div className="hidden md:flex absolute left-5 top-5 -translate-x-1/2 w-6 h-6 rounded-full bg-dark-950 border-2 border-indigo-500 items-center justify-center shadow-glow">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden">
                  
                  {/* Subtle top gradient accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl font-bold text-white tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.badge && (
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-brand-cyan font-semibold text-base mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 gap-1">
                      <div className="flex items-center gap-1.5 text-slate-300 bg-dark-800/80 px-2.5 py-1 rounded-md border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 my-5 text-sm sm:text-base text-slate-300">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className="p-1 rounded bg-indigo-500/10 text-brand-indigo mt-1 shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Technologies:</span>
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-dark-900/80 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
