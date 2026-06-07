"use client";

import { Cpu, ArrowUp, Mail, MapPin } from "lucide-react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa6";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Contact", href: "/#contact" }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-zinc-50 border-t border-zinc-200/50 py-16 relative overflow-hidden">
      {/* Decorative ambient background blur */}
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-orange-50/40 rounded-full blur-[80px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">

          {/* Brand/Signature */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-red-600 flex items-center justify-center text-white shadow-md shadow-orange-500/10 transition-transform duration-300 group-hover:scale-105">
                <span className="font-black text-sm tracking-tighter">PM</span>
              </div>
              <span className="font-display font-extrabold text-lg tracking-tight text-zinc-900 group-hover:text-orange-600 transition-colors">
                PIAS MAJUMDAR
              </span>
            </Link>
            <p className="text-xs text-zinc-500 max-w-sm leading-relaxed font-medium">
              Full-Stack Developer & AI Engineer passionate about building scalable web applications and intelligent AI systems. Specialized in deep learning, natural language processing, and modern full-stack architectures that transform complex ideas into impactful digital solutions.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col gap-2 pt-2 text-[11px] text-zinc-400 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <MapPin size={12} className="text-orange-600" />
                <span>Dhaka, Bangladesh</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-zinc-800 font-bold text-xs uppercase tracking-widest">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs font-semibold text-zinc-500 hover:text-orange-600 transition-colors py-0.5 select-none"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end">
            <h4 className="text-zinc-800 font-bold text-xs uppercase tracking-widest md:text-right w-full">
              Social Links
            </h4>

            {/* Social Icons */}
            <div className="flex gap-3.5 pt-1">
              <a
                href="https://www.linkedin.com/in/piasmajumdar/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://github.com/piasmajumdar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                aria-label="GitHub"
              >
                <FaGithub className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://instagram.com/pias.majumdar.56"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Instagram"
              >
                <FaInstagram className="w-4.5 h-4.5" />
              </a>

              <a
                href="https://facebook.com/pias.majumdar.56"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-orange-600 hover:border-orange-500 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Facebook"
              >
                <FaFacebook className="w-4.5 h-4.5" />
              </a>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-zinc-200 text-zinc-500 hover:text-orange-600 hover:border-orange-500 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-bold text-[11px] uppercase tracking-wider"
                aria-label="Back to top"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Copyright Line */}
        <div className="pt-8 border-t border-zinc-200 text-center">
          <p className="text-[11px] text-zinc-400 font-medium leading-relaxed">
            &copy; {new Date().getFullYear()} Pias Majumdar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
