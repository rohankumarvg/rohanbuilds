import { motion } from 'framer-motion';
import { useInView } from './useInView';

const stats = [
  {
    number: '100+',
    label: 'Production Workflows',
    description: 'n8n automations running 24/7',
    span: 'col-span-1',
    accent: false,
  },
  {
    number: '10+',
    label: 'API Integrations',
    description: 'PayPal, Twilio, Gemini, Supabase, and more',
    span: 'col-span-1',
    accent: false,
  },
  {
    number: '2',
    label: 'Apps Shipped',
    description: 'LastSend and Orbit, live in production',
    span: 'col-span-1',
    accent: true,
  },
  {
    number: '3',
    label: 'Client Projects',
    description: 'Turquaz, Suzuki, financial advisor automation',
    span: 'col-span-1',
    accent: false,
  },
];

const tools = [
  'n8n', 'Supabase', 'React', 'Docker', 'Cloudflare',
  'GitHub Actions', 'Airtable', 'Redis', 'Caddy', 'Claude',
];

export default function Stats() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-12"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          By the numbers
        </motion.span>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`${stat.span} group relative p-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] transition-all duration-500 overflow-hidden`}
              data-cursor-hover
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${
                    stat.accent ? 'text-[var(--accent)]' : 'text-[var(--text)]'
                  }`}
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-[var(--text)] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[var(--text-muted)] leading-relaxed">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {tools.map(tool => (
            <span
              key={tool}
              className="px-4 py-2 text-xs tracking-wide text-[var(--text-muted)] border border-[var(--border)] rounded-full hover:text-[var(--text)] hover:border-[var(--accent)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
