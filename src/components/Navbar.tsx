import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3'
          : 'py-5'
      }`}
    >
      <div
        className={`mx-auto max-w-5xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled
            ? 'py-3 px-6 backdrop-blur-xl bg-[rgba(19,19,26,0.7)] border border-[var(--border)]'
            : ''
        }`}
      >
        <a
          href="#"
          className="font-[var(--font-heading)] text-lg font-bold tracking-tight text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          rohan<span className="text-[var(--accent)]">.</span>
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-full h-px bg-[var(--accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </a>
          ))}
          <a
            href="https://rohankumarvg.github.io/rohan-kumar-standout.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg bg-[var(--accent)] text-[var(--bg)] font-medium hover:opacity-90 transition-opacity"
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
