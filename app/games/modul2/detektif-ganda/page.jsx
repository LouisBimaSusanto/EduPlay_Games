'use client';
import { GameShell } from '@/components/GameShell';
import { GameDetektifGanda } from '@/components/games/modul2/GameDetektifGanda';

export default function GameDetektifGandaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'detektif-ganda', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameDetektifGanda onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
