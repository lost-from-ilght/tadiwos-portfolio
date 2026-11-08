import { motion } from "framer-motion";
import { honors } from "../../data/portfolioData";
import { 
  Trophy, 
  Award, 
  ExternalLink, 
  Users, 
  ShieldCheck, 
  Medal 
} from "lucide-react";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background accents */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Trophy className="w-3.5 h-3.5" />
            Honors & Contests
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Proven Leadership &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-indigo-400">
              National Recognition
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Recognized in premier national hackathons and prestigious technical competitions.
          </motion.p>
        </div>

        {/* Featured 1st Place Hackathon Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Main Hackathon Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 sm:p-10 rounded-3xl glass-panel border border-amber-500/30 relative overflow-hidden shadow-card"
          >
            <div className="absolute -top-10 -right-10 w-44 h-44 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-2.5 text-xs font-mono text-amber-400 mb-4">
              <Medal className="w-4 h-4" />
              <span>CHAMPIONSHIP VICTORY • 2024</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Startup Ethiopia Grand Hackathon
            </h3>

            <div className="text-sm font-semibold text-brand-cyan mb-4">
              Led Team to 1st Place Overall Victory
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Spearheaded the technical architecture and prototype engineering for our team, 
              navigating intensive rounds against top software teams across Ethiopia. 
              Delivered a production-ready solution that impressed government and venture leadership.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-dark-900 px-3 py-1.5 rounded-lg border border-white/5">
                <Users className="w-3.5 h-3.5 text-indigo-400" />
                <span>Team Lead & Lead Architect</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-lg border border-amber-500/30">
                <Trophy className="w-3.5 h-3.5" />
                <span>1st Place Winner 🥇</span>
              </div>
              <a
                href={honors[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 px-3.5 py-1.5 rounded-lg transition-colors ml-auto"
              >
                <span>View LinkedIn Post</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Hackathon Photo Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl group">
              <img
                src="/togetha.jpg"
                alt="Startup Ethiopia Grand Hackathon 2024 Winner Team"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-semibold text-white bg-dark-900/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
                  <span className="text-amber-400 font-bold block mb-0.5">Startup Ethiopia 2024 🥇</span>
                  Tadiwos & team celebrating the 1st place victory.
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Second Honor: Huawei ICT Competition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-brand-cyan border border-cyan-500/20 shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <h4 className="text-xl font-bold text-white">
                  Huawei ICT Competition 2024
                </h4>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  National Finalist 🏆
                </span>
              </div>
              <div className="text-xs font-mono text-slate-400 mb-2">
                Huawei Global ICT Academy • Cloud & Systems Track
              </div>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                Qualified as a National Finalist among leading technical universities in Ethiopia, 
                demonstrating high proficiency in computer networking, infrastructure orchestration, and cloud systems.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-lg border border-emerald-500/20 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Competitor
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
