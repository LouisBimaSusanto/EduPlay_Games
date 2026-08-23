\"use client\";

import { motion } from \"framer-motion\";
import { useTTS } from \"@/hooks/useAudio\";
import { useEffect } from \"react\";

export function IntroVideoLvl2({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Selamat datang di Istana Rima! Di sini kita akan belajar tentang bunyi kata yang sama.");
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
          src="https://www.youtube.com/embed/5mYI8JIfHmc?autoplay=1&controls=0&modestbranding=1" 
          title="Intro Video Istana Rima"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        {/* Magical Purple Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-12 border-purple-500/30 mix-blend-overlay" />
      </motion.div>
    </div>
  );
}
