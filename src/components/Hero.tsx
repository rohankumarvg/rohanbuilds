import { motion } from 'framer-motion';

const titleWords = ['I build', 'systems', 'that run', 'without me.'];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(52,211,153,0.06)_0%,transparent_60%)]" />
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
            className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[var(--text-muted)] px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse" />
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
                className="text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.95] tracking-[-0.03em]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {word === 'systems' ? (
                  <span className="text-[var(--accent)]">{word}</span>
                ) : (
                  word
                )}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="max-w-lg text-lg text-[var(--text-muted)] leading-relaxed mb-10"
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
            data-cursor-hover
            className="group inline-flex items-center gap-2 px-6 py-3 bg-[var(--text)] text-[var(--bg)] font-medium rounded-lg hover:bg-[var(--accent)] transition-colors duration-300"
          >
            See my work
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            data-cursor-hover
            className="px-6 py-3 text-[var(--text-muted)] hover:text-[var(--text)] border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-all duration-300"
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
              className="text-[10px] tracking-[0.2em] uppercase text-[var(--text-muted)] [writing-mode:vertical-lr]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
