'use client';
import { GameShell } from '@/components/GameShell';
import { GameKokiAjaib } from '@/components/games/modul2/GameKokiAjaib';

export default function GameKokiAjaibPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'koki-ajaib', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKokiAjaib onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
