import { getUserByUsername } from "@/lib/user-service";
import { redirect } from "next/navigation";
import { Navbar } from "./_components/Navbar";
import { Sidebar } from "./_components/Sidebar";
import { AutoCollapse } from "./_components/autoCollapseContainer";

interface CreatoraPageLayoutProps {
    params :{
        username : string
    };
    children: React.ReactNode;
}

const CreatoraPageLayout = async ({params,children} :CreatoraPageLayoutProps) =>{
    const self = await getUserByUsername(params.username);
    if(!self){
        redirect("/");
    }
    return (
        <>
        <Navbar />
        <div className="flex h-full  pt-20">
        <Sidebar/>
        <AutoCollapse>
         {children}
         </AutoCollapse>
        </div>
        </>
    );
}
export default CreatoraPageLayout;