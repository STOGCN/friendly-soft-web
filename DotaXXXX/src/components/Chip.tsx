export default function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-3 py-1 text-xs text-gray-700 dark:text-white/90 backdrop-blur">
      {children}
    </span>
  );
}
