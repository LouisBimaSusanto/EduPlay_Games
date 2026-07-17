'use client';
import { GameShell } from '@/components/GameShell';
import { GameKereta } from '@/components/games/modul1/level1/GameKereta';

export default function GameKeretaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'kereta', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKereta onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
