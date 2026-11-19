/**
 * ============================================================
 * EASY CUSTOMIZATION CONFIG
 * Edit any text, name, music URL, or photos below!
 * ============================================================
 */

export interface ReasonNote {
  id: number;
  lines: string[];
  bgColor: string;
  tapeColor: string;
  rotateDeg: number;
}

export interface MemoryPhoto {
  id: number;
  url: string;
  alt: string;
  rotateDeg: number;
  objectPosition?: string;
}

export interface FinalCardItem {
  id: string;
  icon: "heart" | "home" | "smile" | "infinity";
  text: string;
}

export const siteData = {
  // His name or sweet nickname (appears on Greeting, Letter, and Final Screen)
  name: "Handsome",

  // Occasion wording (updated for International Men's Day)
  occasion: "Happy International Men's Day",
  occasionTopWord: "Happy",
  occasionMainLine: "International Men's Day",

  // Optional background music MP3 URL (leave "" for no music)
  // Example: "https://example.com/romantic-song.mp3" or "/song.mp3"
  musicUrl: "",

  // Screen 1 — Opening
  openingTopLines: ["Someone is thinking", "about you..."],
  openingBottomLines: ["And it's someone who", "adores you"],
  openingButton: "Open your surprise",
  peekingImage: "/src/assets/images/peeking_girl_1795060466938.jpg",

  // Screen 2 — International Men's Day Greeting
  greetingSubtitleLines: [
    "Today is all about you and",
    "how special you are to me",
  ],
  greetingButton: "Continue",
  greetingGif: "/assets/mochi-kiss.gif",

  // Screen 3 — Reasons Sticky Notes
  reasonsHeadingLines: ["A few reasons", "why you're so special"],
  reasons: [
    {
      id: 1,
      lines: ["You always", "listen"],
      bgColor: "#ffe0e3",
      tapeColor: "rgba(232, 191, 166, 0.62)",
      rotateDeg: -3.5,
    },
    {
      id: 2,
      lines: ["You make me", "smile every", "day"],
      bgColor: "#d8eeff",
      tapeColor: "rgba(235, 198, 170, 0.62)",
      rotateDeg: 3.5,
    },
    {
      id: 3,
      lines: ["You care so", "deeply"],
      bgColor: "#dce9cb",
      tapeColor: "rgba(198, 210, 178, 0.68)",
      rotateDeg: 3,
    },
    {
      id: 4,
      lines: ["You're so", "supportive"],
      bgColor: "#ffedc2",
      tapeColor: "rgba(238, 194, 150, 0.62)",
      rotateDeg: -2.5,
    },
    {
      id: 5,
      lines: ["You make", "everything", "feel easier"],
      bgColor: "#eadcff",
      tapeColor: "rgba(202, 186, 224, 0.68)",
      rotateDeg: -3.5,
    },
    {
      id: 6,
      lines: ["You're just", "you, & that's", "perfect"],
      bgColor: "#ffdcd9",
      tapeColor: "rgba(232, 186, 178, 0.62)",
      rotateDeg: 2.5,
    },
  ] as ReasonNote[],
  reasonsButton: "There's more",

  // Screen 4 — My Favorite Memories (Polaroid Stack)
  memoriesHeading: "My Favorite Memories",
  memoriesPrompt: "Tap the heart to reveal",
  memoriesDonePrompt: "My heart is full of you",
  memoriesButton: "Read my letter",
  photos: [
    {
      id: 1,
      url: "/assets/aistudio/Memory_1_35f4ff81.jpeg",
      alt: "Memory photo 1",
      rotateDeg: -4,
      objectPosition: "50% 25%",
    },
    {
      id: 2,
      url: "/assets/aistudio/Memory_2_e1dad46c.jpeg",
      alt: "Memory photo 2",
      rotateDeg: 3,
      objectPosition: "50% 30%",
    },
    {
      id: 3,
      url: "/assets/aistudio/Memory_3_a20649f2.jpeg",
      alt: "Memory photo 3",
      rotateDeg: -2,
      objectPosition: "50% 20%",
    },
    {
      id: 4,
      url: "/assets/aistudio/Memory_4_28dbecae.jpeg",
      alt: "Memory photo 4",
      rotateDeg: 4,
      objectPosition: "50% 35%",
    },
  ] as MemoryPhoto[],

  // Screen 5 — A Little Message For You
  letterHeadingLines: ["A little message", "for you"],
  letterParagraphs: [
    "Thank you for always being there for me, for making me feel so loved, and for all the little things you do that mean the most to me.",
    "You make my days brighter, my life happier, and everything feel so much easier. I'm so lucky to have you.",
  ],
  letterButton: "One last thing",

  // Screen 6 — Thank You For Being Mine
  finaleHeadingLines: ["Thank you for", "being mine"],
  coupleImage: "/src/assets/images/couple_hugging_1795060465002.jpg",
  finaleCards: [
    { id: "person", icon: "heart", text: "My favorite person" },
    { id: "safe", icon: "home", text: "My safe place" },
    { id: "happy", icon: "smile", text: "My happiness" },
  ] as FinalCardItem[],
};
