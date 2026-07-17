'use client';
import { GameShell } from '@/components/GameShell';
import { GameTongkatPenghilang } from '@/components/games/modul1/level4/GameTongkatPenghilang';

export default function GameTongkatPenghilangPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'tongkat-penghilang', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameTongkatPenghilang onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
