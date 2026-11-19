import { useState } from "react";
import { motion } from "motion/react";
import { siteData } from "../siteData";
import { RomanticButton } from "./RomanticButton";

interface ScreenGreetingProps {
  onNext: () => void;
}

function DoodleHeart({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 28 26"
      fill="none"
      stroke="#d83b7a"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 23.5S3 16.5 2 9.2C1.4 4.8 4.8 2 8.5 2c2.4 0 4.3 1.4 5.5 3.3C15.2 3.4 17.1 2 19.5 2 23.2 2 26.6 4.8 26 9.2 25 16.5 14 23.5 14 23.5Z" />
    </svg>
  );
}

function DoodleStar({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      fill="none"
      stroke="#e79c30"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 3.5l3.5 7.6 8.2 1-6.1 5.6 1.6 8.2L16 21.8l-7.2 4.1 1.6-8.2-6.1-5.6 8.2-1L16 3.5z" />
    </svg>
  );
}

export function ScreenGreeting({ onNext }: ScreenGreetingProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.section
      key="screen-greeting"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-10"
    >
      <div className="flex w-full max-w-[390px] flex-col items-center text-center">
        {/* Three Torn Paper Strips + Corner Doodles */}
        <div className="relative flex w-full flex-col items-center py-5">
          {/* Corner outline doodles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="doodle-float pointer-events-none absolute top-4 left-2 sm:left-3"
          >
            <DoodleHeart className="h-7 w-7 -rotate-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="doodle-float pointer-events-none absolute top-1 right-2 sm:right-3"
            style={{ animationDelay: "-1.2s" }}
          >
            <DoodleStar className="h-8 w-8 rotate-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="doodle-float pointer-events-none absolute bottom-3 left-1 sm:left-2"
            style={{ animationDelay: "-2.1s" }}
          >
            <DoodleStar className="h-8 w-8 -rotate-12" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="doodle-float pointer-events-none absolute right-1 bottom-4 sm:right-2"
            style={{ animationDelay: "-0.7s" }}
          >
            <DoodleHeart className="h-7 w-7 rotate-12" />
          </motion.div>

          {/* Strip 1: Happy */}
          <motion.div
            initial={{ opacity: 0, y: 16, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: -3.5 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="torn-paper-strip z-10 mb-2.5"
          >
            <div className="torn-paper-inner bg-[#f9efe1] px-11 py-2.5 sm:px-13">
              <span className="font-hand block text-[33px] leading-tight font-bold text-[#5a1822] sm:text-[37px]">
                {siteData.occasionTopWord}
              </span>
            </div>
          </motion.div>

          {/* Strip 2: International Men's Day */}
          <motion.div
            initial={{ opacity: 0, y: 18, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -0.8 }}
            transition={{ duration: 0.72, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="torn-paper-strip z-20 mb-2.5 max-w-full"
          >
            <div className="torn-paper-inner bg-[#ffd2d9] px-5 py-3 sm:px-7">
              <span className="font-hand block whitespace-nowrap text-[22px] leading-[1.18] font-bold text-[#5a1822] min-[390px]:text-[24px] sm:text-[28px]">
                {siteData.occasionMainLine}
              </span>
            </div>
          </motion.div>

          {/* Strip 3: Handsome / His Name */}
          <motion.div
            initial={{ opacity: 0, y: 18, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2.8 }}
            transition={{ duration: 0.72, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
            className="torn-paper-strip z-10"
          >
            <div className="torn-paper-inner bg-[#d8ebff] px-10 py-2.5 sm:px-12">
              <span className="font-hand block text-[30px] leading-tight font-bold text-[#5a1822] sm:text-[34px]">
                {siteData.name}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Animated Mochi kissing GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-2 mb-3 flex items-center justify-center"
        >
          {!imgError ? (
            <img
              src={siteData.greetingGif}
              alt="Cute animated Mochi blowing kisses"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="h-[156px] w-[156px] select-none object-contain mix-blend-multiply sm:h-[168px] sm:w-[168px]"
            />
          ) : (
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#fceae2] text-3xl">
              ♡
            </div>
          )}
        </motion.div>

        {/* Sweet subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="font-soft text-[15px] leading-[1.65] font-medium text-[#5c3e43] sm:text-[16px]"
        >
          <span className="block">{siteData.greetingSubtitleLines[0]}</span>
          <span className="inline-flex items-center justify-center gap-1">
            <span>{siteData.greetingSubtitleLines[1]}</span>
            <span aria-hidden="true" className="text-[#8e525d]">
              ♡
            </span>
          </span>
        </motion.p>

        {/* Continue button */}
        <div className="mt-7">
          <RomanticButton
            label={siteData.greetingButton}
            onClick={onNext}
            delay={1.38}
          />
        </div>
      </div>
    </motion.section>
  );
}
