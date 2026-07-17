const fs = require('fs');
const path = require('path');

const modul2Dir = path.join(__dirname, 'components', 'games', 'modul2');
const dataDir = path.join(__dirname, 'data', 'modul2');
const pagesDir = path.join(__dirname, 'app', 'games', 'modul2');

if (!fs.existsSync(modul2Dir)) fs.mkdirSync(modul2Dir, { recursive: true });
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

const modul2Games = [
  { id: 'jejak-warna', title: 'Jejak Warna', component: 'GameJejakWarna', level: 1 },
  { id: 'melodi-hutan', title: 'Melodi Hutan', component: 'GameMelodiHutan', level: 1 },
  { id: 'bintangku', title: 'Di Mana Bintangku?', component: 'GameBintangku', level: 1 },
  
  { id: 'dokter-angka', title: 'Dokter Angka', component: 'GameDokterAngka', level: 2 },
  { id: 'kode-rahasia', title: 'Kode Rahasia', component: 'GameKodeRahasia', level: 2 },
  { id: 'peta-bajak-laut', title: 'Peta Bajak Laut', component: 'GamePetaBajakLaut', level: 2 },
  
  { id: 'angka-terbalik', title: 'Angka Terbalik', component: 'GameAngkaTerbalik', level: 3 },
  { id: 'koki-ajaib', title: 'Koki Ajaib', component: 'GameKokiAjaib', level: 3 },
  { id: 'detektor-matriks', title: 'Detektor Matriks', component: 'GameDetektorMatriks', level: 3 },
  
  { id: 'detektif-ganda', title: 'Detektif Ganda', component: 'GameDetektifGanda', level: 4 },
  { id: 'rotasi-bintang', title: 'Rotasi Bintang', component: 'GameRotasiBintang', level: 4 },
  { id: 'orkestra-ingatan', title: 'Orkestra Ingatan', component: 'GameOrkestraIngatan', level: 4 }
];

// Initialize games.json structures
const levelData = {
  1: { intro_video_url: null, games: [] },
  2: { intro_video_url: null, games: [] },
  3: { intro_video_url: null, games: [] },
  4: { intro_video_url: null, games: [] }
};

modul2Games.forEach((game, index) => {
  // Populate levelData
  levelData[game.level].games.push({
    id: game.id,
    title: game.title,
    order: (index % 3) + 1,
    is_active: true,
    path: `/games/modul2/${game.id}`,
    thumbnail: null
  });

  // Create component file
  const compContent = `'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ${game.component}({ onComplete, onClose }) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-black/40">
      <h2 className="text-4xl font-black text-white drop-shadow-lg mb-8">
        ${game.title} (Sedang Dibangun)
      </h2>
      <button 
        onClick={onComplete}
        className="px-8 py-4 bg-green-500 text-white rounded-3xl text-2xl font-black shadow-[0_8px_0_#15803d] active:shadow-[0_0px_0_#15803d] active:translate-y-2 transition-all">
        SELESAIKAN GAME
      </button>
      <button 
        onClick={onClose}
        className="mt-8 px-8 py-4 bg-red-500 text-white rounded-3xl text-2xl font-black shadow-[0_8px_0_#b91c1c] active:shadow-[0_0px_0_#b91c1c] active:translate-y-2 transition-all">
        KELUAR
      </button>
    </div>
  );
}`;
  if (game.id === 'jejak-warna') {
     // I'll manually overwrite this one later with the provided code
  }
  fs.writeFileSync(path.join(modul2Dir, `${game.component}.jsx`), compContent);

  // Create page file
  const pageDir = path.join(pagesDir, game.id);
  if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
  
  const pageContent = `'use client';
import { GameShell } from '@/components/GameShell';
import { ${game.component} } from '@/components/games/modul2/${game.component}';

export default function ${game.component}Page() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: '${game.id}', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <${game.component} onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
`;
  fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
});

// Write games.json for all levels
for (let i = 1; i <= 4; i++) {
  const lvlDir = path.join(dataDir, `level${i}`);
  if (!fs.existsSync(lvlDir)) fs.mkdirSync(lvlDir, { recursive: true });
  fs.writeFileSync(path.join(lvlDir, 'games.json'), JSON.stringify(levelData[i], null, 2));
}

console.log("Modul 2 setup complete");
