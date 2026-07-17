'use client';
import { useTTS } from "@/hooks/useAudio";

export function IntroVideo({ onComplete }) {
  const { speak } = useTTS();

  const handleStart = () => {
    speak("Ayo kita mulai Modul Dua!");
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-[3rem] border-12 border-[#FFD700] border-b-24 border-b-[#B8860B] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_10px_30px_rgba(0,0,0,0.8)] overflow-hidden relative mb-12 shrink-0 animate-[float_4s_infinite] flex items-center justify-center">
        <h1 className="text-white text-5xl font-black">Video Pembuka Modul 2</h1>
      </div>
      <div className="relative z-20 flex justify-center w-full max-w-md">
        <button 
          onClick={handleStart}
          className="
            w-full bg-linear-to-tr from-[#00E5C8] to-[#00FFD1] 
            text-[#004D40] font-black text-5xl md:text-7xl 
            py-8 px-12 
            rounded-[3rem] 
            border-8 border-[#FFF]
            border-b-24 border-b-[#008A79] 
            shadow-[0_20px_40px_rgba(0,229,200,0.6),inset_0_5px_15px_rgba(255,255,255,0.8)]
            active:border-b-8 active:translate-y-4 
            active:shadow-[0_10px_20px_rgba(0,229,200,0.6),inset_0_5px_15px_rgba(255,255,255,0.8)]
            transition-all duration-100 ease-out
            animate-bounce
          "
        >
          MULAI MAIN 🚀
        </button>
      </div>
    </div>
  );
}