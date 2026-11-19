import { useState } from "react";
import { motion } from "motion/react";
import { siteData } from "../siteData";
import { RomanticButton } from "./RomanticButton";

interface ScreenOpeningProps {
  onNext: () => void;
}

export function ScreenOpening({ onNext }: ScreenOpeningProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.section
      key="screen-opening"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-10"
    >
      <div className="flex w-full max-w-[420px] flex-col items-center text-center">
        {/* Top handwritten prompt */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand -rotate-[3deg] text-[31px] leading-[1.28] font-normal text-[#5a1822] sm:text-[34px]"
        >
          {siteData.openingTopLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Peeking girl illustration across width with slight romantic tilt */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative my-5 w-[calc(100%+2.5rem)] max-w-[440px] -rotate-[3deg] overflow-hidden"
        >
          {!imgError ? (
            <img
              src={siteData.peekingImage}
              alt="Someone peeking happily with hearts"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="mask-peeking h-auto w-full select-none object-cover brightness-[1.02]"
            />
          ) : (
            <div className="flex h-48 w-full items-center justify-center rounded-2xl bg-[#fcebe2] text-[#7a3b45]">
              <span className="font-hand text-2xl">Peeking at you ♡</span>
            </div>
          )}
        </motion.div>

        {/* Lower handwritten line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand mt-2 -rotate-[2.5deg] text-[27px] leading-[1.32] text-[#5a1822] sm:text-[30px]"
        >
          <span className="block">{siteData.openingBottomLines[0]}</span>
          <span className="inline-flex items-center justify-center gap-1.5">
            <span>{siteData.openingBottomLines[1]}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block h-[22px] w-[22px] translate-y-[1px] text-[#5a1822]"
            >
              <path d="M12 20.5s-7.5-4.7-9.2-9.2C1.6 8.1 3.7 4.8 7 4.8c2 0 3.7 1.1 5 2.7 1.3-1.6 3-2.7 5-2.7 3.3 0 5.4 3.3 4.2 6.5-1.7 4.5-9.2 9.2-9.2 9.2z" />
            </svg>
          </span>
        </motion.p>

        {/* CTA Button */}
        <div className="mt-8">
          <RomanticButton
            label={siteData.openingButton}
            onClick={onNext}
            delay={1.45}
          />
        </div>
      </div>
    </motion.section>
  );
}
