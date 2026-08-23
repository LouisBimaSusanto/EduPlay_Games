'use client';
import { useTTS } from "@/hooks/useAudio";
import { useEffect } from "react";

export function IntroVideo({ onComplete }) {
  const { speak } = useTTS();

  useEffect(() => {
    speak("Ayo kita mulai Modul Dua!");
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
    <>
      <div className="w-full h-full flex items-center justify-center overflow-hidden bg-gray-900">
        <h1 className="text-white text-6xl font-black drop-shadow-xl">Video Pembuka Modul 2</h1>
      </div>
    </>
  );
}