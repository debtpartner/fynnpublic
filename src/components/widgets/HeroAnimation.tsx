import { motion } from "framer-motion";
import { FileText, DollarSign, LineChart, Mail, MessageSquare, Receipt, Calculator, Shield, Clock } from "lucide-react";

export function HeroAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-20 overflow-hidden pointer-events-none">
      {/* Left side animations */}
      <motion.div
        className="absolute left-[10%] top-[20%] sm:block"
        initial={{ x: -50, opacity: 0 }}
        animate={{
          x: ["-50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        <FileText className="w-12 h-12 md:w-16 md:h-16 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute left-[25%] top-[40%]"
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: ["-50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <MessageSquare className="w-8 h-8 md:w-12 md:h-12 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute left-[15%] bottom-[30%]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          repeatDelay: 1.2,
        }}
      >
        <Calculator className="w-10 h-10 md:w-14 md:h-14 text-primary dark:text-primary" />
      </motion.div>

      {/* Center animations */}
      <motion.div
        className="absolute left-[40%] top-[25%]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <DollarSign className="w-10 h-10 md:w-14 md:h-14 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute left-[45%] bottom-[20%]"
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: ["50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        <Shield className="w-12 h-12 md:w-16 md:h-16 text-primary dark:text-primary" />
      </motion.div>

      {/* Right side animations */}
      <motion.div
        className="absolute right-[10%] top-[30%]"
        initial={{ x: 50, opacity: 0 }}
        animate={{
          x: ["50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1,
        }}
      >
        <LineChart className="w-12 h-12 md:w-16 md:h-16 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute right-[25%] top-[45%]"
        initial={{ y: 50, opacity: 0 }}
        animate={{
          y: ["50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          delay: 0.5,
        }}
      >
        <Mail className="w-8 h-8 md:w-12 md:h-12 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute right-[20%] bottom-[25%]"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: [0.5, 1],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.3,
          repeat: Infinity,
          repeatDelay: 1.7,
        }}
      >
        <Receipt className="w-10 h-10 md:w-14 md:h-14 text-primary dark:text-primary" />
      </motion.div>

      <motion.div
        className="absolute right-[35%] top-[15%]"
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: ["-50%", "0%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.7,
          repeat: Infinity,
          repeatDelay: 1.3,
        }}
      >
        <Clock className="w-8 h-8 md:w-12 md:h-12 text-primary dark:text-primary" />
      </motion.div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/20 to-primary/10 dark:from-primary/10 dark:via-primary/20 dark:to-primary/10" />
    </div>
  );
}