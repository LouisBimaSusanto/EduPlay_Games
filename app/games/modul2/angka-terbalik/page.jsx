'use client';
import { GameShell } from '@/components/GameShell';
import { GameAngkaTerbalik } from '@/components/games/modul2/GameAngkaTerbalik';

export default function GameAngkaTerbalikPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'angka-terbalik', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameAngkaTerbalik onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
