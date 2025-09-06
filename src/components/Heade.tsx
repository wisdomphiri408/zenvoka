import { NextPage } from "next";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import InputField from "./Inputfield";
import SearchBar from "./searchBar";

const Header: NextPage = () => {
    return(
        <div className="flex justify-between md:justify-center md:gap-[var(--gap-fluid)] fixed left-0 top-0 right-0 items-center border-b-1 border-light-border dark:border-dark-border py-4">
            <div>
                <Link href={'/'} className="text-2xl font-bold ">Zenvoka</Link>
            </div>
            <div className="flex gap-6">
                <p>
                    <Link href={'/'}>Home</Link>
                </p>
                <p>
                    <Link href={'/products'}>Products</Link>
                </p>
                <p>
                    <Link href={'/categories'}>Categories</Link>
                </p>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className="flex gap-6 items-center">
                <ModeToggle />
                <div className="relative">
                <Link href={'/cart'}>
                    <ShoppingCart className="w-4 h-4"/>
                </Link>
                <div className="absolute -top-3 -right-4 bg-black dark:bg-gray-100 dark:text-black text-white text-xs rounded-full px-1.5 py-0.5">3</div>
                </div>
                <Link href={'/profile'}>
                    <User className="w-4 h-4"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;