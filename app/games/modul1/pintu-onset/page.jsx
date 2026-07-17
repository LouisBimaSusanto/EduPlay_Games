'use client';
import { GameShell } from '@/components/GameShell';
import { GamePintuOnset } from '@/components/games/modul1/level2/GamePintuOnset';

export default function GamePintuOnsetPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'pintu-onset', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePintuOnset onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
