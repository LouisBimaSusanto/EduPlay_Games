'use client';
import { GameShell } from '@/components/GameShell';
import { GameTangkapFonem } from '@/components/games/modul1/level5/GameTangkapFonem';

export default function GameTangkapFonemPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'tangkap-fonem', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameTangkapFonem onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
