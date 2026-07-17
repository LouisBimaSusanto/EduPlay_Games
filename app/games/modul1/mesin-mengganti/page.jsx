'use client';
import { GameShell } from '@/components/GameShell';
import { GameMesinMengganti } from '@/components/games/modul1/level4/GameMesinMengganti';

export default function GameMesinMenggantiPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'mesin-mengganti', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameMesinMengganti onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
