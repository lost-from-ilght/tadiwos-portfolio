import { motion } from "framer-motion";
import { education, spokenLanguages } from "../../data/portfolioData";
import { 
  Cpu, 
  Server, 
  Smartphone, 
  GraduationCap, 
  Sparkles, 
  CheckCircle2,
  Globe
} from "lucide-react";

const pillars = [
  {
    icon: Cpu,
    title: "ML Systems & Low-Level Tensors",
    description: "Specialized in PyTorch distributed training, ATen API C++ extensions, custom autograd functions, KV-cache optimization, and quantized LLM serving with vLLM.",
    tags: ["PyTorch", "ATen C++", "torch.distributed", "vLLM", "CUDA", "SFT"],
    color: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    icon: Server,
    title: "High-Throughput Backends",
    description: "Architecting concurrent backend services in Go and Node.js. Experienced in microservices, low-latency WebSockets streaming, Better-Auth, and Dockerized Linux setups behind Nginx.",
    tags: ["Go (Golang)", "Node.js", "Express", "WebSockets", "Docker", "Nginx"],
    color: "from-indigo-500/20 to-cyan-500/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
  },
  {
    icon: Smartphone,
    title: "Super-Apps & Production SaaS",
    description: "Building production multi-tenant web platforms and mobile super-apps with embedded mini-apps. Expert in African and global payment rails (Telebirr, official Arifpay NPM SDK, Stripe).",
    tags: ["React Native", "Next.js", "TypeScript", "Telebirr", "Arifpay", "MongoDB"],
    color: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/30",
    iconColor: "text-cyan-400",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-950">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-mono uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Engineering Philosophy
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering across the stack,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              from silicon to screen.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            I combine rigorous analytical thinking with hands-on systems programming. 
            Whether optimizing gradient-reduction steps in distributed PyTorch clusters, 
            authoring official fintech libraries, or engineering enterprise React Native super-apps, 
            I prioritize speed, reliability, and measurable product impact.
          </motion.p>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${pillar.color} border ${pillar.border} backdrop-blur-xl relative flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 shadow-card`}
              >
                <div>
                  <div className={`p-3 rounded-xl bg-dark-900/80 w-fit mb-5 ${pillar.iconColor} border border-white/10 shadow-sm`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-dark-900/60 text-slate-200 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Background & Education Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl glass-panel p-8 sm:p-10 border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-brand-cyan text-xs font-mono uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                Engineering Foundation
              </div>
              <h3 className="text-2xl font-bold text-white">
                Software Engineering & Systems Mastery
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                My education in Software Engineering at Addis Ababa Science and Technology University (AASTU) 
                instilled strong foundations in algorithms, software architecture, and systems engineering. 
                I paired this academic rigor with dedicated hands-on engineering: building custom tensor kernels, 
                high-throughput Go backends, and production full-stack systems from scratch since 2019.
              </p>
              
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Tensor Numerical Analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Distributed Computing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Published NPM Author</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Hackathon First Place Lead</span>
                </div>
              </div>

              {/* Spoken Languages */}
              <div className="pt-4 border-t border-white/5 flex items-center gap-2 flex-wrap text-xs">
                <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                  <Globe className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Languages:</span>
                </div>
                {spokenLanguages.map((lang) => (
                  <span
                    key={lang.language}
                    className="px-2.5 py-1 rounded-md bg-dark-900/80 border border-white/10 text-slate-200 font-mono text-[11px]"
                  >
                    <strong className="text-white font-medium">{lang.language}</strong> ({lang.level})
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {education.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-dark-900/70 border border-white/5 hover:border-brand-indigo/30 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                    <span className="text-sm font-bold text-white">
                      {item.school}
                    </span>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                      {item.period}
                    </span>
                  </div>
                  <div className="text-xs font-medium text-brand-cyan mb-2">
                    {item.program}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
