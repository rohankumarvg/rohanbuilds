import { motion } from 'framer-motion';
import { useInView } from './useInView';

const stats = [
  { number: '100+', label: 'Production Workflows', description: 'n8n automations running 24/7', accent: false },
  { number: '10+', label: 'API Integrations', description: 'PayPal, Twilio, Gemini, Supabase, and more', accent: false },
  { number: '2', label: 'Apps Shipped', description: 'LastSend and Orbit, live in production', accent: true },
  { number: '3', label: 'Client Projects', description: 'Turquaz, Suzuki, financial advisor automation', accent: false },
];

const tools = ['n8n', 'Supabase', 'React', 'Docker', 'Cloudflare', 'GitHub Actions', 'Airtable', 'Redis', 'Caddy', 'Claude'];

export default function Stats() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-block text-xs tracking-[0.2em] uppercase mb-12"
          style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
        >
          By the numbers
        </motion.span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              style={{ borderColor: '#2a2a3a', backgroundColor: '#13131a' }}
              data-cursor-hover
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at center, rgba(129,140,248,0.15), transparent 70%)' }}
              />
              <div className="relative">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: stat.accent ? '#818cf8' : '#e4e4e7' }}
                >
                  {stat.number}
                </div>
                <div className="text-sm font-medium mb-1" style={{ color: '#e4e4e7' }}>{stat.label}</div>
                <div className="text-xs leading-relaxed" style={{ color: '#71717a' }}>{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {tools.map(tool => (
            <span
              key={tool}
              className="px-4 py-2 text-xs tracking-wide border rounded-full transition-all duration-300 hover:scale-105"
              style={{ color: '#71717a', borderColor: '#2a2a3a', fontFamily: "'JetBrains Mono', monospace" }}
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
