\"use client\";

import { motion } from \"framer-motion\";
import { useTTS } from \"@/hooks/useAudio\";
import { useEffect } from \"react\";

export function IntroVideoLvl3({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Selamat datang di Lautan Fonem! Di sini kita akan belajar huruf dan bunyi pertama.");
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
        className="relative w-full h-full overflow-hidden bg-black"
      >
        <iframe 
          className="w-full h-full"
          src="https://www.youtube.com/embed/Pj1L5pT-DDI?autoplay=1&controls=0&modestbranding=1" 
          title="Intro Video Lautan Fonem"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
        
        {/* Magical Ocean Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-cyan-500/30 mix-blend-overlay" />
        
        {/* Animated bubbles */}
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute bottom-0 w-8 h-8 rounded-full border-2 border-white/50 animate-[float_3s_ease-in_infinite]"
            style={{ 
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.7}s`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
