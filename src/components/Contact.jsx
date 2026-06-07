"use client";

import { useState } from "react";
import { submitContactForm } from "../app/actions";
import { Mail, Send, Loader2, CheckCircle, AlertCircle, MapPin, Sparkles, MessageSquare } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: "" });

    const formData = new FormData(e.target);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus({
        submitting: false,
        success: true,
        message: result.message
      });
      e.target.reset();
    } else {
      setStatus({
        submitting: false,
        success: false,
        message: result.message
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-white scroll-mt-24">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] pointer-events-none -z-10 -translate-x-[20%] translate-y-[20%] opacity-40">
        <div className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-orange-600/10 left-0 bottom-0" />
        <div className="absolute w-[400px] h-[400px] rounded-full border-[1.5px] border-orange-600/10 left-0 bottom-0" />
        <div className="absolute w-[500px] h-[500px] rounded-full border-[1.5px] border-orange-600/10 left-0 bottom-0 animate-[spin_100s_linear_infinite]" />
      </div>

      <div className="absolute top-24 left-10 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />
      <div className="absolute bottom-24 right-10 w-24 h-24 pointer-events-none -z-10 opacity-20 bg-[radial-gradient(#ff5e14_1.5px,transparent_1.5px)] [background-size:12px_12px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
            <span className="text-orange-600 font-bold text-xs uppercase tracking-widest">
              GET IN TOUCH
            </span>
            <div className="w-6 h-[1.5px] bg-orange-600/40" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-tight">
            Let's build something <span className="text-orange-600">extraordinary</span>
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-500 text-sm md:text-base leading-relaxed font-medium">
            Have an interesting AI model integration, a web platform development query, or just want to discuss code? Hit me up.
          </p>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
        >
          {/* Left Side: Contact Information & Cards */}
          <motion.div variants={cardVariants} className="lg:col-span-5 space-y-8">
            {/* Collaborate Card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white rounded-[32px] p-8 shadow-xl border border-zinc-800/80 group">
              {/* Background ambient glow inside card */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-600/20 rounded-full blur-[40px] pointer-events-none group-hover:scale-125 transition-transform duration-500" />

              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Let's Collaborate</span>
              </div>

              <h3 className="text-2xl font-black mb-4 tracking-tight leading-snug">
                Turning ideas into interactive code & architectures.
              </h3>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
                I'm active for freelance opportunities, full-stack consultations, deep learning model deployments, or interesting open-source contributions.
              </p>

              <div className="flex items-center gap-3 text-xs text-zinc-400 font-bold uppercase tracking-wider">
                <MapPin size={14} className="text-orange-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Email Info Box */}
            <div className="flex items-center gap-5 p-6 rounded-[24px] bg-white border border-zinc-200/60 shadow-[0_4px_25px_rgba(0,0,0,0.01)] hover:border-orange-200/50 hover:shadow-[0_8px_30px_rgba(234,88,12,0.04)] transition-all duration-300 relative group">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100/30 flex items-center justify-center text-orange-600 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={22} strokeWidth={2} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest block mb-0.5">
                  Direct Email
                </span>
                <a
                  href="mailto:piasmajumdar@gmail.com"
                  className="text-base font-extrabold text-zinc-800 hover:text-orange-600 transition-colors"
                >
                  piasmajumdar@gmail.com
                </a>
              </div>
            </div>

            {/* Social Profile links */}
            <div className="space-y-4">
              <h5 className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                Professional Networks
              </h5>

              <div className="flex gap-4">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/piasmajumdar/", label: "LinkedIn" },
                  { icon: FaGithub, href: "https://github.com/piasmajumdar", label: "GitHub" },
                  { icon: FaInstagram, href: "https://instagram.com/pias.majumdar.56", label: "Instagram" },
                  { icon: FaFacebook, href: "https://facebook.com/pias.majumdar.56", label: "Facebook" }
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500/50 shadow-sm hover:shadow-[0_8px_20px_rgba(234,88,12,0.06)] transition-all cursor-pointer"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div variants={cardVariants} className="lg:col-span-7">
            <div className="bg-white/80 backdrop-blur-xl border border-zinc-200/60 p-8 sm:p-10 rounded-[32px] shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-6 border-b border-zinc-100 pb-4">
                <MessageSquare className="text-orange-600" size={20} />
                <h4 className="text-zinc-800 font-extrabold text-lg tracking-tight">Send a quick message</h4>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Grid: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/40 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/40 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Write details about your project, idea, or questions..."
                    className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/40 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium resize-none"
                  />
                </div>

                {/* Status Banners */}
                <AnimatePresence mode="wait">
                  {status.message && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`flex items-start gap-3 p-4 rounded-2xl text-sm font-medium ${status.success
                          ? "bg-emerald-50 border border-emerald-100 text-emerald-800"
                          : "bg-red-50 border border-red-100 text-red-800"
                        }`}
                    >
                      {status.success ? (
                        <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-600" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-600" />
                      )}
                      <span>{status.message}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status.submitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold tracking-wide shadow-lg shadow-orange-500/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:shadow-orange-500/30 transition-all duration-300 text-sm uppercase"
                >
                  {status.submitting ? (
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
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
