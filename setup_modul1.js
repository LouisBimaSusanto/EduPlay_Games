const fs = require('fs');
const path = require('path');

const modul1Dir = path.join(__dirname, 'components', 'games', 'modul1');
const dataDir = path.join(__dirname, 'data', 'modul1');
const pagesDir = path.join(__dirname, 'app', 'games', 'modul1');

// Create base directories
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

for (let i = 1; i <= 6; i++) {
  const levelDir = path.join(modul1Dir, `level${i}`);
  if (!fs.existsSync(levelDir)) continue;

  const files = fs.readdirSync(levelDir).filter(f => f.startsWith('Game') && f.endsWith('.jsx'));
  
  const gamesJson = {
    intro_video_url: null,
    games: []
  };

  let order = 1;
  for (const file of files) {
    const componentName = file.replace('.jsx', '');
    // e.g. GameBatuLoncatan -> batu-loncatan
    let gameId = componentName.replace('Game', '');
    // Convert to kebab-case
    gameId = gameId.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    
    // Add to json
    gamesJson.games.push({
      id: gameId,
      title: componentName.replace('Game', '').replace(/([A-Z])/g, ' $1').trim(),
      order: order++,
      is_active: true,
      path: `/games/modul1/${gameId}`,
      thumbnail: null
    });

    // Create page
    const pageDir = path.join(pagesDir, gameId);
    if (!fs.existsSync(pageDir)) fs.mkdirSync(pageDir, { recursive: true });
    
    const pageContent = `'use client';
import { GameShell } from '@/components/GameShell';
import { ${componentName} } from '@/components/games/modul1/level${i}/${componentName}';

export default function ${componentName}Page() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: '${gameId}', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <${componentName} onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
`;
    fs.writeFileSync(path.join(pageDir, 'page.jsx'), pageContent);
  }

  // Write games.json
  const levelDataDir = path.join(dataDir, `level${i}`);
  if (!fs.existsSync(levelDataDir)) fs.mkdirSync(levelDataDir, { recursive: true });
  fs.writeFileSync(path.join(levelDataDir, 'games.json'), JSON.stringify(gamesJson, null, 2));
}

console.log("Modul 1 setup complete");
