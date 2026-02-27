import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const links = [
  { label: 'Email', href: 'mailto:rohankumarvg@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rohankumarvg', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/rohankumarvg', icon: Github },
  { label: 'Twitter', href: 'https://twitter.com/MrPeacetopia', icon: Twitter },
];

export default function Contact() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="contact" ref={ref} className="px-8 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
        >
          Get in touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fafafa' }}
        >
          Let's work together<span style={{ color: '#818cf8' }}>.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-lg mb-14 text-base"
          style={{ color: '#a1a1aa' }}
        >
          Looking for someone to automate your business processes or build your
          next product? I'm available for full-time roles and consulting projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex gap-4"
        >
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.35 + i * 0.06 }}
              className="card flex items-center justify-center w-14 h-14"
              aria-label={link.label}
            >
              <link.icon size={22} style={{ color: '#a1a1aa' }} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
