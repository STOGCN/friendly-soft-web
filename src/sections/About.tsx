import { motion } from "framer-motion";
import Section from "../components/Section";
import Avatar from "../components/Avatar";
import { User, Code, Heart, Target, Award } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
});

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

export default function About() {
  return (
    <Section id="about" title="About" className="py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-8"
      >
        {/* Main content with Avatar */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-8 backdrop-blur hover-lift"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            {/* Animated background */}
            <motion.div 
              className="absolute -right-32 -top-32 size-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                                         {/* Avatar */}
                         <motion.div
                           initial={{ scale: 0, rotate: -180 }}
                           whileInView={{ scale: 1, rotate: 0 }}
                           transition={{ duration: 0.8, ease: "easeOut" }}
                           viewport={{ once: true }}
                           className="flex-shrink-0"
                         >
                           <Avatar 
                             size="lg"
                             src="/avatar.jpg"
                             alt="Ratchanon Profile"
                             className="shadow-2xl"
                           />
                         </motion.div>

                {/* Content */}
                <div className="flex-1">
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
                      <User className="size-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        About
                      </h3>
                      <p className="text-gray-600 dark:text-white/70 text-sm">
                        
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="max-w-3xl text-gray-600 dark:text-white/80 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    I'm a passionate project manager who focuses on fundamentals — clear communication,
                    strategic planning, and efficient team coordination. Currently leveling up in agile methodologies
                    and cross-functional leadership to deliver projects that are both impactful and on time.
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills highlights */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-300/20 dark:border-white/10 bg-gray-100/30 dark:bg-white/5 p-6 backdrop-blur"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="p-3 rounded-full bg-blue-500/10 dark:bg-blue-500/20 mb-4 w-fit"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Code className="size-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
                                 <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h4>
                     <p className="text-sm text-gray-600 dark:text-white/70">
                       Write readable, maintainable, and efficient code
                     </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-300/20 dark:border-white/10 bg-gray-100/30 dark:bg-white/5 p-6 backdrop-blur"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="p-3 rounded-full bg-green-500/10 dark:bg-green-500/20 mb-4 w-fit"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Target className="size-6 text-green-600 dark:text-green-400" />
            </motion.div>
                                 <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Problem Solving</h4>
                     <p className="text-sm text-gray-600 dark:text-white/70">
                       Solve complex problems efficiently and creatively
                     </p>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-xl border border-gray-300/20 dark:border-white/10 bg-gray-100/30 dark:bg-white/5 p-6 backdrop-blur"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="p-3 rounded-full bg-purple-500/10 dark:bg-purple-500/20 mb-4 w-fit"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Heart className="size-6 text-purple-600 dark:text-purple-400" />
            </motion.div>
                                 <h4 className="font-semibold text-gray-900 dark:text-white mb-2">User Experience</h4>
                     <p className="text-sm text-gray-600 dark:text-white/70">
                       Design beautiful and user-friendly experiences
                     </p>
          </motion.div>
        </motion.div>

        {/* Personal interests */}
        <motion.div variants={itemVariants} className="relative">
          <motion.div
            className="relative overflow-hidden rounded-2xl border border-gray-300/20 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 p-6 backdrop-blur"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="p-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="size-5 text-white" />
              </motion.div>
                                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                         Interests & Hobbies
                       </h3>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
                                     <div>
                         <h4 className="font-medium text-gray-900 dark:text-white mb-2">🏸 Sports</h4>
                         <p className="text-sm text-gray-600 dark:text-white/70">
                           Enjoy playing badminton and exercising regularly for good health
                         </p>
                       </div>
                       <div>
                         <h4 className="font-medium text-gray-900 dark:text-white mb-2">📈 Investment</h4>
                         <p className="text-sm text-gray-600 dark:text-white/70">
                           Interested in long-term investment and learning about financial markets
                         </p>
                       </div>
                       <div>
                         <h4 className="font-medium text-gray-900 dark:text-white mb-2">🛠️ Creativity</h4>
                         <p className="text-sm text-gray-600 dark:text-white/70">
                           Love creating tools and applications that are practical and useful
                         </p>
                       </div>
                       <div>
                         <h4 className="font-medium text-gray-900 dark:text-white mb-2">📚 Learning</h4>
                         <p className="text-sm text-gray-600 dark:text-white/70">
                           Always learning new technologies and developing skills continuously
                         </p>
                       </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
  