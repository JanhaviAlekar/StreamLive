"use client"

import { useSidebarStore } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./Recommended";
import { FollowingSkeleton } from "./Follow";

interface wrapperProps{
    children : React.ReactNode
};
export const Wrapper = ({children} :wrapperProps) => {
    const [isClient , setIsClient ] = useState(false);
    const { isCollapse } = useSidebarStore((state) => state);

useEffect(()=>{
    setIsClient(true);
},[]);

if(!isClient) return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton/>
        <FollowingSkeleton />
        <RecommendedSkeleton/>
    </aside>
);

return(
        <aside className={cn(`fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50`, isCollapse && "w-[70px]")}>
            {children}
        </aside>
    );
}