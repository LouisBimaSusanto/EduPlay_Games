'use client';
import { GameShell } from '@/components/GameShell';
import { GameDokterAngka } from '@/components/games/modul2/GameDokterAngka';

export default function GameDokterAngkaPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'dokter-angka', score: 100 }, '*');
  };
  const handleClose = () => {
    window.parent.postMessage({ type: 'GAME_CLOSE' }, '*');
  };
  return (
    <GameShell>
      <GameDokterAngka onComplete={handleComplete} onClose={handleClose} />
    </GameShell>
  );
}
