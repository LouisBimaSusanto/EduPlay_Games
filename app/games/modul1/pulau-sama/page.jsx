'use client';
import { GameShell } from '@/components/GameShell';
import { GamePulauSama } from '@/components/games/modul1/level3/GamePulauSama';

export default function GamePulauSamaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'pulau-sama', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePulauSama onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
