import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Home, Infinity as InfinityIcon, Smile } from "lucide-react";
import { siteData, type FinalCardItem } from "../siteData";

interface ScreenFinaleProps {
  onReplay: () => void;
}

function CardIcon({ type }: { type: FinalCardItem["icon"] }) {
  const iconProps = {
    className: "h-[18px] w-[18px] text-[#f0768a]",
    strokeWidth: 1.9,
  };

  switch (type) {
    case "heart":
      return <Heart {...iconProps} />;
    case "home":
      return <Home {...iconProps} />;
    case "smile":
      return <Smile {...iconProps} />;
    case "infinity":
      return <InfinityIcon {...iconProps} />;
  }
}

export function ScreenFinale({ onReplay }: ScreenFinaleProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.section
      key="screen-finale"
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
          className="font-hand text-[34px] leading-[1.2] font-bold text-[#5a1822] sm:text-[37px]"
        >
          <span className="block">{siteData.finaleHeadingLines[0]}</span>
          <span className="inline-flex items-center justify-center gap-2">
            <span>{siteData.finaleHeadingLines[1]}</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 28 26"
              fill="none"
              stroke="#e86a82"
              strokeWidth="2.1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block h-[27px] w-[27px] translate-y-[2px]"
            >
              <path d="M14 23.5S3 16.5 2 9.2C1.4 4.8 4.8 2 8.5 2c2.4 0 4.3 1.4 5.5 3.3C15.2 3.4 17.1 2 19.5 2 23.2 2 26.6 4.8 26 9.2 25 16.5 14 23.5 14 23.5Z" />
            </svg>
          </span>
        </motion.h2>

        {/* Hugging Couple Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 mb-4 flex w-full items-center justify-center"
        >
          {!imgError ? (
            <img
              src={siteData.coupleImage}
              alt="Cute couple hugging warmly with floating hearts"
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="mask-couple-oval h-auto w-[280px] select-none object-contain brightness-[1.02] sm:w-[308px]"
            />
          ) : (
            <div className="flex h-48 w-64 items-center justify-center rounded-3xl bg-[#fceae2] text-3xl text-[#b65a6a]">
              ♡
            </div>
          )}
        </motion.div>

        {/* Four White Rounded Affirmation Cards */}
        <div className="w-full space-y-3">
          {siteData.finaleCards.map((item, index) => {
            const label = item.text.replace("{name}", siteData.name);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.65,
                  delay: 0.55 + index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-center gap-4 rounded-[18px] bg-white/95 px-5 py-3.5 text-left shadow-[0_4px_18px_rgba(170,115,115,0.08)]"
              >
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fff0f2]"
                >
                  <CardIcon type={item.icon} />
                </span>
                <span className="font-soft text-[15px] font-semibold text-[#543a3f] sm:text-[16px]">
                  {label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Quiet unobtrusive replay action with generous breathing room */}
        <motion.button
          type="button"
          onClick={onReplay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.55 }}
          className="font-soft mt-8 min-h-[44px] cursor-pointer px-4 py-2 text-[13px] font-medium text-[#b58c92] transition-colors duration-200 hover:text-[#6d2b36] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c95c6c]"
        >
          Replay from the start ♡
        </motion.button>
      </div>
    </motion.section>
  );
}
