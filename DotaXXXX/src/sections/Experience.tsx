import { motion } from "framer-motion";
import Section from "../components/Section";
import Chip from "../components/Chip";
import { EXPERIENCE } from "../data/experience";
import { Briefcase, Calendar, Award, Star } from "lucide-react";

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } }});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Experience() {
  return (
    <Section id="experience" title="Experience / Certs" className="py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-6"
      >
        {EXPERIENCE.map((e, i) => (
          <motion.div 
            key={e.role} 
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-5 hover-lift"
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.2 }
            }}
          >
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Timeline indicator */}
            <motion.div
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
            />
            
            <div className="relative z-10 ml-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="p-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Briefcase className="size-4 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  <div>
                    <h3 className="text-gray-900 dark:text-white font-medium">
                      {e.role} 
                      <span className="text-gray-600 dark:text-white/60"> • {e.org}</span>
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <Calendar className="size-3" />
                      <span>{e.period}</span>
                    </div>
                  </div>
                </div>
                
                {/* Experience level indicator */}
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {Array.from({ length: 3 }, (_, index) => (
                    <motion.div
                      key={index}
                      className="w-1 h-1 rounded-full bg-green-500"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 + index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </motion.div>
              </div>
              
              <motion.ul 
                className="list-disc pl-5 text-gray-700 dark:text-white/80 space-y-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
              >
                {e.bullets.map((b, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <span className="relative z-10">{b}</span>
                    <motion.div
                      className="absolute left-0 top-1/2 w-2 h-0.5 bg-blue-500/50 rounded-full"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + i * 0.1 + idx * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            {/* Floating achievement badge */}
            <motion.div
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500">
                <Award className="size-4 text-white" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <motion.h3 
          className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Award className="size-5 text-yellow-500" />
          Certifications
        </motion.h3>
        
        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {["Web Development Fundamentals", "JavaScript Basics", "HTML/CSS Certificate"].map((cert, index) => (
            <motion.div
              key={cert}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Chip>
                <div className="flex items-center gap-1">
                  <Star className="size-3 text-yellow-500" />
                  {cert}
                </div>
              </Chip>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Experience summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-4 py-2 backdrop-blur">
          <Briefcase className="size-4 text-blue-500" />
          <span className="text-sm text-gray-700 dark:text-white/80">
            {EXPERIENCE.length} Experiences • University Student
          </span>
        </div>
      </motion.div>
    </Section>
  );
}
