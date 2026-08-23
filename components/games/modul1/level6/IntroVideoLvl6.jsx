\"use client\";

import { motion } from \"framer-motion\";
import { useTTS } from \"@/hooks/useAudio\";
import { useEffect } from \"react\";

export function IntroVideoLvl6({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Luar Biasa! Kamu sudah sampai di Istana Puncak Bintang Nusantara!");
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
          title="Intro Video Istana Bintang"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        {/* Golden Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-[16px] border-yellow-300/30 mix-blend-overlay shadow-[inset_0_0_50px_rgba(255,215,0,0.8)]" />
      </motion.div>
    </div>
  );
}
