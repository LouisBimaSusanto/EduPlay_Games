'use client';
import { GameShell } from '@/components/GameShell';
import { GameKodeRahasia } from '@/components/games/modul2/GameKodeRahasia';

export default function GameKodeRahasiaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'kode-rahasia', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameKodeRahasia onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
