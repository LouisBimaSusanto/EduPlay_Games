'use client';
import { GameShell } from '@/components/GameShell';
import { GameOrkestraIngatan } from '@/components/games/modul2/GameOrkestraIngatan';

export default function GameOrkestraIngatanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'orkestra-ingatan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameOrkestraIngatan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
