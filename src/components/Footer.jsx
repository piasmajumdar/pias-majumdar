'use client';

import { Cpu, ArrowUp } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa6";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Brand/Signature */}
        <div className="md:col-span-4 space-y-3 text-center md:text-left">
          <a href="#" className="inline-flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-500 to-red-600 flex items-center justify-center text-white shadow-sm shadow-red-500/20">
              <Cpu className="w-4.5 h-4.5" />
            </div>
            <span className="font-display font-bold text-base tracking-tight text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
              PIAS MAJUMDAR
            </span>
          </a>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            AI/ML Engineer & Full Stack Web Developer.
            <br />
            Building intelligent, production-ready web products.
          </p>
        </div>

        {/* Quick Navigation Links */}
        <div className="md:col-span-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-slate-600 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons & Back to Top */}
        <div className="md:col-span-4 flex flex-col md:flex-row items-center justify-center md:justify-end gap-6">
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/piasmajumdar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-4.5 h-4.5" />
            </a>
            
            <a
              href="https://instagram.com/pias.majumdar.56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4.5 h-4.5" />
            </a>

            <a
              href="https://facebook.com/pias.majumdar.56"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-rose-600 dark:text-slate-400 dark:hover:text-rose-400 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="w-4.5 h-4.5" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-slate-600 dark:text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-200/20 dark:border-slate-800/50 text-center">
        <p className="text-[11px] text-slate-400 dark:text-slate-500">
          &copy; {new Date().getFullYear()} Pias Majumdar. All rights reserved. Built with Next.js, Tailwind CSS v4, and HeroUI.
        </p>
      </div>
    </footer>
  );
}
