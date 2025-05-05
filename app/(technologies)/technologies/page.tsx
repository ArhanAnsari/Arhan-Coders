'use client';
import { motion } from 'framer-motion';

const stack = [
  'Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Firebase',
  'MongoDB', 'PostgreSQL', 'Convex', 'Docker', 'Git',
  'ShadCN UI', 'Figma', 'Supabase', 'CI/CD', 'AWS', 'Vercel'
];

export default function TechnologiesPage() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Technologies We Use</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stack.map((tech) => (
          <motion.li
            key={tech}
            className="bg-muted rounded-xl py-3 px-5 text-center"
            whileHover={{ scale: 1.05 }}
          >
            {tech}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
