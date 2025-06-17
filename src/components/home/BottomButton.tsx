import type { ReactNode } from 'react';

type BottomButtonProps = {
  id: string;
  label: string;
  icon: ReactNode;
  onClick: () => void;
}

export const BottomButton = ({ id, label, icon, onClick }: BottomButtonProps) => (
  <button
    key={id}
    onClick={onClick}
    className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3 border border-white/20 hover:border-white/40 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
  >
    <span className="text-white text-lg">{icon}</span>
    <span className="text-white font-medium">{label}</span>
  </button>
);
