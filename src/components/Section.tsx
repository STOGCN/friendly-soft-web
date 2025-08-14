import { motion } from "framer-motion";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});
export default function Section({ id, className, children, title }: { id: string; className?: string; children: React.ReactNode; title?: string; }) {
  return (
    <section id={id} className={`relative scroll-mt-24 ${className || ""}`}>
      {title && (
        <motion.h2 {...fade(0)} className="mb-6 text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white/90">
          {title}
        </motion.h2>
      )}
      {children}
    </section>
  );
}
