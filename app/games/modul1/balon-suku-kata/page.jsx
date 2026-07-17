'use client';
import { GameShell } from '@/components/GameShell';
import { GameBalonSukuKata } from '@/components/games/modul1/level5/GameBalonSukuKata';

export default function GameBalonSukuKataPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'balon-suku-kata', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameBalonSukuKata onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
