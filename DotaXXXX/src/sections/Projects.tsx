import { motion } from "framer-motion";
import Section from "../components/Section";
import Chip from "../components/Chip";
import { PROJECTS } from "../data/projects";
import { ExternalLink, Github, Eye, Code, Calendar } from "lucide-react";

const pop = (delay = 0) => ({ initial: { opacity: 0, scale: 0.98 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } }});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects" className="py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {PROJECTS.map((p, i) => (
          <motion.article 
            key={p.title} 
            variants={cardVariants}
            className="group relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gradient-to-b from-gray-100/50 to-transparent dark:from-white/10 dark:to-transparent p-5 hover-lift"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {/* Animated background glow */}
            <motion.div 
              className="absolute -right-24 -top-24 size-48 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl transition-opacity group-hover:opacity-80"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5
              }}
            />
            
            {/* Floating particles */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
            
            <div className="relative z-10">
              {/* Project header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <motion.h3 
                    className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {p.title}
                  </motion.h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Calendar className="size-3" />
                    <span>2025</span>
                  </div>
                </div>
                
                {/* Project type indicator */}
                <motion.div
                  className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400"
                  whileHover={{ scale: 1.1 }}
                >
                  <Code className="size-3" />
                  <span>Web App</span>
                </motion.div>
              </div>
              
              <motion.p 
                className="text-gray-600 dark:text-white/75 text-sm leading-relaxed mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {p.blurb}
              </motion.p>
              
              {/* Tech stack */}
              <motion.div 
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                {p.tech.map((t, index) => (
                  <motion.div
                    key={t}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Chip>{t}</Chip>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* Action buttons */}
              <motion.div 
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href={p.demo} 
                  className="inline-flex items-center gap-1 rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 px-3 py-1.5 text-sm text-gray-700 dark:text-white/90 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="size-4" />
                  Demo
                  <ExternalLink className="size-3" />
                </motion.a>
                
                <motion.a 
                  href={p.repo} 
                  className="inline-flex items-center gap-1 rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 px-3 py-1.5 text-sm text-gray-700 dark:text-white/90 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05, x: 2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="size-4" />
                  Code
                </motion.a>
              </motion.div>
            </div>
            
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="shimmer"></div>
            </div>
          </motion.article>
        ))}
      </motion.div>
      
      {/* Projects summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 backdrop-blur">
          <Code className="size-4 text-blue-500" />
          <span className="text-sm text-gray-700 dark:text-white/80">
            {PROJECTS.length} โปรเจ็กต์ • ทั้งหมดเป็น Open Source
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
