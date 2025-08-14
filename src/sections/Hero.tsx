import { motion } from "framer-motion";
import { BadgeCheck, ChevronRight, Github, Mail, Sparkles, ArrowDown } from "lucide-react";
import { PROFILE } from "../data/profile";

const fade = (delay = 0) => ({ 
  initial: { opacity: 0, y: 16 }, 
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } } 
});

const float = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      delay, 
      ease: [0.22, 1, 0.36, 1],
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    } 
  }
});

export default function Hero() {
  return (
    <section id="home" className="pt-36 pb-20 relative min-h-screen flex items-center">
      {/* Animated background elements */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.15),transparent_35%)] dark:bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.35),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.35),transparent_35%)]" />
        <div className="absolute inset-0 opacity-30 [background:repeating-linear-gradient(90deg,rgba(0,0,0,0.06)_0_1px,transparent_1px_40px),repeating-linear-gradient(0deg,rgba(0,0,0,0.06)_0_1px,transparent_1px_40px)] dark:[background:repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_40px)]" />
        
        {/* Floating particles */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full opacity-60"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-32 w-1 h-1 bg-green-500 rounded-full opacity-80"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-70"
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl w-full">
        <motion.div 
          {...fade(0)} 
          className="inline-flex items-center gap-2 rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-3 py-1 backdrop-blur hover-lift"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <BadgeCheck className="size-4 text-green-600 dark:text-green-400" />
          </motion.div>
                             <span className="text-xs text-gray-700 dark:text-white/80">Passionate Leader • Always Learning</span>
        </motion.div>

                         {/* Name Section */}
                 <div className="mt-8 text-center md:text-left">
                   {/* Text Content */}
                   <div className="flex-1">
            <motion.h1 
              {...fade(0.05)} 
              className="text-4xl md:text-6xl font-semibold tracking-tight"
            >
              <span className="text-gray-900 dark:text-white">Hi ,I'm </span>
              <span className="animate-gradient-text">{PROFILE.name}</span>
            </motion.h1>
            
                                 <motion.p 
                       {...fade(0.1)} 
                       className="mt-3 text-lg md:text-xl text-gray-600 dark:text-white/75"
                     >
                       {PROFILE.role} {PROFILE.tagline}
                     </motion.p>
          </div>
        </div>

        <motion.div 
          {...fade(0.15)} 
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <motion.a 
            href="#projects" 
            className="group inline-flex items-center gap-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black px-5 py-2.5 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors hover-lift animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
          
          <motion.a 
            href={`mailto:${PROFILE.email}`} 
            className="inline-flex items-center gap-2 rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 px-5 py-2.5 text-sm text-gray-700 dark:text-white/90 backdrop-blur hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="size-4" /> Contact 
          </motion.a>
          
          <div className="ml-auto flex items-center gap-2">
            <motion.a 
              aria-label="GitHub" 
              href={PROFILE.socials.github} 
              className="rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 p-2 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors hover-lift"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="size-4 text-gray-700 dark:text-white" />
            </motion.a>
            
                                 <motion.a 
                       aria-label="Instagram" 
                       href="https://www.instagram.com/_ratchanonn_rk/" 
                       className="rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 p-2 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors hover-lift"
                       whileHover={{ scale: 1.1, rotate: -5 }}
                       whileTap={{ scale: 0.9 }}
                     >
                       <svg className="size-4 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                       </svg>
                     </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...float(0.3)}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
          >
            <span className="text-xs">เลื่อนลง</span>
            <ArrowDown className="size-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
