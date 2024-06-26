import { ToggleCard } from "./_components/toggle-card";
import { getSelf } from "@/lib/auth-service";
import { getStreamByUserId } from "@/lib/stream-service";

const ChatPage = async () =>{
    const self = await getSelf();
    const stream = await getStreamByUserId(self.id);

    if(!stream){
        throw new Error("Stream not found");
    }
    return (
        <div className="p-6">
            <div className="mb-4">
                <h1 className="font-bold text-2xl">
                    chat page
                </h1>
            </div>
            <div className="space-y-2">
                <ToggleCard
                   field = "isChatEnabled"
                   label=  "Enable chat"
                   value= {stream.isChatEnabled}
                />
                <ToggleCard
                   field = "isChatDelayed"
                   label=  "Delay chat"
                   value= {stream.isChatDelayed}
                />
                <ToggleCard
                   field = "isChatFollowersOnly"
                   label=  "Must be following to chat"
                   value= {stream.isChatFollowersOnly}
                />
            </div>
        </div>
    )
}
export default ChatPage;