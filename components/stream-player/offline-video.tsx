import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
    username : string;
};

export const OfflineVideo = ({username} : OfflineVideoProps) => {
    return (
        <div className="h-full w-full flex flex-col items-center justify-center space-y-4">
            <WifiOff className="h-10 w-10 text-muted-foreground" />
            <p className="text-muted-foreground">
                {username} is Offline
            </p>
        </div>
    );
}