import { personalInfo } from "../../data/portfolioData";
import { useRouter } from "../../context/RouterContext";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { 
  ArrowUp, 
  Terminal, 
  Mail, 
  Download
} from "lucide-react";

const Footer = () => {
  const { isProjectView, navigateToHome } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e, sectionId) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome(sectionId);
    }
  };

  const handleBrandClick = (e) => {
    if (isProjectView) {
      e.preventDefault();
      navigateToHome();
    }
  };

  return (
    <footer className="bg-dark-950 border-t border-white/10 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              onClick={handleBrandClick}
              className="flex items-center gap-2.5 text-white font-bold text-xl group"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center p-[1px]">
                <div className="w-full h-full bg-dark-950 rounded-[10px] overflow-hidden flex items-center justify-center">
                  <img
                    src="/hero1.png"
                    alt="Tadiwos"
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform"
                  />
                </div>
              </div>
              <span className="group-hover:text-brand-cyan transition-colors">Tadiwos Anegagregn</span>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack & ML Systems Developer specializing in distributed AI, 
              low-level PyTorch C++ kernels, concurrent Go backends, and multi-tenant SaaS.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/5 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/5 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white border border-white/5 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "about")}
                  className="hover:text-white transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => handleLinkClick(e, "experience")}
                  className="hover:text-white transition-colors"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                  className="hover:text-white transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleLinkClick(e, "skills")}
                  className="hover:text-white transition-colors"
                >
                  Skills Matrix
                </a>
              </li>
              <li>
                <a
                  href="#achievements"
                  onClick={(e) => handleLinkClick(e, "achievements")}
                  className="hover:text-white transition-colors"
                >
                  Grand Hackathon
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact Direct
                </a>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white">
              Curriculum Vitae
            </h4>
            <p className="text-xs text-slate-400">
              Download the complete up-to-date resume in PDF format.
            </p>
            <a
              href={personalInfo.resumePath}
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-brand-indigo/50 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-brand-cyan" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Tadiwos Anegagregn. Built with React & Tailwind CSS.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-900 hover:bg-dark-800 text-slate-400 hover:text-white border border-white/5 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
