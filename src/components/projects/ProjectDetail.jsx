import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, personalInfo } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { GithubIcon } from "../common/Icons";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  Server,
  Zap,
  CheckCircle2,
  Maximize2,
  X,
  Share2,
  Calendar,
  UserCheck,
  Globe,
  Code2,
  Eye,
  Lock
} from "lucide-react";

const ProjectDetail = () => {
  const { currentProjectId, navigateToProject, navigateToHome } = useRouter();
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find current project
  const projectIndex = projects.findIndex((p) => p.id === currentProjectId);
  const project = projects[projectIndex] || projects[0];

  // Reset active screenshot when project changes
  useEffect(() => {
    setActiveScreenshotIdx(0);
    setLightboxOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentProjectId]);

  // Next and Previous projects
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [{ url: project.image, title: project.title, caption: project.description }];

  const currentScreenshot = screenshots[activeScreenshotIdx] || screenshots[0];

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-200 pt-24 pb-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation / Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
          <button
            onClick={() => navigateToHome("projects")}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-900/80 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 hover:border-indigo-500/30 transition-all group font-medium text-sm"
          >
            <ArrowLeft className="w-4 h-4 text-indigo-400 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Projects</span>
          </button>

          {/* Breadcrumb indicator */}
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
            <button
              onClick={() => navigateToHome()}
              className="hover:text-white transition-colors"
            >
              Portfolio
            </button>
            <span>/</span>
            <button
              onClick={() => navigateToHome("projects")}
              className="hover:text-white transition-colors"
            >
              Projects
            </button>
            <span>/</span>
            <span className="text-cyan-400 font-semibold truncate max-w-[200px]">
              {project.title}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-dark-900 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all text-xs font-semibold"
              title="Copy shareable link"
            >
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>{copiedLink ? "Link Copied!" : "Share"}</span>
            </button>

            {project.links && project.links[0] && (
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-glow transition-all"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400">
              {project.category}
            </span>

            {project.featured && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Flagship Product
              </span>
            )}

            {project.timeline && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-dark-900 text-slate-400 border border-white/10 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {project.timeline}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-200 to-cyan-300 font-medium mb-6 max-w-4xl">
            {project.subtitle}
          </p>

          {project.metrics && (
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-dark-900/90 border border-emerald-500/30 text-emerald-300 font-mono text-xs sm:text-sm shadow-card">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{project.metrics}</span>
            </div>
          )}
        </motion.div>

        {/* Interactive Screenshot Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <div className="rounded-3xl border border-white/10 bg-dark-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
            
            {/* Browser Header Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-dark-950/90 border-b border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* URL Bar Mockup */}
              <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-dark-900/80 border border-white/10 text-xs font-mono text-slate-300">
                <Lock className="w-3 h-3 text-emerald-400" />
                <span className="truncate">
                  {project.links && project.links[0] ? project.links[0].url : `https://${project.id}.app`}
                </span>
              </div>

              {/* Zoom & Direct Visit */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                  title="Expand Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                {project.links && project.links[0] && (
                  <a
                    href={project.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Main Screenshot Display */}
            <div className="relative group bg-dark-950/60 overflow-hidden min-h-[300px] sm:min-h-[480px] lg:min-h-[580px] flex items-center justify-center">
              <img
                src={currentScreenshot.url}
                alt={currentScreenshot.title || project.title}
                className="w-full h-auto max-h-[700px] object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.01]"
                onClick={() => setLightboxOpen(true)}
              />

              {/* Overlay hover prompt */}
              <div
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 bg-dark-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-zoom-in pointer-events-none"
              >
                <span className="px-4 py-2 rounded-xl bg-dark-900/90 text-white font-medium text-sm border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-glow">
                  <Eye className="w-4 h-4 text-cyan-400" />
                  Click to Expand High-Resolution View
                </span>
              </div>
            </div>

            {/* Caption & Screenshot Selector Bar */}
            <div className="p-4 sm:p-6 bg-dark-900/90 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  {currentScreenshot.title || "Production Screenshot"}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-0.5 max-w-2xl">
                  {currentScreenshot.caption || project.description}
                </p>
              </div>

              {/* Multi-screenshot tabs / pills */}
              {screenshots.length > 1 && (
                <div className="flex items-center gap-2 self-stretch sm:self-auto overflow-x-auto pb-1 sm:pb-0">
                  {screenshots.map((s, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveScreenshotIdx(idx)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                        activeScreenshotIdx === idx
                          ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-glow border border-indigo-400/30"
                          : "bg-dark-850 text-slate-400 hover:text-white hover:bg-dark-800 border border-white/5"
                      }`}
                    >
                      {s.title ? s.title.split("—")[0].trim() : `Screen ${idx + 1}`}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Visual Thumbnail Strip */}
            {screenshots.length > 1 && (
              <div className="px-4 sm:px-6 py-3.5 bg-dark-950/80 border-t border-white/5 flex items-center gap-3 overflow-x-auto">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider shrink-0 mr-1">
                  Screens ({screenshots.length}):
                </span>
                {screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`relative flex-shrink-0 w-24 sm:w-28 h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all group ${
                      activeScreenshotIdx === idx
                        ? "border-cyan-400 ring-2 ring-cyan-500/40 shadow-glow"
                        : "border-white/10 hover:border-white/30 opacity-60 hover:opacity-100"
                    }`}
                    title={s.title}
                  >
                    <img
                      src={s.url}
                      alt={s.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-transparent transition-colors" />
                    <span className="absolute bottom-1 right-1 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-dark-950/90 text-white border border-white/10">
                      {idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

          </div>
        </motion.div>

        {/* Detailed Case Study / Deep-Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          
          {/* Main Content (2 Columns) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Executive Overview */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-card">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="p-2 rounded-xl bg-indigo-500/10 text-brand-indigo border border-indigo-500/20">
                  <Layers className="w-5 h-5 text-indigo-400" />
                </span>
                Executive Overview
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {project.overview || project.description}
              </p>
            </section>

            {/* The Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.challenge && (
                  <div className="glass-panel rounded-3xl p-6 border border-rose-500/20 bg-rose-950/10 shadow-card">
                    <h4 className="text-lg font-bold text-rose-300 mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      The Engineering Challenge
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {project.solution && (
                  <div className="glass-panel rounded-3xl p-6 border border-emerald-500/20 bg-emerald-950/10 shadow-card">
                    <h4 className="text-lg font-bold text-emerald-300 mb-2 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                      The Architectural Solution
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Key Features & Capabilities */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-card">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  Key Features & Capabilities
                </h3>

                <div className="space-y-4">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-dark-900/80 border border-white/5 hover:border-indigo-500/20 transition-colors flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="text-white font-semibold text-base mb-1">
                          {feat.title}
                        </h5>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* System Architecture & Technical Pipeline */}
            {project.architecture && project.architecture.length > 0 && (
              <section className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 shadow-card">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Cpu className="w-5 h-5" />
                  </span>
                  System Architecture & Pipeline
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.architecture.map((arch, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-dark-900/90 border border-white/5 hover:border-purple-500/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                          Layer {idx + 1}
                        </div>
                        <h5 className="text-white font-bold text-base mb-2">
                          {arch.layer}
                        </h5>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {arch.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Sidebar / Meta Specifications (1 Column) */}
          <div className="space-y-6">
            
            {/* Quick Actions & Links */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-card">
              <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Direct Project Access
              </h4>

              <div className="space-y-3">
                {project.links && project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-200 hover:text-white border border-indigo-500/30 font-semibold text-sm transition-all group"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}

                <a
                  href="https://github.com/Tadi-san"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-dark-900 hover:bg-dark-800 text-slate-300 hover:text-white border border-white/10 font-semibold text-sm transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    Inspect on GitHub
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Performance Stats Cards */}
            {project.stats && project.stats.length > 0 && (
              <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-card">
                <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Impact & Key Metrics
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {project.stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-dark-900/90 border border-white/5"
                    >
                      <div className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-white mt-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                        {stat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Breakdown */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-card">
              <h4 className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-indigo-400" />
                Technologies & Tools
              </h4>

              {project.techStack ? (
                <div className="space-y-4">
                  {Object.entries(project.techStack).map(([category, items]) => (
                    <div key={category}>
                      <div className="text-[11px] font-mono uppercase text-slate-400 tracking-wider mb-2">
                        {category}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-900 text-slate-200 border border-white/5"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-dark-900 text-slate-200 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Project Metadata Card */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10 shadow-card space-y-3.5">
              <h4 className="text-white font-bold text-base mb-1">
                Project Metadata
              </h4>

              {project.role && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Role</span>
                  <span className="font-semibold text-white text-right">{project.role}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Category</span>
                <span className="font-semibold text-cyan-400 text-right">{project.category}</span>
              </div>

              {project.timeline && (
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Timeline</span>
                  <span className="font-semibold text-white text-right">{project.timeline}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Lead Engineer</span>
                <span className="font-semibold text-white text-right">{personalInfo.name}</span>
              </div>
            </div>

          </div>

        </div>

        {/* Project Navigation Switcher (Previous / Next) */}
        <div className="pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Previous Project Card */}
            <button
              onClick={() => navigateToProject(prevProject.id)}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/10 text-left flex items-center gap-4 group transition-all"
            >
              <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors shrink-0">
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Previous Project
                </div>
                <div className="text-white font-bold text-base truncate group-hover:text-cyan-400 transition-colors">
                  {prevProject.title}
                </div>
                <div className="text-xs text-slate-400 truncate">
                  {prevProject.subtitle}
                </div>
              </div>
            </button>

            {/* Next Project Card */}
            <button
              onClick={() => navigateToProject(nextProject.id)}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/10 text-right flex items-center justify-end gap-4 group transition-all"
            >
              <div className="min-w-0">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                  Next Project
                </div>
                <div className="text-white font-bold text-base truncate group-hover:text-indigo-400 transition-colors">
                  {nextProject.title}
                </div>
                <div className="text-xs text-slate-400 truncate">
                  {nextProject.subtitle}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

          </div>
        </div>

      </div>

      {/* Lightbox Modal for High-Resolution View */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-dark-900/80 border border-white/20 rounded-full transition-colors"
                title="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={currentScreenshot.url}
                alt={currentScreenshot.title || project.title}
                className="w-auto h-auto max-h-[80vh] max-w-full rounded-2xl border border-white/10 shadow-2xl object-contain"
              />

              <div className="mt-4 text-center">
                <h4 className="text-white font-semibold text-base">
                  {currentScreenshot.title || project.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                  {currentScreenshot.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default ProjectDetail;

