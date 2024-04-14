import { Suspense } from "react";
import { Navbar } from "./_components/Navbar";
import { Sidebar, SidebarSkeleton } from "./_components/Sidebar";
import { AutoCollapse } from "./_components/autoCollapseContainer";

const BrowseLayout = ({children} :{children :React.ReactNode}) =>{
    return (
        <>
        <Navbar />
        <div className="flex h-full pt-20">
           <Suspense fallback={<SidebarSkeleton/>}>
             <Sidebar />
           </Suspense>
           <AutoCollapse>
              {children}
            </AutoCollapse>
        </div>
        </>
    );
}
export default BrowseLayout;