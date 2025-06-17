import { DiscordIcon } from '@/components/icons/DiscordIcon.tsx';
import { XIcon } from '@/components/icons/XIcon.tsx';

interface SocialButtonsProps {
  openSocialMedia: (platform: 'DISCORD' | 'TWITTER') => void;
}

export const SocialButtons = ({ openSocialMedia }: SocialButtonsProps) => (
  <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
    <div className="flex gap-3">
      <button
        onClick={() => openSocialMedia('DISCORD')}
        className="w-10 h-10 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/30 flex items-center justify-center transition-all hover:scale-110"
      >
        <DiscordIcon/>
      </button>
      <button
        onClick={() => openSocialMedia('TWITTER')}
        className="w-10 h-10 rounded-lg bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 flex items-center justify-center transition-all hover:scale-110"
      >
        <XIcon/>
      </button>
    </div>
  </div>
);
