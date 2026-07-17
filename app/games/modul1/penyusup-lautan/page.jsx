'use client';
import { GameShell } from '@/components/GameShell';
import { GamePenyusupLautan } from '@/components/games/modul1/level3/GamePenyusupLautan';

export default function GamePenyusupLautanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'penyusup-lautan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePenyusupLautan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
