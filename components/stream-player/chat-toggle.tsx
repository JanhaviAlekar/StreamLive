"use client"

import { ArrowLeftFromLine ,ArrowRightFromLine } from "lucide-react"

import { Hint } from "@/components/hints"
import { Button } from "@/components/ui/button"
import { useChatSidebarStore } from "@/store/use-chat-sidebar"

export const ChatToggle = () =>{
    const {
        isCollapse,
        onCollapse,
        onExpand    
    } = useChatSidebarStore((state)=>state);

    const Icon = isCollapse ? ArrowLeftFromLine : ArrowRightFromLine;

    const onToggle = () => {
       if(isCollapse){
        onExpand();
       }
       else{
        onCollapse();
       }
    }

    const label = isCollapse ? "Expand" : "Collapse";


    return (
        <Hint label={label} side="left" asChild>
            <Button 
            onClick={onToggle}
            variant="ghost"
            className="h-auto p-2 hover:bg-white/10 hover:text-primary bg-transparent"
            >
             <Icon className="h-4 w-4"/>
            </Button>
        </Hint>
    );
}
