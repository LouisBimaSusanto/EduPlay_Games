'use client';
import { useTTS } from "@/hooks/useAudio";
import { GameWrapper } from "@/components/ui/GameWrapper";

export function IntroVideo({ onComplete }) {
  const { speak } = useTTS();

  const handleStart = () => {
    speak("Ayo kita mulai Modul Dua!");
    onComplete();
  };

  return (
    <GameWrapper>
      <div className="flex flex-col items-center justify-center w-full h-full p-8 gap-8 overflow-hidden">
        <div className="flex-1 min-h-0 w-full flex justify-center items-center relative">
          <div className="relative aspect-video h-full max-w-full bg-gray-900 rounded-[3rem] border-12 border-[#FFD700] border-b-[24px] border-b-[#B8860B] shadow-[0_20px_40px_rgba(0,0,0,0.8),inset_0_5px_15px_rgba(0,0,0,0.8)] overflow-hidden shrink flex items-center justify-center animate-[float_4s_infinite]">
            <h1 className="text-white text-6xl font-black drop-shadow-xl">Video Pembuka Modul 2</h1>
          </div>
        </div>
        <div className="relative z-20 flex justify-center w-full shrink-0 pb-8">
          <button 
            onClick={handleStart}
            className="
              bg-linear-to-tr from-[#00E5C8] to-[#00FFD1] 
              text-[#004D40] font-black text-4xl
              py-6 px-16
              rounded-[2.5rem] 
              border-[6px] border-[#FFF]
              border-b-[16px] border-b-[#008A79] 
              shadow-[0_20px_40px_rgba(0,229,200,0.6),inset_0_10px_20px_rgba(255,255,255,0.8)]
              active:border-b-[6px] active:translate-y-2
              active:shadow-[0_10px_20px_rgba(0,229,200,0.6),inset_0_10px_20px_rgba(255,255,255,0.8)]
              transition-all duration-100 ease-out
              animate-bounce
            "
          >
            MULAI MAIN 🚀
          </button>
        </div>
      </div>
    </GameWrapper>
  );
}