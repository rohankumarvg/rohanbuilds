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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div
        className={`mx-auto max-w-5xl px-6 flex items-center justify-between rounded-2xl transition-all duration-500 ${
          scrolled ? 'py-3 px-6 backdrop-blur-xl border' : ''
        }`}
        style={scrolled ? { backgroundColor: 'rgba(19,19,26,0.7)', borderColor: '#2a2a3a' } : {}}
      >
        <a
          href="#"
          className="text-lg font-bold tracking-tight hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: '#e4e4e7' }}
        >
          rohan<span style={{ color: '#818cf8' }}>.</span>
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm transition-colors duration-300 group hover:!text-[#e4e4e7]"
              style={{ color: '#71717a' }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-full h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: '#818cf8' }}
              />
            </a>
          ))}
          <a
            href="https://rohankumarvg.github.io/rohan-kumar-standout.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#818cf8', color: '#0a0a0f' }}
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
