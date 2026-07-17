'use client';
import { GameShell } from '@/components/GameShell';
import { GameJaringIkan } from '@/components/games/modul1/level3/GameJaringIkan';

export default function GameJaringIkanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'jaring-ikan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameJaringIkan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
