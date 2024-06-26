"use client";

import { ChatVariant, useChatSidebarStore } from "@/store/use-chat-sidebar";
import { ConnectionState } from "livekit-client";
import { useChat, useConnectionState, useRemoteParticipant  } from "@livekit/components-react";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useMemo, useState } from "react";
import { ChatHeader } from "./chat-header";
import { ChatForm } from "./chat-form";
import { ChatList } from "./chat-list";


interface ChatProps {
    viewerName: string,
    hostName :string,
    hostIdentity :string,           
    isFollowing: boolean,
    isChatEnabled: boolean,
    isChatFollowersOnly: boolean,
    isChatDelayed : boolean
}

export const Chat = ({
    viewerName,
    hostName ,
    hostIdentity ,              
    isFollowing,
    isChatEnabled,
    isChatFollowersOnly,
    isChatDelayed,  
}: ChatProps) =>{
    const matches = useMediaQuery(`(max-width: 1024px)`);
    const {variant , onExpand} = useChatSidebarStore((state)=>state);
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(hostIdentity);

    const isOnline = participant && connectionState === ConnectionState.Connected;

    const isHidden = !isChatEnabled || !isOnline;

    const [value ,setValue] = useState("");
    const { chatMessages : messages ,send} =useChat();

    useEffect(() =>{
         if(matches){
            onExpand();
         }
    },[matches ,onExpand]);

    const reversedMessages = useMemo(()=>{
        return messages.sort((a,b)=> b.timestamp - a.timestamp);
    }, [messages]);

    const onSubmit = () => {
        if(!send) return;

        send(value);
        setValue("");
    };

    const onChange = (value : string) => {
        setValue(value);
    };

    return (
        <div className="flex flex-col bg-background border-l border-b pt-0 h-[calc(100vh-80px)]">
          <ChatHeader />
          {
            variant === ChatVariant.CHAT && (
                <>  
                <ChatList
                  messages={reversedMessages}
                  isHidden={isHidden}
                />
                <ChatForm
                 onSubmit={onSubmit}
                 value={value}
                 onChange={onChange}
                 isHidden={isHidden}
                 isFollowersOnly={isChatFollowersOnly}
                 isDelayed={isChatDelayed}
                 isFollowing={isFollowing}
                 />
                </>
            )
          }
          {
            variant === ChatVariant.COMMUNITY && (
                <>
                community
                </>
            )
          }
        </div>
    );
}