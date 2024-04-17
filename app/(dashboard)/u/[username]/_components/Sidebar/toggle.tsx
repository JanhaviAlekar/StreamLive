"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { Hint } from "@/components/hints";
import { useCreatorSidebarStore } from "@/store/use-creator-sidebar";


export const Toggle = () =>{
    const {
        isCollapse,
        onExpand,
        onCollapse
    }= useCreatorSidebarStore((state) => state);

    const label = isCollapse ? "Expand" : "Collapse";

    return (
        <>
         {
            isCollapse && (
                <div className="  w-full hidden lg:flex items-center justify-center pt-4 mb-4">
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
        {
            !isCollapse && (
                <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
                    <p className="font-semibold text-primary">
                        Dashboard
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
        
        </>
    );
}
