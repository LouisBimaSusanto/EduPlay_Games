'use client';
import { GameShell } from '@/components/GameShell';
import { GamePetaBajakLaut } from '@/components/games/modul2/GamePetaBajakLaut';

export default function GamePetaBajakLautPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'peta-bajak-laut', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GamePetaBajakLaut onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
