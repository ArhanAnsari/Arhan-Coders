'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <motion.header
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur border-b border-muted"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Arhan Coders Logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
          <span className="text-xl font-bold">Arhan Coders</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/technologies">Technologies</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          {/* <Link href="/contact" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition">
            Get a Quote
          </Link> */}
        </div>
      </nav>
    </motion.header>
  );
}
