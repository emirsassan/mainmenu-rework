import { useState } from 'react';
import type { MinecraftScreen, OnlineStatus, SocialMedia } from '@/entities.ts';

export const HomePage = () => {
  const [username] = useState('Player');
  const [onlineStatus] = useState<OnlineStatus>('ONLINE');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);


  const navigateMinecraftScreen = (screen: MinecraftScreen) => {
    window.lunar.setScreen(screen);
  };

  const openSocialMedia = (platform: SocialMedia) => {
    // Implement social media opening logic
    console.log(`Opening ${platform}`);
  };

  const getStatusColor = (status: OnlineStatus) => {
    switch (status) {
      case 'ONLINE':
        return 'bg-green-500';
      case 'AWAY':
        return 'bg-yellow-500';
      case 'BUSY':
        return 'bg-red-500';
      case 'INVISIBLE':
        return 'bg-gray-500';
      case 'OFFLINE':
        return 'bg-gray-700';
      default:
        return 'bg-gray-500';
    }
  };

  const menuButtons = [
    { id: 'singleplayer', label: 'Singleplayer', screen: 'SINGLEPLAYER' as MinecraftScreen, icon: '🎮' },
    { id: 'multiplayer', label: 'Multiplayer', screen: 'MULTIPLAYER' as MinecraftScreen, icon: '🌐' },
    { id: 'realms', label: 'Realms', screen: 'REALMS' as MinecraftScreen, icon: '👑' },
  ];

  const bottomButtons = [
    { id: 'settings', label: 'Settings', screen: 'SETTINGS' as MinecraftScreen, icon: '⚙️' },
    { id: 'language', label: 'Language', screen: 'LANGUAGE' as MinecraftScreen, icon: '🌍' },
  ];

  return (
    <div
      className={
        'h-screen flex flex-col justify-between p-8 transition-opacity duration-300'
      }
      style={{
        background: 'radial-gradient(ellipse at center, rgba(20, 20, 30, 0.3) 0%, rgba(10, 10, 20, 0.5) 100%)',
      }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start">
        {/* User Profile */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                {username.charAt(0).toUpperCase()}
              </div>
              <div
                className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(onlineStatus)} border-2 border-gray-900`}/>
            </div>
            <div>
              <p className="text-white font-medium">{username}</p>
              <p className="text-white/60 text-sm capitalize">{onlineStatus.toLowerCase()}</p>
            </div>
          </div>
        </div>

        {/* Logo/Title */}
        <div className="text-center">
          <h1
            className="text-white text-5xl font-bold tracking-wider select-none animate-pulse bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text">
            CELESTIAL
          </h1>
          <p className="text-white/60 text-sm mt-2">LunarCN Edition</p>
        </div>

        {/* Social Links */}
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
          <div className="flex gap-3">
            <button
              onClick={() => openSocialMedia('DISCORD')}
              className="w-10 h-10 rounded-lg bg-[#5865F2]/20 hover:bg-[#5865F2]/30 flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-xl">💬</span>
            </button>
            <button
              onClick={() => openSocialMedia('TWITTER')}
              className="w-10 h-10 rounded-lg bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 flex items-center justify-center transition-all hover:scale-110"
            >
              <span className="text-xl">🐦</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex flex-col items-center gap-4">
        {menuButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => navigateMinecraftScreen(button.screen)}
            onMouseEnter={() => setHoveredButton(button.id)}
            onMouseLeave={() => setHoveredButton(null)}
            className="group relative w-80 backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-2xl p-6 border border-white/20 hover:border-white/40 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform">{button.icon}</span>
                <span className="text-white text-xl font-medium tracking-wide">{button.label}</span>
              </div>
              <div
                className={`transition-all duration-300 ${hoveredButton === button.id ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-50'}`}>
                <span className="text-white text-2xl">→</span>
              </div>
            </div>
            {hoveredButton === button.id && (
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10"/>
            )}
          </button>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-end">
        {/* Bottom Menu Buttons */}
        <div className="flex gap-3">
          {bottomButtons.map((button) => (
            <button
              key={button.id}
              onClick={() => navigateMinecraftScreen(button.screen)}
              className="backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-xl px-6 py-3 border border-white/20 hover:border-white/40 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span className="text-lg">{button.icon}</span>
              <span className="text-white font-medium">{button.label}</span>
            </button>
          ))}
        </div>

        {/* Version Info */}
        <div className="text-right">
          <p className="text-white/80 text-sm">
            Powered by{' '}
            <span className="underline text-cyan-400 hover:text-cyan-300 cursor-pointer transition-colors">
                  lunarclient.top
                </span>
          </p>
          <p className="text-white/40 text-xs mt-1">Version 1.0.0</p>
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"/>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500"/>
      </div>
    </div>
  );
};