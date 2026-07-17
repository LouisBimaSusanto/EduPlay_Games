'use client';
import { GameShell } from '@/components/GameShell';
import { GameJejakWarna } from '@/components/games/modul2/GameJejakWarna';

export default function GameJejakWarnaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'jejak-warna', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameJejakWarna onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
