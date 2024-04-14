import { Logo } from "./Logo";
import { Search } from "./Search";
import { Actions } from "./actions";

export const Navbar = () =>{
    return (
        <nav className="fixed top-0 h-20 w-full z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm">
          <Logo />
          <Search/>
          <Actions />
        </nav>
    );
}
