'use client';
import { GameShell } from '@/components/GameShell';
import { GamePancuran } from '@/components/games/modul1/level1/GamePancuran';

export default function GamePancuranPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'pancuran', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePancuran onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
