'use client';
export function GameShell({ children }) {
  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-600 to-emerald-400">
      {children}
    </div>
  );
}