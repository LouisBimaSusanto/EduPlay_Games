'use client';
import { GameShell } from '@/components/GameShell';
import { GameMesinMerakit } from '@/components/games/modul1/level4/GameMesinMerakit';

export default function GameMesinMerakitPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'mesin-merakit', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameMesinMerakit onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
