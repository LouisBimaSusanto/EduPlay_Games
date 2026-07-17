'use client';
import { GameShell } from '@/components/GameShell';
import { GameSulapKiko } from '@/components/games/modul1/level2/GameSulapKiko';

export default function GameSulapKikoPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'sulap-kiko', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameSulapKiko onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
