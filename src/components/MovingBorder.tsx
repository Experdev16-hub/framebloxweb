"use client";

import { motion } from "framer-motion";

export default function GlowBorderButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      className="relative px-8 py-3 rounded-xl text-white font-semibold overflow-hidden group"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      whileHover={{
        backgroundColor: "rgba(234, 88, 12, 1)",
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Static gray border */}
      <span className="absolute inset-0 rounded-xl border-2 border-gray-600 pointer-events-none"></span>

      {/* Animated glowing strip */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Orange glow gradient */}
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ea580c" stopOpacity="1" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Motion path around button border */}
        <motion.rect
          x="6"
          y="6"
          rx="12"
          ry="12"
          width="calc(100% - 12)"
          height="calc(100% - 12)"
          fill="none"
          stroke="url(#glow-gradient)"
          strokeWidth="4"
          strokeDasharray="400 1200"
          initial={{ strokeDashoffset: 0 }}
          animate={{ 
            strokeDashoffset: [0, -1600],
          }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>

      {/* Hover background animation layer */}
      <motion.div
        className="absolute inset-0 bg-orange-600 rounded-xl opacity-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileHover={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, ease: "easeOut" }
        }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Button text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}