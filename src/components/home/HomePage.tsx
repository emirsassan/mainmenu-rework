import { useState } from 'react';
import type { MinecraftScreen, OnlineStatus, SocialMedia } from '@/entities.ts';
import { UserProfileCard } from '@/components/home/UserProfileCard.tsx';
import { AppTitle } from '@/components/home/AppTitle.tsx';
import { MenuButton } from '@/components/home/MenuButton.tsx';
import { SocialButtons } from '@/components/home/SocialButtons.tsx';
import { BottomButton } from '@/components/home/BottomButton.tsx';
import { VersionInfo } from '@/components/home/VersionInfo.tsx';
import { BackgroundBlobs } from '@/components/home/BackgroundBlobs.tsx';
import { CrownIcon, EarthIcon, GamepadIcon, LanguagesIcon, SettingsIcon } from 'lucide-react';

export const HomePage = () => {
  const [username] = useState('Player');
  const [onlineStatus] = useState<OnlineStatus>('ONLINE');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);


  const navigateMinecraftScreen = (screen: MinecraftScreen) => {
    window.lunar.setScreen(screen);
  };

  const openSocialMedia = (platform: SocialMedia) => {
    switch (platform) {
      case 'TWITTER':
        window.lunar.openUri('https://lunarclient.top', 'INITIATOR_SOCIAL_LINK');
        break;
      case 'DISCORD':
        window.lunar.openUri('https://discord.lunarclient.top', 'INITIATOR_SOCIAL_LINK');
        break;
    }
  };


  const menuButtons = [
    { id: 'singleplayer', label: 'Singleplayer', screen: 'SINGLEPLAYER' as MinecraftScreen, icon: <GamepadIcon/> },
    { id: 'multiplayer', label: 'Multiplayer', screen: 'MULTIPLAYER' as MinecraftScreen, icon: <EarthIcon/> },
    { id: 'realms', label: 'Realms', screen: 'REALMS' as MinecraftScreen, icon: <CrownIcon/> },
  ];

  const bottomButtons = [
    { id: 'settings', label: 'Settings', screen: 'SETTINGS' as MinecraftScreen, icon: <SettingsIcon/> },
    { id: 'language', label: 'Language', screen: 'LANGUAGE' as MinecraftScreen, icon: <LanguagesIcon/> },
  ];

  return (
    <div className="h-screen flex flex-col justify-between p-8 transition-opacity duration-300"
         style={{ background: 'radial-gradient(...)' }}>
      <div className="flex justify-between items-start">
        <UserProfileCard username={username} onlineStatus={onlineStatus}/>
        <AppTitle/>
        <SocialButtons openSocialMedia={openSocialMedia}/>
      </div>

      <div className="flex flex-col items-center gap-4">
        {menuButtons.map(btn => (
          <MenuButton
            key={btn.id}
            {...btn}
            isHovered={hoveredButton === btn.id}
            onClick={() => navigateMinecraftScreen(btn.screen)}
            onHover={() => setHoveredButton(btn.id)}
            onLeave={() => setHoveredButton(null)}
          />
        ))}
      </div>

      <div className="flex justify-between items-end">
        <div className="flex gap-3">
          {bottomButtons.map(btn => (
            <BottomButton
              key={btn.id}
              {...btn}
              onClick={() => navigateMinecraftScreen(btn.screen)}
            />
          ))}
        </div>
        <VersionInfo/>
      </div>

      <BackgroundBlobs/>
    </div>
  );
};