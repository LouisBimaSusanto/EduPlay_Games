'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideo } from '@/components/games/modul2/IntroVideo';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideo onComplete={handleComplete} />
    </GameShell>
  );
}