import type { OnlineStatus } from '@/entities.ts';

type UserProfileCardProps = {
  username: string;
  onlineStatus: OnlineStatus;
}

export const UserProfileCard = ({ username, onlineStatus }: UserProfileCardProps) => {
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

  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-4 border border-white/20 shadow-2xl">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
            {username.charAt(0).toUpperCase()}
          </div>
          <div
            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full ${getStatusColor(
              onlineStatus,
            )} border-2 border-gray-900`}
          />
        </div>
        <div>
          <p className="text-white font-medium">{username}</p>
          <p className="text-white/60 text-sm capitalize">{onlineStatus.toLowerCase()}</p>
        </div>
      </div>
    </div>
  );
};
