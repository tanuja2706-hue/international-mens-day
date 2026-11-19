import { motion } from "motion/react";

interface RomanticButtonProps {
  label: string;
  onClick: () => void;
  delay?: number;
  className?: string;
}

export function RomanticButton({
  label,
  onClick,
  delay = 0.5,
  className = "",
}: RomanticButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.97 }}
      className={`font-soft inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-full border border-[#dfa09a] bg-gradient-to-b from-[#fde4dc] to-[#f9cdc5] px-8 py-3 text-[15px] font-semibold tracking-[0.01em] text-[#5e1d26] shadow-[0_6px_18px_rgba(218,136,130,0.22)] transition-shadow duration-200 hover:shadow-[0_8px_22px_rgba(218,136,130,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c95c6c] whitespace-nowrap ${className}`}
    >
      <span>{label}</span>
      <span aria-hidden="true" className="text-[16px] leading-none">
        →
      </span>
    </motion.button>
  );
}
