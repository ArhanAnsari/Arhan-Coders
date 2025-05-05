'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-5xl font-bold mb-6 leading-tight"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Build Your Digital Presence with <br /> <span className="text-primary">Arhan Coders</span>
      </motion.h1>

      <motion.p
        className="text-lg text-muted-foreground max-w-2xl mb-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        We provide complete web and mobile solutions — from design to deployment — tailored to your business goals.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/services">
          <Button className="px-6 py-3">Explore Services</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" className="px-6 py-3">Contact Us</Button>
        </Link>
      </motion.div>
    </motion.section>
  );
}