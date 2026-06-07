import { FormEvent, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_x';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_x';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_x';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (!SERVICE_ID.includes('service_')) return;
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form);
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-5 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold text-white">Let&apos;s connect on your next product initiative.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Send a message if you are looking for a frontend engineer who can deliver high-quality interfaces with speed, structure, and polish.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
          <motion.form initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-white/70">
                <span>Name</span>
                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required className="w-full rounded-3xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 text-white outline-none transition focus:border-accent" />
              </label>
              <label className="space-y-2 text-sm text-white/70">
                <span>Email</span>
                <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required className="w-full rounded-3xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 text-white outline-none transition focus:border-accent" />
              </label>
            </div>
            <label className="space-y-2 text-sm text-white/70">
              <span>Subject</span>
              <input value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} required className="w-full rounded-3xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 text-white outline-none transition focus:border-accent" />
            </label>
            <label className="space-y-2 text-sm text-white/70">
              <span>Message</span>
              <textarea value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} required rows={6} className="w-full rounded-3xl border border-white/10 bg-[#0f172a]/90 px-4 py-3 text-white outline-none transition focus:border-accent" />
            </label>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-accentHover">
                Let&apos;s Connect
              </button>
              <p className="text-sm text-white/60">
                {status === 'success' && 'Message sent — I will reply soon.'}
                {status === 'error' && 'Something went wrong. Please try again later.'}
                {status === 'sending' && 'Sending message...'}
              </p>
            </div>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-[#111111]/90 p-8 shadow-soft">
            <div className="space-y-5 text-white/75">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Reach Out</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">Ready to build something impactful.</h3>
              </div>
              <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
                <div>
                  <p className="text-sm text-white/50">Email</p>
                  <p className="mt-2 text-base text-white">hello@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-white/50">Availability</p>
                  <p className="mt-2 text-base text-white">Open to internships and frontend roles.</p>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-[#0b1120]/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Quick metrics</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-white/80">
                    <p className="font-semibold text-white">Fast response</p>
                    <p className="mt-2">Typically replies within 24 hours.</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-white/80">
                    <p className="font-semibold text-white">EmailJS ready</p>
                    <p className="mt-2">Configure VITE_EMAILJS_* values in .env.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
