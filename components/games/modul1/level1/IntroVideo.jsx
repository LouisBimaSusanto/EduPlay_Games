// "use client"

// import { useTTS } from "@/hooks/useAudio"
// import { useEffect } from "react"

// export function IntroVideo({ onComplete }) {
//   const { speak } = useTTS();

//   useEffect(() => {
//     speak("Ayo kita mulai!");
//   }, []);

//   useEffect(() => {
//     const handleMessage = (event) => {
//       if (event.data?.type === 'START_GAME') {
//         onComplete();
//       }
//     };
//     window.addEventListener('message', handleMessage);
//     return () => window.removeEventListener('message', handleMessage);
//   }, [onComplete]);

//   return (
//     <div style={{ width: '100%', height: '100%', position: 'relative', background: '#000' }}>
//       <iframe
//         style={{
//           position: 'absolute',
//           inset: 0,
//           width: '50%',
//           height: '50%',
//           border: 'none',
//           pointerEvents: 'none',
//           display: 'block',
//         }}
//         src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=dQw4w9WgXcQ"
//         title="Video Intro"
//         allow="autoplay; encrypted-media"
//         allowFullScreen
//       />
//     </div>
//   );
// }