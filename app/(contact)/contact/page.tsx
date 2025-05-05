'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <motion.div
      className="max-w-3xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full p-3 border rounded-md" />
        <input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-3 border rounded-md" />
        <textarea rows={5} placeholder="Your Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full p-3 border rounded-md" />
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md hover:scale-105 transition-transform">
          Send Message
        </button>
      </form>
    </motion.div>
  );
}
