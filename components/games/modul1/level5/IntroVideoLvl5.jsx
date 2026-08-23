\"use client\";

import { motion } from \"framer-motion\";
import { useTTS } from \"@/hooks/useAudio\";
import { useEffect } from \"react\";

export function IntroVideoLvl5({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Wah, kita sudah sampai di Puncak! Selamat datang di Mega Festival Bunyi!");
    }, 1000);
    return () => clearTimeout(timer);
  }, [speak]);

  // Dengarkan sinyal START_GAME dari parent (page.js)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'START_GAME') {
        onComplete();
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onComplete]);

  return (
    <div className="w-full h-full flex items-center justify-center z-10 overflow-hidden relative">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative w-full h-full overflow-hidden bg-black z-20"
      >
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/gJ4VXXP2Tqw?autoplay=1&controls=0&modestbranding=1" 
          title="Intro Video Mega Festival"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        {/* Neon Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-indigo-600/40 mix-blend-overlay shadow-[inset_0_0_50px_rgba(192,132,252,0.5)]" />
      </motion.div>

      {/* Decorative Fireworks */}
      <div className="absolute top-10 left-10 text-6xl animate-[bounce_2s_infinite] z-30 pointer-events-none">🎇</div>
      <div className="absolute top-20 right-20 text-5xl animate-[pulse_1.5s_infinite] z-30 pointer-events-none">🌟</div>
      <div className="absolute bottom-10 left-32 text-7xl animate-[bounce_3s_infinite_reverse] z-30 pointer-events-none">🎆</div>
    </div>
  );
}
