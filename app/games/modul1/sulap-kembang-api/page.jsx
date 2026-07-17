'use client';
import { GameShell } from '@/components/GameShell';
import { GameSulapKembangApi } from '@/components/games/modul1/level5/GameSulapKembangApi';

export default function GameSulapKembangApiPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'sulap-kembang-api', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameSulapKembangApi onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
