"use client";

import { motion } from "framer-motion";
import { useTTS } from "@/hooks/useAudio";
import { useEffect, useRef } from "react";

const PARENT_ORIGIN = "https://your-parent-domain.com"; // ganti sesuai origin parent yang sah

export function IntroVideoLvl2({ onComplete }) {
  const { speak } = useTTS();
  const completedRef = useRef(false);

  const handleComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  // TTS sambutan — hanya sekali saat mount
  useEffect(() => {
    const timer = setTimeout(() => {
      speak("Selamat datang di Istana Rima! Di sini kita akan belajar tentang bunyi kata yang sama.");
    }, 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // sengaja kosong agar tidak re-run kalau `speak` bukan stable reference

  // Dengarkan sinyal START_GAME dari parent (page.js)
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== PARENT_ORIGIN) return; // validasi origin
      if (event.data?.type === "START_GAME") {
        handleComplete();
      }
    };
    window.addEventListener("message", handleMessage);

    // Fallback: kalau sinyal tidak pernah datang, lanjut otomatis setelah 20 detik
    const fallbackTimer = setTimeout(() => {
      handleComplete();
    }, 20000);

    return () => {
      window.removeEventListener("message", handleMessage);
      clearTimeout(fallbackTimer);
    };
  }, []);

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
          src="https://youtu.be/0ujQdybzN7o?si=0iOAslpLpr9yWGVQ"
          title="Intro Video Istana Rima"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Magical Purple Overlay effects */}
        <div className="absolute inset-0 pointer-events-none border-8 border-purple-500/30 mix-blend-overlay" />
      </motion.div>
    </div>
  );
}