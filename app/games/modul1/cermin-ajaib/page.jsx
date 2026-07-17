'use client';
import { GameShell } from '@/components/GameShell';
import { GameCerminAjaib } from '@/components/games/modul1/level6/GameCerminAjaib';

export default function GameCerminAjaibPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'cermin-ajaib', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameCerminAjaib onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
