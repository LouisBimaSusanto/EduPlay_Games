'use client';
import { GameShell } from '@/components/GameShell';
import { GameKapalSelam } from '@/components/games/modul1/level3/GameKapalSelam';

export default function GameKapalSelamPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'kapal-selam', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKapalSelam onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
