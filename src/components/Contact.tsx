import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const links = [
  { label: 'Email', value: 'rohankumarvg@gmail.com', href: 'mailto:rohankumarvg@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'rohankumarvg', href: 'https://linkedin.com/in/rohankumarvg', icon: Linkedin },
  { label: 'GitHub', value: 'rohankumarvg', href: 'https://github.com/rohankumarvg', icon: Github },
  { label: 'Twitter', value: '@MrPeacetopia', href: 'https://twitter.com/MrPeacetopia', icon: Twitter },
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

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="card p-6 block"
            >
              <link.icon size={22} className="mb-4" style={{ color: '#71717a' }} />
              <div className="text-xs mb-1.5 tracking-wider uppercase" style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>
                {link.label}
              </div>
              <div className="text-sm font-medium" style={{ color: '#e4e4e7' }}>
                {link.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
