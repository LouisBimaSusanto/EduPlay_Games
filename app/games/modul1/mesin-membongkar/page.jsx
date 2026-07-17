'use client';
import { GameShell } from '@/components/GameShell';
import { GameMesinMembongkar } from '@/components/games/modul1/level4/GameMesinMembongkar';

export default function GameMesinMembongkarPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'mesin-membongkar', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameMesinMembongkar onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
