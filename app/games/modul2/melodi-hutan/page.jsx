'use client';
import { GameShell } from '@/components/GameShell';
import { GameMelodiHutan } from '@/components/games/modul2/GameMelodiHutan';

export default function GameMelodiHutanPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'melodi-hutan', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameMelodiHutan onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
