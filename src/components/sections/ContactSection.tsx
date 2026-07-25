"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormData } from "@/lib/validators";
import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { portfolioData } from "@/data/portfolioData";
import { Mail, Phone, MapPin, Send, Loader2, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";
import CustomToast from "../ui/CustomToast";

export default function ContactSection() {
  const { socials } = portfolioData.developer;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastState, setToastState] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success",
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });

        setToastState({
          show: true,
          message: "Thank you! Your message has been sent successfully. I will get back to you soon.",
          type: "success",
        });
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (err) {
      setToastState({
        show: true,
        message: "Oops! Something went wrong. Please try emailing directly.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Connect & Collaborate"
          subtitle="Have an exciting project, data engineering role, or collaboration idea? Send a message!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Contact Information</span>
              </h3>

              <div className="space-y-4">
                {/* Email Card */}
                <a
                  href={`mailto:${socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Direct Email</div>
                    <div className="text-sm font-semibold text-slate-100 group-hover:text-blue-400">
                      {socials.email}
                    </div>
                  </div>
                </a>

                {/* Phone Card */}
                {socials.phone && (
                  <a
                    href={`tel:${socials.phone}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone & WhatsApp</div>
                      <div className="text-sm font-semibold text-slate-100 group-hover:text-emerald-400">
                        {socials.phone}
                      </div>
                    </div>
                  </a>
                )}

                {/* Location Card */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-100">
                      {socials.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Social Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-blue-400 hover:border-slate-600 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  {socials.twitter && (
                    <a
                      href={socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-slate-600 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: React Hook Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="e.g. Data Engineering Opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                />
                {errors.subject && (
                  <p className="text-xs text-rose-400">{errors.subject.message}</p>
                )}
              </div>

              {/* Message Area */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-800/60 border border-slate-700/70 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-xs text-rose-400">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
              >
                {isSubmitting ? (
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
          </motion.div>

        </div>
      </div>

      <CustomToast
        show={toastState.show}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState((prev) => ({ ...prev, show: false }))}
      />
    </section>
  );
}
