"use client";

import { useEffect, useState, useRef } from "react";

/**
 * A wrapper component that enforces a fixed virtual resolution (e.g. 1280x720) 
 * and automatically scales it (zoom in/out) to fit perfectly within the parent container
 * while maintaining the aspect ratio. This eliminates all responsive layout bugs.
 */
export function GameWrapper({ children, width = 1280, height = 720 }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const parent = containerRef.current.parentElement;
      if (!parent) return;

      const availableWidth = parent.clientWidth;
      const availableHeight = parent.clientHeight;

      // Calculate scale to fit within parent while maintaining aspect ratio
      const scaleX = availableWidth / width;
      const scaleY = availableHeight / height;
      const newScale = Math.min(scaleX, scaleY);
      
      setScale(newScale);
    };

    // Initial scale calculation
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width, height]);

  return (
    <div 
      className="w-full h-full flex items-center justify-center overflow-hidden" 
      ref={containerRef}
    >
      <div 
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="relative shrink-0 overflow-hidden bg-transparent"
      >
        {children}
      </div>
    </div>
  );
}
