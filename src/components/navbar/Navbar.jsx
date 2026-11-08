import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { 
  Menu, 
  X, 
  Download, 
  Mail, 
  Terminal,
  ArrowLeft
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about", sectionId: "about" },
  { name: "Experience", href: "#experience", sectionId: "experience" },
  { name: "Projects", href: "#projects", sectionId: "projects" },
  { name: "Skills", href: "#skills", sectionId: "skills" },
  { name: "Achievements", href: "#achievements", sectionId: "achievements" },
  { name: "Contact", href: "#contact", sectionId: "contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isProjectView, navigateToHome } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isProjectView
          ? "bg-dark-900/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              onClick={handleLogoClick}
              className="group flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 p-[1px] shadow-glow">
                <div className="w-full h-full bg-dark-950 rounded-[11px] flex items-center justify-center group-hover:bg-dark-900 transition-colors">
                  <Terminal className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-white group-hover:text-brand-cyan transition-colors">
                  Tadiwos<span className="text-brand-indigo">.</span>dev
                </span>
                <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-mono tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for roles
                </span>
              </div>
            </a>

            {/* If on project view, show quick back badge */}
            {isProjectView && (
              <button
                onClick={() => navigateToHome("projects")}
                className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/70 text-indigo-300 border border-indigo-500/30 text-xs font-mono hover:bg-indigo-900/80 hover:text-white transition-all"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Projects Directory</span>
              </button>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-dark-850/60 border border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-dark-800 hover:bg-dark-750 border border-white/10 rounded-lg transition-all shadow-sm hover:border-brand-indigo/50"
            >
              <Download className="w-3.5 h-3.5 text-brand-cyan" />
              Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg shadow-glow hover:shadow-glowViolet transition-all duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-200 bg-dark-800 border border-white/10 rounded-lg"
            >
              <Download className="w-3 h-3 text-brand-cyan" />
              CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-white/10 bg-dark-900/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-2"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.sectionId)}
                  className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-4 mt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={personalInfo.resumePath}
                download
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-dark-800 border border-white/15 rounded-xl"
              >
                <Download className="w-4 h-4 text-brand-cyan" />
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-glow"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
              <div className="flex items-center justify-center gap-4 pt-2 text-slate-400">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
