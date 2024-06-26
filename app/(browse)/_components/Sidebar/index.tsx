import { Wrapper } from "./Wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";

import { getRecommended } from "@/lib/recommended-service";
import { Recommended, RecommendedSkeleton } from "./Recommended";
import { Following, FollowingSkeleton } from "./Follow";
import { getFollowedUsers } from "@/lib/follow-service";

    export const Sidebar  = async () =>{
        const recommended = await getRecommended();
        const following = await getFollowedUsers();
        return (
            <>
            <Wrapper>
              <Toggle/> 
              <div className="space-y-4 pt-4 lg:pt-0">
                <Recommended  data={recommended}/>
                <Following data={following}/>
                </div> 
            </Wrapper>
            </>
        );
    }

    export const SidebarSkeleton = () =>{
        return (
            <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
                 <ToggleSkeleton/>
                 <FollowingSkeleton/>
                 <RecommendedSkeleton />
            </aside>
        );
    }