"use client";

import { useSidebarStore } from "@/store/use-sidebar";
import React ,{useEffect} from "react";
import { cn } from "@/lib/utils";

import { useMediaQuery } from "usehooks-ts";


interface AutoCollapseContainerProps{
    children :React.ReactNode
}
export const AutoCollapse = ( {children} :AutoCollapseContainerProps) => {
    const matches = useMediaQuery("(max-width:1024px)")
    const {isCollapse ,onCollapse ,onExpand} = useSidebarStore((state) => state);

    useEffect(()=>{
        if(matches){
            onCollapse();
        }
        else{
            onExpand();
        }
    },[matches ,onCollapse, onExpand])

    return (
        <div className={cn("flex-1",isCollapse ? "ml-[70px]" : "ml-[70px] lg:ml-60")}>
         {children}
        </div>
    );
}