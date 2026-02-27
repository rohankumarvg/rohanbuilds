import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['contact', 'about', 'projects'];
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ padding: scrolled ? '12px 0' : '20px 0' }}
    >
      <div
        className="mx-auto max-w-4xl px-8 md:px-12 flex items-center justify-between transition-all duration-300"
        style={scrolled ? {
          backgroundColor: 'rgba(9,9,11,0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(39,39,42,0.6)',
          borderRadius: '16px',
          padding: '12px 24px',
        } : {}}
      >
        <a
          href="#"
          className="text-xl font-bold tracking-tight"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: '#fafafa' }}
        >
          rohan<span style={{ color: '#818cf8' }}>.</span>
        </a>

        <div className="flex items-center gap-8">
          {navLinks.map(link => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors duration-200"
                style={{ color: isActive ? '#fafafa' : '#a1a1aa' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#a1a1aa'; }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="https://rohankumarvg.github.io/rohan-kumar-standout.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-5 py-2 rounded-lg font-medium transition-all duration-200"
            style={{ color: '#e4e4e7', border: '1px solid #3f3f46' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#818cf8'; e.currentTarget.style.color = '#fafafa'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#e4e4e7'; }}
          >
            Resume
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
