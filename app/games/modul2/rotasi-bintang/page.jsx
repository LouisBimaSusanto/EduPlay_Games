'use client';
import { GameShell } from '@/components/GameShell';
import { GameRotasiBintang } from '@/components/games/modul2/GameRotasiBintang';

export default function GameRotasiBintangPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'rotasi-bintang', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameRotasiBintang onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
