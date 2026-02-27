import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  metrics: string[];
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'LastSend',
    tagline: 'Subscription management for content creators',
    description:
      'Full mobile app with 40+ n8n workflows handling payments, media processing, push notifications, and subscription lifecycle. Integrated PayPal, Google Play Billing, Razorpay, Cloudflare R2, Firebase FCM.',
    tech: ['n8n', 'React', 'Capacitor', 'Supabase', 'Docker', 'Hetzner'],
    metrics: ['40+ workflows', '6 payment integrations', 'Queue mode architecture'],
    featured: true,
  },
  {
    title: 'Orbit',
    tagline: 'AI-powered community engagement platform',
    description:
      'Reddit monitoring system that tracks brand mentions, generates AI responses, and manages community engagement. Multi-tenant Supabase backend with RLS policies.',
    tech: ['n8n', 'React', 'Supabase', 'Gemini AI', 'Reddit API'],
    metrics: ['Real-time monitoring', 'AI response generation', 'Multi-tenant'],
  },
  {
    title: 'Turquaz Restaurant',
    tagline: 'WhatsApp + SMS automation for hospitality',
    description:
      'Built complete customer communication system: reservation confirmations, review collection, promotional campaigns. Twilio SMS integration with automated follow-ups.',
    tech: ['n8n', 'Twilio', 'WhatsApp API', 'Airtable'],
    metrics: ['Automated reservations', 'Review pipeline', 'SMS campaigns'],
  },
  {
    title: 'AI Sales Agent',
    tagline: 'Intelligent lead qualification system',
    description:
      'Conversational AI agent that qualifies inbound leads, asks discovery questions, and routes to human reps. Built as a 32-node n8n workflow with Gemini.',
    tech: ['n8n', 'Gemini AI', 'Webhook', 'Supabase'],
    metrics: ['32 nodes', 'Auto-qualification', 'Smart routing'],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, isInView] = useInView(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--accent)] transition-all duration-500 ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      }`}
      data-cursor-hover
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-[var(--text)] mb-1 group-hover:text-[var(--accent)] transition-colors duration-300"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">{project.tagline}</p>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.map(metric => (
            <span
              key={metric}
              className="inline-flex items-center gap-1.5 text-xs text-[var(--success)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className="w-1 h-1 rounded-full bg-[var(--success)]" />
              {metric}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span
              key={t}
              className="px-3 py-1 text-[10px] tracking-wider uppercase text-[var(--text-muted)] bg-[var(--bg)] rounded-md border border-[var(--border)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView(0.1);

  return (
    <section id="projects" ref={ref} className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="inline-block text-xs tracking-[0.2em] uppercase text-[var(--text-muted)] mb-4"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Selected work
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold mb-16 tracking-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Things I've built<span className="text-[var(--accent)]">.</span>
        </motion.h2>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
