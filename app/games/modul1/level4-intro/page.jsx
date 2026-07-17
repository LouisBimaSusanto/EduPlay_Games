'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideoLvl4 } from '@/components/games/modul1/level4/IntroVideoLvl4';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideoLvl4 onComplete={handleComplete} />
    </GameShell>
  );
}