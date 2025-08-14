import { motion } from "framer-motion";
import Section from "../components/Section";
import Chip from "../components/Chip";
import { STACK } from "../data/stack";
import { Code2, Zap, Star } from "lucide-react";

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}});
const pop = (delay = 0) => ({ initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } }});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function TechStack() {
  return (
    <Section id="stack" title="Tech Stack" className="py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {STACK.map((s, i) => (
          <motion.div 
            key={s.name} 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-4 backdrop-blur hover-lift"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="shimmer"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Code2 className="size-4 text-gray-700 dark:text-white" />
                  </motion.div>
                  <span className="font-medium text-gray-900 dark:text-white/90">{s.name}</span>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Chip>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: s.level }, (_, i) => (
                        <motion.span
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          ★
                        </motion.span>
                      ))}
                    </div>
                  </Chip>
                </motion.div>
              </div>
              
              <div className="mt-3 relative">
                <div className="h-2 w-full rounded-full bg-gray-300/50 dark:bg-white/10 overflow-hidden">
                  <motion.div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(s.level / 5) * 100}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                
                {/* Animated sparkles */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                >
                  <Zap className="size-3 text-yellow-500" />
                </motion.div>
              </div>
              
              {/* Skill level indicator */}
              <motion.div 
                className="mt-2 text-xs text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {s.level === 5 && "Expert"}
                {s.level === 4 && "Advanced"}
                {s.level === 3 && "Intermediate"}
                {s.level === 2 && "Beginner"}
                {s.level === 1 && "Learning"}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Summary section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 backdrop-blur">
          <Star className="size-4 text-yellow-500" />
          <span className="text-sm text-gray-700 dark:text-white/80">
            {STACK.length} เทคโนโลยี • {STACK.filter(s => s.level >= 4).length} ระดับสูง
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
