'use client';
import { GameShell } from '@/components/GameShell';
import { GameBintangku } from '@/components/games/modul2/GameBintangku';

export default function GameBintangkuPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'bintangku', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameBintangku onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
