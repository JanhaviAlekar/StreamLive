"use client";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/use-sidebar";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/hints";
import { Skeleton } from "@/components/ui/skeleton";

export const Toggle = () =>{
    const {
        isCollapse,
        onExpand,
        onCollapse
    }= useSidebarStore((state) => state);

    const label = isCollapse ? "Expand" : "Collapse";

    return (
        <>
        {
            !isCollapse && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <p className="font-semibold text-primary">
                        for u
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button 
                            onClick={onCollapse}
                            className="h-auto p-2 ml-auto"
                            variant="ghost">
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </Hint>
                </div>
            )
        }
         {
            isCollapse && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button 
                            onClick={onExpand}
                            className="h-auto p-2 "
                            variant="ghost">
                            <ArrowRightFromLine className="h-4 w-4" />
                        </Button>
                    </Hint> 
                </div>
            )
        }
        </>
    );
}

export const ToggleSkeleton = () => {
       return(
    <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
      <Skeleton className="h-6 w-[100px]" />
      <Skeleton className="h-6 w-6" />
    </div>
       )
}