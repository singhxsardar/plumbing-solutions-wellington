"use client";

import { motion } from "framer-motion";

/**
 * Signature visual motif: a plumbing "pipe route" line with elbow joints,
 * used to thread sections together the way a pipe run connects fixtures.
 * Purely decorative — aria-hidden.
 */
export default function PipeDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`}
      style={{ height: "56px" }}
    >
      <svg
        viewBox="0 0 1200 56"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <motion.path
          d="M0 28 H420 a12 12 0 0 0 12 -12 V20 a12 12 0 0 1 12 -12 H760 a12 12 0 0 1 12 12 v16 a12 12 0 0 0 12 12 H1200"
          fill="none"
          stroke="#1C6DA8"
          strokeOpacity="0.18"
          strokeWidth="2"
          strokeDasharray="6 8"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
        {/* Joint marker */}
        <circle cx="600" cy="20" r="4" fill="#3FA9F5" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
