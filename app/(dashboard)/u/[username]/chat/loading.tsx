import { Skeleton } from "@/components/ui/skeleton";
import { ToggleCardSkeleton } from "./_components/toggle-card";

const Loading = () =>{
    return (
     <div className="p-6 space-y-6">
        <Skeleton className="h-10 w-[200px]"/>
        <div className="space-y-4">
           <ToggleCardSkeleton />
           <ToggleCardSkeleton />
           <ToggleCardSkeleton />
        </div>
     </div>
    );
}

export default Loading;