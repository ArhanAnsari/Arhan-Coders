'use client';
import { motion } from 'framer-motion';

const services = [
  'Web Design', 'Web Development', 'Mobile App Development', 'UI/UX Design',
  'E-commerce', 'Landing Pages', 'API Integrations', 'Hosting & Domain Setup',
  'Maintenance', 'Chatbot & AI Integration', 'Custom Dashboards', 'SEO & Analytics'
];

export default function ServicesPage() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.li
            key={service}
            className="bg-card rounded-xl p-5 shadow"
            whileHover={{ scale: 1.05 }}
          >
            {service}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
