'use client';
import { GameShell } from '@/components/GameShell';
import { GameGerbangCahaya } from '@/components/games/modul1/level6/GameGerbangCahaya';

export default function GameGerbangCahayaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'gerbang-cahaya', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameGerbangCahaya onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
