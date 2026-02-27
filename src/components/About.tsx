import { motion } from 'framer-motion';
import { useInView } from './useInView';

const journey = [
  { year: '2019', label: 'Film school grad, started freelancing' },
  { year: '2020', label: 'Founded Brand Jet Media, video production' },
  { year: '2023', label: 'Discovered n8n, first automation workflow' },
  { year: '2024', label: 'Built LastSend (40+ workflows, full app)' },
  { year: '2025', label: '100+ production workflows, 2 apps shipped' },
  { year: 'Now', label: 'Building automation systems for businesses' },
];

export default function About() {
  const [ref, isInView] = useInView(0.15);

  return (
    <section id="about" ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="inline-block text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
        >
          About
        </motion.span>

        <div className="grid md:grid-cols-5 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-3"
          >
            <h2
              className="text-3xl md:text-5xl font-bold mb-8 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif", color: '#e4e4e7' }}
            >
              Not a developer<span style={{ color: '#818cf8' }}>.</span>
              <br />
              A builder<span style={{ color: '#818cf8' }}>.</span>
            </h2>

            <div className="space-y-5 leading-relaxed" style={{ color: '#71717a' }}>
              <p>
                I don't write code line by line. I architect systems, design business logic,
                and build workflows that replace manual processes. My tool of choice is n8n,
                where I've built 100+ production automations.
              </p>
              <p>
                I came from film production, not computer science. That background taught me
                something engineers often miss: how to think about the end user, how to
                manage complex projects under pressure, and how to deliver on deadline.
              </p>
              <p>
                When I build something, it runs in production. It handles real payments,
                real users, real data. I've integrated with PayPal, Google Play, Razorpay,
                Twilio, Gemini, and a dozen other APIs, not in tutorials, but in apps people use.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative pl-8" style={{ borderLeft: '1px solid #2a2a3a' }}>
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div
                    className="absolute top-1 w-2 h-2 rounded-full"
                    style={{ left: 'calc(-1rem - 4.5px)', backgroundColor: item.year === 'Now' ? '#818cf8' : '#2a2a3a' }}
                  />
                  <span
                    className="block text-xs font-bold tracking-wider mb-1"
                    style={{ color: item.year === 'Now' ? '#818cf8' : '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {item.year}
                  </span>
                  <span className="text-sm" style={{ color: '#e4e4e7' }}>{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
