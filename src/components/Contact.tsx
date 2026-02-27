import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const links = [
  {
    label: 'Email',
    value: 'rohankumarvg@gmail.com',
    href: 'mailto:rohankumarvg@gmail.com',
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'rohankumarvg',
    href: 'https://linkedin.com/in/rohankumarvg',
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'rohankumarvg',
    href: 'https://github.com/rohankumarvg',
    icon: Github,
  },
  {
    label: 'Twitter',
    value: '@MrPeacetopia',
    href: 'https://twitter.com/MrPeacetopia',
    icon: Twitter,
  },
];

export default function Contact() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section id="contact" ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Get in touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Let's work together<span className="text-[var(--accent)]">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-[var(--text-muted)] max-w-lg mb-12"
        >
          Looking for someone to automate your business processes or build your
          next product? I'm available for full-time roles and consulting projects.
        </motion.p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="group p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-300"
              data-cursor-hover
            >
              <link.icon
                size={20}
                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300 mb-3"
              />
              <div
                className="text-xs text-[var(--text-muted)] mb-1 tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {link.label}
              </div>
              <div className="text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
