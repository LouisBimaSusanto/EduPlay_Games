'use client';
import { GameShell } from '@/components/GameShell';
import { GameKatakLompat } from '@/components/games/modul1/level2/GameKatakLompat';

export default function GameKatakLompatPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'katak-lompat', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKatakLompat onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
