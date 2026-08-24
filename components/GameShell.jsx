'use client';
export function GameShell({ children, mode = 'standalone' }) {
  const modeClass =
    mode === 'standalone'
      ? 'fixed inset-0'
      : 'w-full h-full min-w-0 min-h-0';

  return (
    <div
      className={`${modeClass} overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-600 to-emerald-400`}
    >
      {children}
    </div>
  );
}