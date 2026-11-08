import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { 
  ArrowRight, 
  Download, 
  Terminal, 
  Trophy, 
  Mail, 
  Cpu, 
  CheckCircle2
} from "lucide-react";

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.subtitles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Hackathon Achievement & Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 shadow-glow"
            >
              <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                <Trophy className="w-3.5 h-3.5" />
                Grand Hackathon Champion 2024
              </span>
              <span className="text-white/20">•</span>
              <span className="text-cyan-300 font-mono">Distributed ML & Full-Stack</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              Hi, I’m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Dynamic Rotating Role Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 sm:h-12 flex items-center mt-2 mb-4 overflow-hidden"
            >
              <div className="flex items-center gap-2 font-mono text-lg sm:text-2xl text-cyan-300">
                <span className="text-brand-indigo">&gt;</span>
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="font-semibold"
                >
                  {personalInfo.subtitles[titleIndex]}
                </motion.span>
              </div>
            </motion.div>

            {/* Bio paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8"
            >
              Architecting high-performance web, mobile, and machine learning infrastructure. 
              Experienced in <span className="text-white font-medium">Go microservices</span>,{" "}
              <span className="text-white font-medium">PyTorch distributed training</span> with custom ATen C++ kernels, 
              and large-scale multi-tenant SaaS. Author of the official{" "}
              <span className="text-cyan-300 font-mono font-semibold">arifpay</span> NPM library.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-glow hover:shadow-glowViolet transition-all duration-300 text-sm group"
              >
                <span>View Flagship Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.resumePath}
                download
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-brand-indigo/50 transition-all duration-300 text-sm"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </motion.div>

            {/* Quick Tech Chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 w-full text-xs text-slate-400 font-mono"
            >
              <span className="text-slate-500 font-medium">Core Stack:</span>
              {["Go", "Next.js", "PyTorch", "C++", "React Native", "Docker", "Better-Auth", "Telebirr"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-dark-800/80 border border-white/5 text-slate-300 hover:border-brand-indigo/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Hero Visual / Profile & Key Highlights Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Outer decorative gradient border */}
              <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-cyan-500/40 shadow-2xl">
                <div className="rounded-[23px] bg-dark-900/95 backdrop-blur-xl p-6 overflow-hidden">
                  
                  {/* Top Header inside Card */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-brand-cyan" />
                      tadiwos-terminal
                    </span>
                  </div>

                  {/* Profile Image & Avatar with Glowing Badge */}
                  <div className="relative my-6 flex justify-center">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-glow">
                      <img
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2 right-2 text-center">
                        <span className="text-xs font-medium text-white/90 bg-dark-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 inline-block">
                          Full-Stack & ML Systems
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Grid inside Hero Card */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-indigo-500/10 text-brand-indigo shrink-0">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Systems & Distributed AI</div>
                        <div className="text-slate-400 text-[11px] font-sans">
                          ATen C++ extensions, custom autograd, and GPU model pipelines.
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-3">
                      <div className="p-1.5 rounded-lg bg-cyan-500/10 text-brand-cyan shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Production SaaS & Super Apps</div>
                        <div className="text-slate-400 text-[11px] font-sans">
                          Solstice Gym SaaS & Sheba Super App with Telebirr integration.
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 px-1 text-slate-400">
                      <span className="text-[11px] font-sans">📍 Addis Ababa, Ethiopia</span>
                      <div className="flex items-center gap-3">
                        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <GithubIcon className="w-4 h-4" />
                        </a>
                        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </a>
                        <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                          <Mail className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>

        </div>

        {/* Bottom Stats Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10"
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-cyan-300 font-mono">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {item.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {item.description}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
