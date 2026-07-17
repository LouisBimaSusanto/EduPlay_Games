'use client';
import { GameShell } from '@/components/GameShell';
import { GamePenyihirKata } from '@/components/games/modul1/level6/GamePenyihirKata';

export default function GamePenyihirKataPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'penyihir-kata', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePenyihirKata onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
