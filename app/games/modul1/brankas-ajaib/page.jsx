'use client';
import { GameShell } from '@/components/GameShell';
import { GameBrankasAjaib } from '@/components/games/modul1/level4/GameBrankasAjaib';

export default function GameBrankasAjaibPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'brankas-ajaib', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameBrankasAjaib onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
