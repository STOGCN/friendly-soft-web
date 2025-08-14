import { motion } from "framer-motion";
import Section from "../components/Section";
import { PROFILE } from "../data/profile";
import { Github, Mail, MessageCircle, Send, Heart } from "lucide-react";

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

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Contact() {
  return (
    <Section id="contact" title="Contact" className="py-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        {/* Main contact card */}
        <motion.div 
          variants={itemVariants}
          className="relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-8 backdrop-blur hover-lift"
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        >
          {/* Animated background elements */}
          <motion.div 
            className="absolute -right-32 -top-32 size-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -left-16 -bottom-16 size-32 rounded-full bg-gradient-to-tr from-green-500/10 to-blue-500/10 blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <div className="relative z-10">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <MessageCircle className="size-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Ready for Projects & Collaboration
                </h3>
                <p className="text-gray-600 dark:text-white/80 text-sm">
                  Contact via email or Instagram
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href={`mailto:${PROFILE.email}`} 
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 dark:from-white dark:to-gray-100 text-white dark:text-black px-6 py-3 text-sm font-medium hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-100 dark:hover:to-gray-200 transition-all duration-300 hover-lift"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="size-4 group-hover:animate-bounce" />
                <span>{PROFILE.email}</span>
                <Send className="size-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </motion.a>
              
              <motion.a 
                href={PROFILE.socials.instagram} 
                className="group inline-flex items-center gap-3 rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 px-6 py-3 text-sm text-gray-700 dark:text-white/90 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300 hover-lift"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="size-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
                <motion.div
                  className="w-2 h-2 bg-pink-500 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.a>
              
              <motion.a 
                href={PROFILE.socials.github} 
                className="group inline-flex items-center gap-3 rounded-full border border-gray-300/30 dark:border-white/15 bg-gray-100/50 dark:bg-white/5 px-6 py-3 text-sm text-gray-700 dark:text-white/90 hover:bg-gray-200/50 dark:hover:bg-white/10 transition-all duration-300 hover-lift"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                <span>GitHub</span>
                <motion.div
                  className="w-2 h-2 bg-gray-800 dark:bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Additional info cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-300/20 dark:border-white/10 bg-gray-100/30 dark:bg-white/5 p-4 backdrop-blur"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 rounded-full bg-green-500/10 dark:bg-green-500/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Heart className="size-4 text-green-600 dark:text-green-400" />
              </motion.div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Open to Work</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">Available for new opportunities</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-300/20 dark:border-white/10 bg-gray-100/30 dark:bg-white/5 p-4 backdrop-blur"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                className="p-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Send className="size-4 text-blue-600 dark:text-blue-400" />
              </motion.div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Quick Response</h4>
                <p className="text-sm text-gray-600 dark:text-white/70">Response within 24 hours</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* Footer message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <motion.div 
          className="inline-flex items-center gap-2 rounded-full border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 px-6 py-3 backdrop-blur"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="size-4 text-red-500" />
          </motion.div>
          <span className="text-sm text-gray-700 dark:text-white/80">
            Thank you for visiting my Portfolio
          </span>
        </motion.div>
      </motion.div>
    </Section>
  );
}
