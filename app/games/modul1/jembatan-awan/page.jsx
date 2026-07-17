'use client';
import { GameShell } from '@/components/GameShell';
import { GameJembatanAwan } from '@/components/games/modul1/level6/GameJembatanAwan';

export default function GameJembatanAwanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'jembatan-awan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameJembatanAwan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
