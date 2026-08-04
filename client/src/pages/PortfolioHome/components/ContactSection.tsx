import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaCode,
  FaGithub,
  FaLinkedin,
  FaVoicemail,
} from "react-icons/fa";
import {FaLocationDot, FaWhatsapp,FaUser, FaTag, FaMessage } from "react-icons/fa6";
export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const errors = useMemo(() => {
    const e: Record<string, string> = {};

    if (!isValidEmail(form.email)) {
        e.email = 'Enter a valid email';
    }
    if (form.subject.trim().length < 3) {
        e.subject = 'Subject is too short';
    }
    if (form.message.trim().length < 10) {
        e.message = 'Message should be at least 10 characters';
    }
    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0 && status !== 'sending';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {

        setStatus("sending");

        const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

        const res = await axios.post(
          `${API_URL}/api/contact`,
          form,
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        // Axios resolves only on 2xx
        setStatus("sent");
        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
        return res;

    } catch (err: any) {
      setStatus("error");

      // Try to extract useful backend error message
      const backendMessage = err?.response?.data?.message;
      const backendErrors = err?.response?.data?.errors;
      const axiosMsg = err?.message;

      if (backendMessage) {
        setError(
          backendErrors && Array.isArray(backendErrors)
            ? `${backendMessage}: ${backendErrors.join(', ')}`
            : backendMessage
        );
      } else {
        setError(axiosMsg ? `Failed to send email: ${axiosMsg}` : "Failed to send email.");
      }
    }
}


  return (
  <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6 sm:pb-20 sm:pt-10">

    {/* Heading */}
    <div className="mb-12">
      <div className="text-xs font-semibold tracking-widest text-white/50">
        CONTACT
      </div>

      <h2 className="mt-2 text-5xl font-bold leading-tight md:text-6xl text-center">
        Let's Create
        <br />
        <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
          Something Amazing
        </span>
      </h2>
    </div>

    {/* GRID */}
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">

      {/* ================= FORM ================= */}

      <div className="relative rounded-[30px] bg-gradient-to-br from-fuchsia-500/30 via-violet-500/20 to-cyan-500/30 p-[1px] shadow-[0_0_50px_rgba(168,85,247,0.15)]">

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B0B10]/90 p-8 backdrop-blur-2xl"
        >

          {/* Background Glow */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <h3 className="text-3xl font-bold text-white">
              Send Me a Message
            </h3>

            <p className="mt-2 text-white/60">
              Have a project, internship, or collaboration in mind? I'd love to
              hear from you.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Field
              icon={<FaUser className="text-fuchsia-400"/>}
              label="Name"
              value={form.name}
              placeholder="Your Name"
              onChange={(v) => setForm((s) => ({ ...s, name: v }))}
            />

            <Field
              icon={<FaEnvelope className="text-cyan-400"/>}
              label="Email"
              value={form.email}
              placeholder="you@example.com"
              onChange={(v) => setForm((s) => ({ ...s, email: v }))}
            />
          </div>

          <div className="mt-6">
            <Field
              icon={<FaTag className="text-violet-400"/>}
              label="Subject"
              value={form.subject}
              placeholder="What's this about?"
              onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
            />
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium text-white/70">
              Message
            </label>

            <textarea
              value={form.message}
              onChange={(e) =>
                setForm((s) => ({
                  ...s,
                  message: e.target.value,
                }))
              }
              placeholder="Tell me about your project..."
              className="mt-3 min-h-[100px] w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white placeholder:text-white/30 backdrop-blur-xl transition-all duration-300 focus:border-fuchsia-500 focus:ring-4 focus:ring-fuchsia-500/20 focus:outline-none"
            />
          </div>

          <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="min-h-[24px]">

              {status === "sending" && (
                <p className="text-cyan-400">
                  ⏳ Sending your message...
                </p>
              )}

              {status === "sent" && (
                <p className="text-green-400">
                  ✅ Message Sent Successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-400">
                  ❌ {error}
                </p>
              )}

            </div>

            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={!canSubmit}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 px-8 py-4 font-semibold text-white shadow-[0_12px_40px_rgba(168,85,247,0.35)] transition-all duration-300 disabled:opacity-50"
            >
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[250%]" />

              <span className="relative z-10">
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent ✓"
                  : "Send Message 🚀"}
              </span>
            </motion.button>

          </div>

          <p className="mt-8 text-center text-xs text-white/40">
            Your information is kept private and will never be shared.
          </p>

        </motion.form>
      </div>

      {/* ================= CONTACT CARD ================= */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
  <div className="text-xs font-semibold tracking-[0.2em] text-white/50">
    DIRECT
  </div>

  <h3 className="mt-2 text-xl font-semibold text-white">
    Contact Details
  </h3>

  <div className="mt-6 space-y-5">

    {/* Email */}
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-fuchsia-500/40 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 text-xl text-fuchsia-400">
        <FaEnvelope />
      </div>

      <div>
        <p className="text-sm text-white/50">Email</p>
        <p className="text-white">
          utkarshanand634@gmail.com
        </p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-cyan-500/40 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-xl text-cyan-400">
        <FaPhoneAlt />
      </div>

      <div>
        <p className="text-sm text-white/50">Phone</p>
        <p className="text-white">
          +91 7903058030
        </p>
      </div>
    </div>

    {/* Specialties */}
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-violet-500/40 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 text-xl text-violet-400">
        <FaCode />
      </div>

      <div>
        <p className="text-sm text-white/50">Specialties</p>
        <p className="text-white">
          MERN • React • Java • DSA
        </p>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-orange-500/40 hover:bg-white/10">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-xl text-orange-400">
        <FaLocationDot />
      </div>

      <div>
        <p className="text-sm text-white/50">Location</p>
        <p className="text-white">
          Ranchi, Jharkhand, India
        </p>
      </div>
    </div>

  </div>

  {/* Social Icons */}
  <div className="mt-8">
    <p className="mb-4 text-sm text-white/50">Connect with me</p>

    <div className="flex gap-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:-translate-y-1 hover:border-fuchsia-500 hover:text-fuchsia-400"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://wa.me/917903058030"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500/10 hover:text-green-400"
      >
        <FaWhatsapp />
      </a>
      <a
        href="mailto:utkarshanand634@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xl text-white transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400"
      >
        <FaEnvelope />
      </a>
    </div>
  </div>
</div>

    </div>

  </section>
);
}
function Field({
  label,
  value,
  placeholder,
  required = false,
  icon,
  onChange
}: {
  label: string;
  value: string;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        {icon && <span className="text-base">{icon}</span>}
        <label className="text-sm font-medium text-white/70">
          {label}
        </label>
      </div>
      <input
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition focus:border-fuchsia-400/50"
      />
    </div>
  );
}