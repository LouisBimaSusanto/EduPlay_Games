'use client';
import { GameBatuLoncatan } from '@/components/games/modul1/GameBatuLoncatan';
import { GameShell } from '@/components/GameShell';

export default function BatuLoncatanPage() {
    return (
        <GameShell>
        <GameBatuLoncatan onComplete={() => {
            // Kirim event ke Page Anak via postMessage
            window.parent.postMessage({
            type: 'GAME_COMPLETE',
            gameId: 'batu-loncatan',
            score: 100,
            }, '*');
        }} />
        </GameShell>
    );
}