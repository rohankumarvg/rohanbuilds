export default function Footer() {
  return (
    <footer className="px-6 py-8" style={{ borderTop: '1px solid #2a2a3a' }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xs" style={{ color: '#71717a' }}>
          &copy; {new Date().getFullYear()} Rohan Kumar
        </span>
        <span className="text-xs" style={{ color: '#71717a', fontFamily: "'JetBrains Mono', monospace" }}>
          Built with n8n mindset
        </span>
      </div>
    </footer>
  );
}
