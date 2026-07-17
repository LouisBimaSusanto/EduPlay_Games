'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideoLvl3 } from '@/components/games/modul1/level3/IntroVideoLvl3';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideoLvl3 onComplete={handleComplete} />
    </GameShell>
  );
}