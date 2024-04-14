import Image from "next/image"; 
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets:["latin"],
    weight :["200", "300", "400", "500", "600", "700" ,"800"]

});

export const Logo = () =>{
    return (
      <Link href='/'>
         <div className="flex items-center gap-x-4 hover:opacity-70  transition   ">
         <div className="bg-white rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
                <Image
                  src='/smile.svg'
                  alt="logo"
                  height="32"
                  width="32"
                  />
            </div>
            <div className={cn("hidden lg:block")}>
                <p className="text-xl font-semibold">GAMEHUB</p>
                <p className="text-sm text-muted-foreground">Let's play</p>                
            </div>
         </div>
      </Link>
    );
}