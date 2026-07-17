'use client';
import { GameShell } from '@/components/GameShell';
import { GamePaluEs } from '@/components/games/modul1/level1/GamePaluEs';

export default function GamePaluEsPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'palu-es', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePaluEs onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
