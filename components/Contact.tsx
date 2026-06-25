"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative px-6 md:px-10 lg:px-14 py-32 scroll-mt-20 diagonal-divider--alt"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <span className="w-6 h-px bg-[var(--accent)]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--accent)]">
            Contact
          </span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left */}
          <motion.div variants={itemVariants}>
            <h2 className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-bold uppercase leading-[0.9] tracking-tight mb-6">
              <span className="text-[var(--text)]">Let&apos;s Work</span>
              <br />
              <span className="text-[var(--text-muted)]">Together</span>
            </h2>

            <p className="text-sm text-[var(--text-muted)] font-light leading-relaxed mb-8 max-w-sm">
              Third-year Software Engineering student at IUT with a 3.96 CGPA.
              Open to internship opportunities and collaborations.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-2">
                  Email
                </h3>
                <a
                  href="mailto:musaddiq@iut-dhaka.edu"
                  className="text-lg font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  musaddiq@iut-dhaka.edu
                </a>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+8801791751468"
                  className="text-lg font-medium text-[var(--text)] hover:text-[var(--accent)] transition-colors duration-300"
                >
                  +880 1791751468
                </a>
              </div>

              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-3">
                  Social
                </h3>
                <div className="flex gap-6">
                  {[
                    { name: "GitHub", url: "https://github.com/musaddiq-rafi" },
                    { name: "LinkedIn", url: "https://linkedin.com/in/musaddiq-rafi" },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] uppercase tracking-[0.2em] font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] font-medium text-[var(--text-muted)] mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border border-[var(--border)] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-4 px-8 py-4 border border-[var(--accent)] text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[var(--accent)] hover:text-white transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "sending" ? (
                  "Sending..."
                ) : status === "sent" ? (
                  "Message Sent!"
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-[var(--accent)]"
                >
                  Thank you! Check your email for a confirmation.
                </motion.p>
              )}

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500"
                >
                  Something went wrong. Please try again or email directly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
