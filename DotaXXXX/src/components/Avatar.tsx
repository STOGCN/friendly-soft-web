import { motion } from "framer-motion";
import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function Avatar({ 
  src, 
  alt = "Profile picture", 
  size = "md",
  className = "" 
}: AvatarProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40"
  };

  const borderSizeClasses = {
    sm: "p-0.5",
    md: "p-1",
    lg: "p-1.5",
    xl: "p-2"
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Gradient border */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 p-1">
          {src ? (
            <motion.img
              src={src}
              alt={alt}
              className={`w-full h-full rounded-full object-cover shadow-lg`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          ) : (
            <motion.div
              className={`w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center shadow-lg`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <User className="w-1/2 h-1/2 text-gray-500 dark:text-gray-400" />
            </motion.div>
          )}
        </div>
      </div>
      
      {/* Floating particles around avatar */}
      <motion.div
        className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full opacity-60"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-2 h-2 bg-purple-500 rounded-full opacity-60"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </motion.div>
  );
}
