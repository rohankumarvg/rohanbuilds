import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // If scrolled to bottom of page, last section (contact) is active
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (atBottom) {
        setActiveSection('contact');
        return;
      }

      // Check sections top-to-bottom, keep the last one whose top has passed the threshold
      const sectionIds = ['projects', 'about', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update pill position when active section changes
  useEffect(() => {
    if (!activeSection || !navRef.current) {
      setPillStyle(null);
      return;
    }
    const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPillStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    }
  }, [activeSection]);

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

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Section nav with sliding pill */}
          <div ref={navRef} className="relative flex items-center gap-0.5 sm:gap-1 p-1 rounded-lg" style={{ backgroundColor: 'rgba(24,24,27,0.6)' }}>
            {/* Sliding pill */}
            {pillStyle && (
              <motion.div
                className="absolute top-1 bottom-1 rounded-md"
                style={{ backgroundColor: 'rgba(129,140,248,0.15)', border: '1px solid rgba(129,140,248,0.3)' }}
                animate={{ left: pillStyle.left, width: pillStyle.width }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            {navLinks.map(link => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  data-section={sectionId}
                  className="relative z-10 text-xs sm:text-sm px-2.5 sm:px-4 py-1.5 rounded-md transition-colors duration-200"
                  style={{ color: isActive ? '#fafafa' : '#71717a' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fafafa')}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#71717a'; }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Resume - clearly an external link */}
          <a
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a1a1aa')}
            onMouseLeave={e => (e.currentTarget.style.color = '#71717a')}
          >
            Resume
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
