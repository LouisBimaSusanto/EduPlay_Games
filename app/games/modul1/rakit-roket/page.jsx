'use client';
import { GameShell } from '@/components/GameShell';
import { GameRakitRoket } from '@/components/games/modul1/level5/GameRakitRoket';

export default function GameRakitRoketPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'rakit-roket', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameRakitRoket onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
