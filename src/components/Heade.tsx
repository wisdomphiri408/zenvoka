import { NextPage } from "next";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";
import InputField from "./Inputfield";
import SearchBar from "./searchBar";

const Header: NextPage = () => {
    return(
        <div className="flex justify-between md:justify-center md:gap-[var(--gap-fluid)] fixed left-0 top-0 right-0 items-center">
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
            <div className="">
                <SearchBar />
            </div>
            <div>
                <ModeToggle />
                <Link href={'/cart'}>
                    <ShoppingCart />
                </Link>
                <Link href={'/profile'}>
                    <User />
                </Link>
            </div>
        </div>
    )
}

export default Header;