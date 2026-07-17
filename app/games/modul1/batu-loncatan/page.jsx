'use client';
import { GameShell } from '@/components/GameShell';
import { GameBatuLoncatan } from '@/components/games/modul1/level1/GameBatuLoncatan';

export default function GameBatuLoncatanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'batu-loncatan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameBatuLoncatan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
