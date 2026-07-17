'use client';
import { GameShell } from '@/components/GameShell';
import { IntroVideoLvl6 } from '@/components/games/modul1/level6/IntroVideoLvl6';

export default function IntroPage() {
  const handleComplete = () => {
    window.parent.postMessage({ type: 'GAME_COMPLETE', gameId: 'intro', score: 0 }, '*');
  };
  return (
    <GameShell>
      <IntroVideoLvl6 onComplete={handleComplete} />
    </GameShell>
  );
}