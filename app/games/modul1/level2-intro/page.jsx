'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideoLvl2 } from '@/components/games/modul1/level2/IntroVideoLvl2';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideoLvl2 onComplete={handleComplete} />
    </GameShell>
  );
}