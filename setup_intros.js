const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'data');
const pagesDir = path.join(__dirname, 'app', 'games');
const componentsModul1Dir = path.join(__dirname, 'components', 'games', 'modul1');
const componentsModul2Dir = path.join(__dirname, 'components', 'games', 'modul2');

// 1. Create Placeholder Intro Video Component for Modul 2
const introPlaceholderContent = `'use client';
import { useTTS } from "@/hooks/useAudio";

export function IntroVideo({ onComplete }) {
  const { speak } = useTTS();

  const handleStart = () => {
    speak("Ayo kita mulai Modul Dua!");
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-[3rem] border-12 border-[#FFD700] border-b-24 border-b-[#B8860B] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative mb-12 shrink-0 animate-[float_4s_infinite] flex items-center justify-center">
        <h1 className="text-white text-5xl font-black">Video Pembuka Modul 2</h1>
      </div>
      <div className="relative z-20 flex justify-center w-full max-w-md">
        <button 
          onClick={handleStart}
          className="
            w-full bg-linear-to-tr from-[#00E5C8] to-[#00FFD1] 
            text-[#004D40] font-black text-5xl md:text-7xl 
            py-8 px-12 
            rounded-[3rem] 
            border-8 border-[#FFF]
            border-b-24 border-b-[#008A79] 
            shadow-[0_20px_40px_rgba(0,229,200,0.6),inset_0_5px_15px_rgba(255,255,255,0.8)]
            active:border-b-8 active:translate-y-4 
            active:shadow-[0_10px_20px_rgba(0,229,200,0.6),inset_0_5px_15px_rgba(255,255,255,0.8)]
            transition-all duration-100 ease-out
            animate-bounce
          "
        >
          MULAI MAIN 🚀
        </button>
      </div>
    </div>
  );
}`;
fs.writeFileSync(path.join(componentsModul2Dir, 'IntroVideo.jsx'), introPlaceholderContent);

// 2. Process Modul 1
const modul1DataDir = path.join(dataDir, 'modul1');
for (let i = 1; i <= 6; i++) {
  const jsonPath = path.join(modul1DataDir, `level${i}`, 'games.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    // Check if intro already exists
    if (!data.games.find(g => g.id === 'intro')) {
      data.games.unshift({
        id: 'intro',
        title: 'Video Pembuka',
        order: 0,
        is_active: true,
        path: `/games/modul1/level${i}-intro`,
        thumbnail: null
      });
      // Re-order the rest
      data.games.forEach((g, idx) => { g.order = idx + 1; });
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    }
  }

  // Create page
  const pageDir = path.join(pagesDir, 'modul1', `level${i}-intro`);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  
  // Notice we use the IntroVideo from Modul 1
  let introComponentPath = `@/components/games/modul1/level${i}/IntroVideo`;
  if (i > 1) {
     // Wait, is it IntroVideoLvl2? Let's check if it exists, otherwise fallback to level1
     introComponentPath = fs.existsSync(path.join(componentsModul1Dir, `level${i}`, `IntroVideoLvl${i}.jsx`)) 
       ? `@/components/games/modul1/level${i}/IntroVideoLvl${i}`
       : `@/components/games/modul1/level${i}/IntroVideo`;
  }
  // Try to find the exact name, some might be IntroVideo, some IntroVideoLvlX
  let compName = 'IntroVideo';
  if (i > 1 && fs.existsSync(path.join(componentsModul1Dir, `level${i}`, `IntroVideoLvl${i}.jsx`))) {
      compName = `IntroVideoLvl${i}`;
  }

  const pageContent = `'use client';
import { GameShell } from '@/components/GameShell';
import { ${compName} } from '${introComponentPath}';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <${compName} onComplete={handleComplete} />
    </GameShell>
  );
}`;
  fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
}

// 3. Process Modul 2
const modul2DataDir = path.join(dataDir, 'modul2');
for (let i = 1; i <= 4; i++) {
  const jsonPath = path.join(modul2DataDir, `level${i}`, 'games.json');
  if (fs.existsSync(jsonPath)) {
    const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    if (!data.games.find(g => g.id === 'intro')) {
      data.games.unshift({
        id: 'intro',
        title: 'Video Pembuka',
        order: 0,
        is_active: true,
        path: `/games/modul2/level${i}-intro`,
        thumbnail: null
      });
      data.games.forEach((g, idx) => { g.order = idx + 1; });
      fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
    }
  }

  // Create page
  const pageDir = path.join(pagesDir, 'modul2', `level${i}-intro`);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  
  const pageContent = `'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideo } from '@/components/games/modul2/IntroVideo';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideo onComplete={handleComplete} />
    </GameShell>
  );
}`;
  fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
}

console.log("Intro videos setup complete");
