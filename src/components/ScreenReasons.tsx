import { motion } from "motion/react";
import { siteData } from "../siteData";
import { RomanticButton } from "./RomanticButton";

interface ScreenReasonsProps {
  onNext: () => void;
}

export function ScreenReasons({ onNext }: ScreenReasonsProps) {
  return (
    <motion.section
      key="screen-reasons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-10"
    >
      <div className="flex w-full max-w-[376px] flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand text-[30px] leading-[1.2] font-bold text-[#5a1822] sm:text-[34px]"
        >
          {siteData.reasonsHeadingLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </motion.h2>

        {/* Six Pastel Sticky Notes in 2-Column Grid */}
        <div className="mt-8 grid w-full grid-cols-2 gap-x-4 gap-y-6 px-1 sm:gap-x-5 sm:gap-y-7">
          {siteData.reasons.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{
                opacity: 0,
                scale: 0.76,
                y: 16,
                rotate: note.rotateDeg - 4,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: note.rotateDeg,
              }}
              transition={{
                duration: 0.62,
                delay: 0.28 + index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ backgroundColor: note.bgColor }}
              className="relative flex min-h-[128px] items-center justify-center rounded-[3px] px-3 py-5 shadow-[0_6px_16px_rgba(128,82,76,0.11)] sm:min-h-[138px] sm:px-4"
            >
              {/* Translucent pastel tape piece at top */}
              <span
                aria-hidden="true"
                style={{ backgroundColor: note.tapeColor }}
                className="pointer-events-none absolute -top-2.5 left-1/2 h-[22px] w-[42px] -translate-x-1/2 rounded-[2px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[1px]"
              />

              {/* Handwritten message */}
              <p className="font-hand text-[19px] leading-[1.35] font-normal text-[#4c1c28] sm:text-[21px]">
                {note.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-9">
          <RomanticButton
            label={siteData.reasonsButton}
            onClick={onNext}
            delay={1.32}
          />
        </div>
      </div>
    </motion.section>
  );
}
