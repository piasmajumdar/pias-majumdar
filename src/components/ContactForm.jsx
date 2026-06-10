"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactForm({ onSuccess }) {
  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: null, message: "Sending...." });

    try {
      const formData = new FormData(e.target);
      const apiKey = process.env.NEXT_PUBLIC_WEB3_FORM_API || process.env.WEB3_FORM_API;
      formData.append("access_key", apiKey || "");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setStatus({
          submitting: false,
          success: true,
          message: "Message Sent Successfully"
        });
        e.target.reset();
        if (onSuccess) {
          setTimeout(() => {
            onSuccess();
          }, 1500);
        }
      } else {
        setStatus({
          submitting: false,
          success: false,
          message: "Error"
        });
      }
    } catch (error) {
      console.error("Submission error.");
      setStatus({
        submitting: false,
        success: false,
        message: "Failed to connect to server. Please try again."
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Grid: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="form-name" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
            Full Name
          </label>
          <input
            type="text"
            id="form-name"
            name="name"
            required
            placeholder="e.g. John Doe"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/40 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="form-email" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
            Email Address
          </label>
          <input
            type="email"
            id="form-email"
            name="email"
            required
            placeholder="john@example.com"
            className="w-full px-4 py-3.5 rounded-2xl border border-zinc-200 bg-zinc-50/40 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all text-sm font-medium"
          />
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="form-message" className="text-xs font-bold text-zinc-700 tracking-wide uppercase">
          Your Message
        </label>
        <textarea
          id="form-message"
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
  );
}
