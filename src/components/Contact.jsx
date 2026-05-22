'use client';

import { useState } from "react";
import { submitContactForm } from "../app/actions";
import { Mail, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";
import { motion } from "framer-motion";

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

  return (
    <section id="contact" className="py-24 bg-slate-50/50 dark:bg-slate-900/30 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 dark:text-white">
            Contact Me
          </h3>
          <div className="w-12 h-1 bg-rose-600 dark:bg-rose-500 rounded-full mt-4" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h4 className="text-xl font-display font-bold text-slate-900 dark:text-white mb-2">
                Let&apos;s Build Together
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Have an interesting machine learning idea, a full-stack platform project, or just want to connect? Drop a message, and I will get back to you as soon as possible.
              </p>
            </div>

            {/* Email Box */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 shadow-sm">
              <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                  Direct Email
                </span>
                <a
                  href="mailto:piasmajumdar@gmail.com"
                  className="text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  piasmajumdar@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links List */}
            <div className="space-y-4">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Follow My Profiles
              </h5>
              
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/in/piasmajumdar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:border-rose-100 dark:hover:border-rose-900/20 transition-all hover:scale-105 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://instagram.com/pias.majumdar.56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:border-rose-100 dark:hover:border-rose-900/20 transition-all hover:scale-105 shadow-sm"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>

                <a
                  href="https://facebook.com/pias.majumdar.56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 flex items-center justify-center text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 hover:border-rose-100 dark:hover:border-rose-900/20 transition-all hover:scale-105 shadow-sm"
                  aria-label="Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Message Submission Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 p-8 rounded-3xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Grid: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 transition-colors text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or message..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/30 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-rose-500 dark:focus:border-rose-500 transition-colors text-sm resize-none"
                />
              </div>

              {/* Status Banner */}
              {status.message && (
                <div
                  className={`flex items-start gap-3 p-4 rounded-xl text-sm ${
                    status.success
                      ? "bg-emerald-50 border border-emerald-200 text-emerald-800 dark:bg-emerald-950/30 dark:border-emerald-900/30 dark:text-emerald-400"
                      : "bg-red-50 border border-red-200 text-red-800 dark:bg-red-950/30 dark:border-red-900/30 dark:text-red-400"
                  }`}
                >
                  {status.success ? (
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium hover:from-rose-600 hover:to-red-700 transition-all shadow-md shadow-red-500/20 active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status.submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
