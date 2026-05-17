export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
      <div className="max-w-7xl mx-auto px-4 space-y-2">
        <p>&copy; {new Date().getFullYear()} CHOWCOWN. All sovereign rights reserved.</p>
        <p>Bypassing commission networks to empower regional food ecosystems cleanly.</p>
      </div>
    </footer>
  );
}