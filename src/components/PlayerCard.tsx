import { Settings } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { useState } from 'react';

interface PlayerCardProps {
    username: string;
}

type OnlineStatus = 'online' | 'away' | 'busy' | 'invisible';

export default function PlayerCard(props: PlayerCardProps) {
    const [selectedStatus, setSelectedStatus] = useState<OnlineStatus>('online');
    
    const statusOptions: { value: OnlineStatus; label: string; color: string; icon: string }[] = [
        { value: 'online', label: 'Online', color: 'bg-green-500', icon: '🟢' },
        { value: 'away', label: 'Away', color: 'bg-yellow-500', icon: '🟡' },
        { value: 'busy', label: 'Busy', color: 'bg-red-500', icon: '🔴' },
        { value: 'invisible', label: 'Invisible', color: 'bg-gray-500', icon: '⚫' }
    ];
    
    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <div className="bg-primary-foreground p-2 rounded-md flex">
                        <img src="https://skins.mcstats.com/face/3edbc867-56b7-4c1b-962e-e2c4592e3491" className="size-5 self-center" />

                        <p className="self-center ml-2">{props.username}</p>
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="space-y-2">
                        <h4 className="font-medium text-sm flex items-center">
                            <Settings className="size-4 mr-2" />
                            Status
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {statusOptions.map((status) => (
                                <Button
                                    key={status.value}
                                    variant={selectedStatus === status.value ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setSelectedStatus(status.value)}
                                    className="justify-start"
                                >
                                    <span className="mr-2">{status.icon}</span>
                                    {status.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </>
    );
}