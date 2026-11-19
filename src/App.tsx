import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { siteData } from "./siteData";
import { FloatingHearts } from "./components/FloatingHearts";
import { ScreenOpening } from "./components/ScreenOpening";
import { ScreenGreeting } from "./components/ScreenGreeting";
import { ScreenReasons } from "./components/ScreenReasons";
import { ScreenMemories } from "./components/ScreenMemories";
import { ScreenLetter } from "./components/ScreenLetter";
import { ScreenFinale } from "./components/ScreenFinale";

type ScreenStep = 0 | 1 | 2 | 3 | 4 | 5;

export default function App() {
  const [step, setStep] = useState<ScreenStep>(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasMusic = Boolean(siteData.musicUrl && siteData.musicUrl.trim() !== "");

  // Sync page title with customizable occasion
  useEffect(() => {
    document.title = siteData.occasion;
  }, []);

  // Scroll smoothly back to top whenever changing screens
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  // Start background music gently on first interaction if musicUrl is configured
  const startMusicIfAvailable = () => {
    if (!hasMusic || !audioRef.current) return;
    audioRef.current.volume = 0.45;
    audioRef.current
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => {
        // Browser blocked playback or invalid URL; remain silently muted
        setIsMusicPlaying(false);
      });
  };

  const toggleMusic = () => {
    if (!hasMusic || !audioRef.current) return;
    if (isMusicPlaying) {
      audioRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    }
  };

  const handleOpenSurprise = () => {
    startMusicIfAvailable();
    setStep(1);
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-[#fff6ee]">
      {/* Soft warm blush ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 28%, rgba(255, 241, 236, 0.8) 0%, rgba(255, 246, 238, 1) 70%)",
        }}
      />

      {/* Blurry soft pastel pink floating hearts */}
      <FloatingHearts />

      {/* Optional subtle background audio & discreet toggle (only visible if musicUrl is set) */}
      {hasMusic && (
        <>
          <audio ref={audioRef} src={siteData.musicUrl} loop preload="none" />
          <button
            type="button"
            onClick={toggleMusic}
            aria-label={isMusicPlaying ? "Mute background music" : "Play background music"}
            className="fixed top-4 right-4 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#edd0cb] bg-white/75 text-[#7a3440] shadow-sm backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c95c6c]"
          >
            {isMusicPlaying ? (
              <Volume2 className="h-[18px] w-[18px]" strokeWidth={1.8} />
            ) : (
              <VolumeX className="h-[18px] w-[18px]" strokeWidth={1.8} />
            )}
          </button>
        </>
      )}

      {/* Main storytelling sequence */}
      <main className="relative z-10 flex min-h-[100dvh] w-full flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && <ScreenOpening key="s0" onNext={handleOpenSurprise} />}
          {step === 1 && <ScreenGreeting key="s1" onNext={() => setStep(2)} />}
          {step === 2 && <ScreenReasons key="s2" onNext={() => setStep(3)} />}
          {step === 3 && <ScreenMemories key="s3" onNext={() => setStep(4)} />}
          {step === 4 && <ScreenLetter key="s4" onNext={() => setStep(5)} />}
          {step === 5 && <ScreenFinale key="s5" onReplay={() => setStep(0)} />}
        </AnimatePresence>
      </main>
    </div>
  );
}
