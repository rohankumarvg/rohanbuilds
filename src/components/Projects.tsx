import { motion } from 'framer-motion';
import { useInView } from './useInView';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'LastSend',
    tagline: 'Digital legacy app for final messages',
    description: 'Mobile app where users compose messages, photos, videos, and voice recordings to be delivered to loved ones after they pass. 40+ n8n workflows handling payments, media processing, push notifications, check-in verification, and delivery triggers. Integrated PayPal, Google Play Billing, Razorpay, Cloudflare R2, Firebase FCM.',
    tech: ['n8n', 'React', 'Capacitor', 'Supabase', 'Docker', 'Hetzner'],
    metrics: ['40+ workflows', '6 payment integrations', 'Queue mode'],
    featured: true,
  },
  {
    title: 'Orbit',
    tagline: 'Self-service client portal',
    description: 'Client-facing portal with subscription management, wallet-based billing, Razorpay payments (UPI, card, netbanking), and a full admin panel. Multi-currency support, client invite flow, password reset. Built and deployed in 2 days.',
    tech: ['n8n', 'React', 'Supabase', 'Razorpay', 'Hetzner'],
    metrics: ['Built in 2 days', 'Multi-currency', 'Wallet system'],
  },
  {
    title: 'Suzuki Dealership',
    tagline: 'WhatsApp automation for vehicle sales',
    description: 'Automated WhatsApp messaging for a Suzuki dealership. Daily workflow reads sales register, filters new invoices, sends personalized welcome messages with service reminders. Rate limiting and duplicate prevention built in.',
    tech: ['n8n', 'Evolution API', 'Google Sheets', 'WhatsApp'],
    metrics: ['Daily auto-send', 'Duplicate prevention', 'Rate limited'],
  },
  {
    title: 'Turquaz Restaurant',
    tagline: 'WhatsApp + SMS automation',
    description: 'Complete customer communication system for hospitality: reservations, review collection, promotional campaigns with Twilio SMS.',
    tech: ['n8n', 'Twilio', 'WhatsApp API', 'Airtable'],
    metrics: ['Auto reservations', 'Review pipeline', 'SMS campaigns'],
  },
  {
    title: 'AI Sales Agent',
    tagline: 'Intelligent lead qualification',
    description: 'Conversational AI agent that qualifies inbound leads, asks discovery questions, and routes to human reps. 32-node n8n workflow.',
    tech: ['n8n', 'Gemini AI', 'Webhook', 'Supabase'],
    metrics: ['32 nodes', 'Auto-qualification', 'Smart routing'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isInView] = useInView(0.1);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`card p-8 flex flex-col ${project.featured ? 'md:col-span-2' : ''}`}
      style={project.featured ? { borderTopColor: '#818cf8', borderTopWidth: '2px' } : {}}
    >
      {/* Title row */}
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-1">
          <h3
            className="text-2xl font-bold"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fafafa' }}
          >
            {project.title}
          </h3>
          {project.featured && (
            <span
              className="text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded-full"
              style={{ color: '#818cf8', border: '1px solid rgba(129,140,248,0.3)', fontFamily: "'JetBrains Mono', monospace" }}
            >
              Flagship
            </span>
          )}
        </div>
        <p className="text-sm" style={{ color: '#71717a' }}>{project.tagline}</p>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6 flex-grow" style={{ color: '#a1a1aa' }}>
        {project.description}
      </p>

      {/* Metrics */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
        {project.metrics.map(m => (
          <span key={m} className="inline-flex items-center gap-1.5 text-xs" style={{ color: '#34d399', fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#34d399' }} />
            {m}
          </span>
        ))}
      </div>

      {/* Tech */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map(t => (
          <span
            key={t}
            className="px-3 py-1 text-[10px] tracking-wider uppercase rounded-md"
            style={{ color: '#71717a', backgroundColor: '#09090b', border: '1px solid #27272a', fontFamily: "'JetBrains Mono', monospace" }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView(0.05);

  return (
    <section id="projects" ref={ref} className="px-8 md:px-12 py-28">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}
        >
          Selected work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#fafafa' }}
        >
          Things I've built<span style={{ color: '#818cf8' }}>.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
