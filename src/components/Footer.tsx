export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <span className="text-xs text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Rohan Kumar
        </span>
        <span
          className="text-xs text-[var(--text-muted)]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Built with n8n mindset
        </span>
      </div>
    </footer>
  );
}
