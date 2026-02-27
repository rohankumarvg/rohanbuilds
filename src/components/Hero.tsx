import { motion } from 'framer-motion';

const titleWords = ['I build', 'systems', 'that run', 'without me.'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-40 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(129,140,248,0.12) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(52,211,153,0.06) 0%, transparent 60%)' }} />
      </div>

      <div className="relative max-w-5xl mx-auto w-full pt-32 pb-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <span
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 rounded-full border"
            style={{ color: '#71717a', borderColor: '#2a2a3a', backgroundColor: '#13131a', fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#34d399' }} />
            Available for work
          </span>
        </motion.div>

        {/* Main title */}
        <div className="mb-8">
          {titleWords.map((word, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="overflow-hidden"
            >
              <h1
                className="font-bold leading-[0.95] tracking-[-0.03em]"
                style={{
                  fontFamily: "'Space Grotesk', system-ui, sans-serif",
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  color: word === 'systems' ? '#818cf8' : '#e4e4e7',
                }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-lg text-lg leading-relaxed mb-10"
          style={{ color: '#71717a' }}
        >
          n8n automation specialist who turns manual business processes into
          self-running workflows. 100+ production automations. Two apps shipped.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex gap-4 items-center"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 font-medium rounded-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#e4e4e7', color: '#0a0a0f' }}
          >
            See my work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border transition-all duration-300 hover:scale-105"
            style={{ color: '#71717a', borderColor: '#2a2a3a' }}
          >
            Get in touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-6"
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace", writingMode: 'vertical-lr' }}
            >
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8"
              style={{ background: 'linear-gradient(to bottom, #71717a, transparent)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
