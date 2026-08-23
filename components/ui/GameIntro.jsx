'use client';

import React from 'react';

export function GameIntro({ 
  currentStep = 1, 
  totalSteps = 5, 
  onStart, 
  onToggleSound, 
  isMuted = false,
  children 
}) {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-[#2a2d7c] to-[#3b82f6] overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* Step Badge */}
      <div className="absolute top-6 left-6 bg-[#1a1c5b] text-white font-bold text-2xl px-6 py-2 rounded-full shadow-lg border border-white/20">
        {currentStep} / {totalSteps}
      </div>

      {/* Main Content Area (Video/Image) */}
      <div className="relative z-10 w-3/4 max-w-4xl aspect-video bg-black rounded-3xl border-[6px] border-[#FABB05] shadow-[0_0_30px_rgba(250,187,5,0.4)] overflow-hidden flex items-center justify-center">
        {children || (
          <div className="text-white text-xl">Video / Konten Game</div>
        )}
      </div>

      {/* Start Button */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <button 
          onClick={onStart}
          className="bg-[#2ecc71] hover:bg-[#27ae60] text-[#0a4d2e] font-black text-4xl tracking-wider py-4 px-12 rounded-3xl border-4 border-white shadow-[0_8px_0_#1e8449,0_15px_20px_rgba(0,0,0,0.4)] active:shadow-[0_0px_0_#1e8449] active:translate-y-2 transition-all flex flex-col items-center"
        >
          <span>MULAI</span>
          <span>MAIN 🚀</span>
        </button>
      </div>

      {/* Decorative Parrot Mascot (Using Emoji as placeholder for 3D asset) */}
      <div className="absolute bottom-4 left-8 z-20 text-[180px] leading-none drop-shadow-2xl hover:scale-110 transition-transform cursor-pointer origin-bottom">
        🦜
      </div>

      {/* Sound Toggle Button */}
      <div className="absolute bottom-8 right-8 z-20">
        <button 
          onClick={onToggleSound}
          className="w-16 h-16 bg-[#1a1c5b] hover:bg-[#2a2d7c] rounded-full border-4 border-white/20 flex items-center justify-center text-white text-3xl shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          {isMuted ? '🔇' : '🔊'}
        </button>
      </div>

      {/* Bottom Hills Background */}
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
          <path fill="#27ae60" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-[80%]" preserveAspectRatio="none">
          <path fill="#2ecc71" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,240C840,256,960,256,1080,234.7C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
