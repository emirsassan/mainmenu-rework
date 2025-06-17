import type { ReactNode } from 'react';

type MenuButtonProps = {
  id: string;
  label: string;
  icon: ReactNode;
  isHovered: boolean;
  onClick: () => void;
  onHover: () => void;
  onLeave: () => void;
}

export const MenuButton = ({ id, label, icon, isHovered, onClick, onHover, onLeave }: MenuButtonProps) => (
  <button
    key={id}
    onClick={onClick}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
    className="group relative w-80 backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
  >
    <div className="flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-4">
        <span className="text-white text-3xl group-hover:scale-110 transition-transform">{icon}</span>
        <span className="text-white text-xl font-medium tracking-wide">{label}</span>
      </div>
      <div
        className={`transition-all duration-300 ${isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-50'}`}>
        <span className="text-white text-2xl">→</span>
      </div>
    </div>
    {isHovered && (
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"/>
    )}
  </button>
);
