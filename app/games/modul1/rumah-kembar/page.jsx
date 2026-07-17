'use client';
import { GameShell } from '@/components/GameShell';
import { GameRumahKembar } from '@/components/games/modul1/level2/GameRumahKembar';

export default function GameRumahKembarPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'rumah-kembar', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameRumahKembar onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
