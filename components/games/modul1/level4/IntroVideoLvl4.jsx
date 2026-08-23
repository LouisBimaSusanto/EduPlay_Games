\"use client\";

import { motion } from \"framer-motion\";
import { useTTS } from \"@/hooks/useAudio\";
import { useEffect } from \"react\";

export function IntroVideoLvl4({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Selamat datang di Pabrik Fonem Ajaib! Ayo kita nyalakan mesinnya.");
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
    <div className="w-full h-full flex items-center justify-center z-10 overflow-hidden">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="relative w-full h-full overflow-hidden bg-black"
      >
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/gJ4VXXP2Tqw?autoplay=1&controls=0&modestbranding=1" 
          title="Intro Video Pabrik Fonem"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        {/* Machinery Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-orange-600/40 mix-blend-overlay" />
        
        {/* Rotating Gears in corners */}
        <div className="absolute -top-10 -left-10 w-32 h-32 border-8 border-dashed border-yellow-500 rounded-full animate-[spin_10s_linear_infinite] opacity-50" />
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-[12px] border-dashed border-red-500 rounded-full animate-[spin_15s_linear_infinite_reverse] opacity-50" />
      </motion.div>
    </div>
  );
}
