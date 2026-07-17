'use client';
import { GameShell } from '@/components/GameShell';
import { GameKembarRima } from '@/components/games/modul1/level2/GameKembarRima';

export default function GameKembarRimaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'kembar-rima', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKembarRima onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
