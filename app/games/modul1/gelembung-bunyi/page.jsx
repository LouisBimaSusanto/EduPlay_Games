'use client';
import { GameShell } from '@/components/GameShell';
import { GameGelembungBunyi } from '@/components/games/modul1/level3/GameGelembungBunyi';

export default function GameGelembungBunyiPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'gelembung-bunyi', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameGelembungBunyi onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
