'use client';
import { GameShell } from '@/components/GameShell';
import { GamePetiHartaKarun } from '@/components/games/modul1/level6/GamePetiHartaKarun';

export default function GamePetiHartaKarunPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'peti-harta-karun', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePetiHartaKarun onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
