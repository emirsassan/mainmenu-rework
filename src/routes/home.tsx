import PlayerCard from '@/components/PlayerCard';
import { Button } from '@/components/ui/button';
import { lunarNavigate } from '@/lib/utils';
import { createFileRoute } from '@tanstack/react-router';
import { DoorOpen, Globe2Icon, LucideGamepad2, LucideSettings } from 'lucide-react';

export const Route = createFileRoute('/home')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className='absolute top-4 right-4'>
        <Button size="icon"><DoorOpen /></Button>
      </div>

      <div className='absolute top-4 left-4'>
        <PlayerCard username='EmirSasaki' />
      </div>

      <div className='flex items-center justify-center h-screen'>
        <div className='w-80 gap-8'>
          <Button onClick={() => lunarNavigate('SINGLEPLAYER')} className='w-full mb-1 backdrop-blur-md'><LucideGamepad2 /> Singleplayer</Button>
          <Button onClick={() => lunarNavigate('MULTIPLAYER')} className='w-full mb-1 backdrop-blur-md'><Globe2Icon /> Multiplayer</Button>

          <div className='w-full flex flex-row'>
            <Button onClick={() => lunarNavigate('SETTINGS')} variant="secondary" className='flex-1 backdrop-blur-md'><LucideSettings /> Settings</Button>
            <Button onClick={() => lunarNavigate('REALMS')} variant="secondary" className='flex-1 ml-1 backdrop-blur-md'>Realms</Button>
          </div>
        </div>
      </div>
    </>
  );
}
