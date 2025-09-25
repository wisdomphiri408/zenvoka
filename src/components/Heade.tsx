import { NextPage } from "next";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import SearchBar from "./searchBar";
import HeaderTabs from "./HeaderTabs";
import { Menu } from "lucide-react";
import { getSession } from "@/lib/session";
import UserStatusIndicator from "./UserStatusIndicator";
import CartNotificatiion from "./CartNotification";


const Header: NextPage = async () => {
    const session = await getSession();

    return(
        <div className="flex justify-between md:justify-center md:gap-[var(--gap-fluid)] fixed left-0 top-0 right-0 items-center border-b-1 border-border-light dark:border-border-dark py-4 backdrop-blur-2xl px-2 z-10">
            <div>
                <Link href={'/'} className="shiny-text text-2xl font-bold ">Zenvoka</Link>
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
                <CartNotificatiion />
                </div>
                <UserStatusIndicator />
                <p>
                    <Menu className="block md:hidden w-4 h-4" />
                </p>
            </div>
        </div>
    )
}

export default Header;