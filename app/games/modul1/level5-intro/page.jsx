'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideoLvl5 } from '@/components/games/modul1/level5/IntroVideoLvl5';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideoLvl5 onComplete={handleComplete} />
    </GameShell>
  );
}