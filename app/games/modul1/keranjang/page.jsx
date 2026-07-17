'use client';
import { GameShell } from '@/components/GameShell';
import { GameKeranjang } from '@/components/games/modul1/level1/GameKeranjang';

export default function GameKeranjangPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'keranjang', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKeranjang onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
