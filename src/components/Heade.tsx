import { NextPage } from "next";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import SearchBar from "./searchBar";
import HeaderTabs from "./HeaderTabs";
import { Menu } from "lucide-react";

const Header: NextPage = () => {
    return(
        <div className="flex justify-between md:justify-center md:gap-[var(--gap-fluid)] fixed left-0 top-0 right-0 items-center border-b-1 border-border-light dark:border-border-dark py-4 backdrop-blur-2xl px-2 z-10">
            <div>
                <Link href={'/'} className="text-2xl font-bold ">Zenvoka</Link>
            </div>
            <HeaderTabs />
            <div>
                <SearchBar />
            </div>
            <div className="flex gap-6 items-center">
                <ModeToggle />
                <div className="relative">
                <Link href={'/cart'}>
                    <ShoppingCart className="w-4 h-4"/>
                </Link>
                <div className="absolute -top-3 -right-4 bg-black dark:bg-gray-100 dark:text-black text-white text-xs rounded-full px-1.5 py-0.5 animate-pulse">3</div>
                </div>
                <Link href={'/profile'}>
                    <User className="w-4 h-4"/>
                </Link>
                <p>
                    <Menu className="block md:hidden w-4 h-4" />
                </p>
            </div>
        </div>
    )
}

export default Header;