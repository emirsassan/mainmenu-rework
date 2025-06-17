import type { MinecraftScreen } from '@/entities';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function lunarNavigate(screen: MinecraftScreen) {
  window.lunar.setScreen(screen);
}