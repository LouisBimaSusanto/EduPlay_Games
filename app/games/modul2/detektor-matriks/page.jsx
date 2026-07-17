'use client';
import { GameShell } from '@/components/GameShell';
import { GameDetektorMatriks } from '@/components/games/modul2/GameDetektorMatriks';

export default function GameDetektorMatriksPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'detektor-matriks', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameDetektorMatriks onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
