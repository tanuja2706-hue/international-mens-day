import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { siteData } from "../siteData";
import { RomanticButton } from "./RomanticButton";

interface ScreenMemoriesProps {
  onNext: () => void;
}

export function ScreenMemories({ onNext }: ScreenMemoriesProps) {
  const photos = siteData.photos;
  const total = photos.length;
  const [revealedCount, setRevealedCount] = useState(0);
  const [failedIds, setFailedIds] = useState<Record<number, boolean>>({});
  const [burstKey, setBurstKey] = useState(0);

  const isAllRevealed = revealedCount >= total;
  // Heart fill percentage drains from 100% -> 0% as each memory is revealed (matching reference video)
  const remainingRatio = total > 0 ? Math.max(0, (total - revealedCount) / total) : 0;
  const fillY = 100 - remainingRatio * 100;

  const handleHeartTap = () => {
    if (isAllRevealed) return;
    setRevealedCount((prev) => Math.min(prev + 1, total));
    setBurstKey((prev) => prev + 1);
  };

  return (
    <motion.section
      key="screen-memories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeInOut" } }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="flex min-h-[100dvh] w-full flex-col items-center justify-center px-5 py-9"
    >
      <div className="flex w-full max-w-[380px] flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-hand text-[32px] leading-[1.2] font-bold text-[#5a1822] sm:text-[35px]"
        >
          {siteData.memoriesHeading}
        </motion.h2>

        {/* Subtitle changes when all photos revealed */}
        <div className="mt-1.5 h-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={isAllRevealed ? "done" : "prompt"}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.4 }}
              className="font-soft text-[14px] font-medium text-[#9a7c80]"
            >
              {isAllRevealed
                ? siteData.memoriesDonePrompt
                : siteData.memoriesPrompt}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Polaroid Stack Container */}
        <div className="relative my-5 flex h-[284px] w-full items-center justify-center sm:h-[302px]">
          {photos.slice(0, revealedCount).map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{
                opacity: 0,
                scale: 0.86,
                y: 26,
                rotate: photo.rotateDeg - 5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: photo.rotateDeg,
              }}
              transition={{
                duration: 0.58,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ zIndex: index + 1 }}
              className="absolute w-[232px] rounded-[4px] bg-white p-2.5 pb-9 shadow-[0_10px_28px_rgba(122,72,76,0.14)] sm:w-[248px]"
            >
              <div className="aspect-square w-full overflow-hidden bg-[#f7eae5]">
                {!failedIds[photo.id] ? (
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    onError={() =>
                      setFailedIds((prev) => ({ ...prev, [photo.id]: true }))
                    }
                    style={
                      photo.objectPosition
                        ? { objectPosition: photo.objectPosition }
                        : undefined
                    }
                    className="h-full w-full select-none object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#fde5df] to-[#f8d2d8] p-4 text-[#7c3e48]">
                    <span className="text-2xl">♡</span>
                    <span className="font-hand mt-1 text-base">
                      Memory {index + 1}
                    </span>
                  </div>
                )}
              </div>

              {/* Tiny pink heart on bottom-right corner of Polaroid frame */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="#ff8599"
                className="absolute right-3 bottom-2.5 h-3.5 w-3.5"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Interactive Draining Heart Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-1 flex items-center justify-center"
        >
          {/* Subtle floating micro-heart on tap */}
          {burstKey > 0 && (
            <motion.span
              key={burstKey}
              initial={{ opacity: 0.85, y: 0, scale: 0.7 }}
              animate={{ opacity: 0, y: -44, scale: 1.25 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              aria-hidden="true"
              className="pointer-events-none absolute -top-2 text-lg text-[#ff7688]"
            >
              ♡
            </motion.span>
          )}

          <motion.button
            type="button"
            onClick={handleHeartTap}
            disabled={isAllRevealed}
            aria-label={
              isAllRevealed
                ? "All memories revealed"
                : `Tap heart to reveal memory ${revealedCount + 1} of ${total}`
            }
            whileHover={isAllRevealed ? undefined : { scale: 1.06 }}
            whileTap={isAllRevealed ? undefined : { scale: 0.88 }}
            transition={{ type: "spring", stiffness: 360, damping: 20 }}
            className={`relative flex h-[108px] w-[118px] items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e06a7c] ${
              isAllRevealed ? "cursor-default" : "cursor-pointer"
            }`}
          >
            <svg
              viewBox="0 0 112 100"
              className={`h-full w-full overflow-visible transition-all duration-500 ${
                isAllRevealed
                  ? "drop-shadow-[0_6px_14px_rgba(240,170,185,0.22)]"
                  : "drop-shadow-[0_12px_22px_rgba(255,112,132,0.3)]"
              }`}
            >
              <defs>
                <clipPath id="draining-heart-clip">
                  <path d="M56 94C53.6 94 51.3 93.1 49.4 91.5C35.2 79.4 6 53.9 6 29.8C6 14.3 18.2 3 33.1 3C42.2 3 50.6 7.5 56 14.8C61.4 7.5 69.8 3 78.9 3C93.8 3 106 14.3 106 29.8C106 53.9 76.8 79.4 62.6 91.5C60.7 93.1 58.4 94 56 94Z" />
                </clipPath>
              </defs>

              {/* Soft pale pink empty heart base */}
              <path
                d="M56 94C53.6 94 51.3 93.1 49.4 91.5C35.2 79.4 6 53.9 6 29.8C6 14.3 18.2 3 33.1 3C42.2 3 50.6 7.5 56 14.8C61.4 7.5 69.8 3 78.9 3C93.8 3 106 14.3 106 29.8C106 53.9 76.8 79.4 62.6 91.5C60.7 93.1 58.4 94 56 94Z"
                fill="#ffe0e8"
                stroke="#f5b4c4"
                strokeWidth="2"
              />

              {/* Coral pink draining liquid fill */}
              <g clipPath="url(#draining-heart-clip)">
                <motion.rect
                  x="0"
                  width="112"
                  height="100"
                  initial={false}
                  animate={{ y: fillY }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  fill="#ff7182"
                />
              </g>
            </svg>
          </motion.button>
        </motion.div>

        {/* Bottom CTA appears once all Polaroids are revealed */}
        <div className="mt-5 flex min-h-[54px] items-center justify-center">
          <AnimatePresence>
            {isAllRevealed && (
              <RomanticButton
                label={siteData.memoriesButton}
                onClick={onNext}
                delay={0.2}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
