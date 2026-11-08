import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../../data/portfolioData";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Clock, 
  Sparkles, 
  AlertCircle,
  Loader2
} from "lucide-react";

const Contact = () => {
  const formRef = useRef();
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    emailjs
      .sendForm(
        "service_p46n1y9",
        "template_u77ykui",
        formRef.current,
        "yDsPElxZRjQuhO9BU"
      )
      .then(
        () => {
          setStatus("success");
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("error");
          setErrorMessage(
            "Direct transmission failed. Please email me directly at " + personalInfo.email
          );
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dark-900/60 bg-grid-pattern">
      {/* Background accents */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

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
            Let&apos;s Collaborate
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
          >
            Get In Touch &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
              Build Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Have a distributed ML challenge, high-throughput backend requirement, 
            or high-impact engineering role? Let&apos;s connect.
          </motion.p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Cards & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-Click Copy */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-brand-indigo/40 transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-brand-indigo border border-indigo-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-white font-semibold text-sm sm:text-base hover:text-brand-cyan transition-colors block mt-0.5 break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
              {copied && (
                <div className="text-xs text-emerald-400 mt-2 font-mono flex items-center gap-1">
                  ✓ Copied email to clipboard!
                </div>
              )}
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-brand-indigo/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-brand-cyan border border-cyan-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Phone / WhatsApp
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-white font-semibold text-sm sm:text-base hover:text-brand-cyan transition-colors block mt-0.5"
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Timezone Card */}
            <div className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-brand-indigo/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Location & Timezone
                  </div>
                  <div className="text-white font-semibold text-sm sm:text-base mt-0.5">
                    Addis Ababa, Ethiopia
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>UTC+3 (East Africa Time)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Banner */}
            <div className="p-6 rounded-2xl bg-dark-850/80 border border-white/10 flex items-center justify-between">
              <span className="text-sm font-semibold text-white">Find me on</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-800 hover:bg-dark-750 text-slate-300 hover:text-white border border-white/5 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 shadow-card">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Fill out the form below and it will be delivered directly to my inbox.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Subject / Project Context
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="ML Systems Collaboration / Full-Stack Project"
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Hi Tadiwos, I'd like to discuss a project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-sm transition-colors resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-sm flex items-center gap-2">
                    <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>Your message has been sent successfully! I will reply shortly.</span>
                  </div>
                )}

                {status === "error" && (
                  <div className="p-4 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-sm flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-glow hover:shadow-glowViolet transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-60 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
