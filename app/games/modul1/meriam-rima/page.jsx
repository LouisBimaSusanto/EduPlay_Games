'use client';
import { GameShell } from '@/components/GameShell';
import { GameMeriamRima } from '@/components/games/modul1/level5/GameMeriamRima';

export default function GameMeriamRimaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'meriam-rima', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameMeriamRima onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
