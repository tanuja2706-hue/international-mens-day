import { motion } from "motion/react";
import { siteData } from "../siteData";
import { RomanticButton } from "./RomanticButton";

interface ScreenLetterProps {
  onNext: () => void;
}

export function ScreenLetter({ onNext }: ScreenLetterProps) {
  return (
    <motion.section
      key="screen-letter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-10"
    >
      <div className="flex w-full max-w-[366px] flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand text-[32px] leading-[1.2] font-bold text-[#5a1822] sm:text-[35px]"
        >
          {siteData.letterHeadingLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h2>

        {/* White Letter Card */}
        <motion.article
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-8 w-full rounded-[26px] bg-white px-7 py-8 text-left shadow-[0_12px_36px_rgba(176,118,120,0.11)]"
        >
          {/* Floating white circle heart badge at top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
            className="absolute -top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_4px_14px_rgba(220,115,130,0.2)]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="#ff6a80"
              className="h-5 w-5"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>

          {/* Greeting */}
          <p className="font-soft mb-4 text-[17px] font-bold text-[#4a1a24]">
            Hey {siteData.name},
          </p>

          {/* Body paragraphs */}
          <div className="font-soft space-y-4 text-[15px] leading-[1.72] font-medium text-[#6f575b]">
            {siteData.letterParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Subtle blush horizontal divider */}
          <hr className="my-6 border-0 border-t border-[#f8e4e8]" />

          {/* Single centered red heart */}
          <div className="flex items-center justify-center py-0.5">
            <svg
              aria-label="Red heart"
              role="img"
              viewBox="0 0 24 24"
              fill="#e63950"
              className="h-7 w-7 drop-shadow-[0_3px_10px_rgba(230,57,80,0.32)]"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </motion.article>

        {/* Bottom Button */}
        <div className="mt-8">
          <RomanticButton
            label={siteData.letterButton}
            onClick={onNext}
            delay={0.85}
          />
        </div>
      </div>
    </motion.section>
  );
}
