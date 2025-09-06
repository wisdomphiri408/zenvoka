import { NextPage } from "next";
import Link from "next/link";
import { Search,ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

const Header: NextPage = () => {
    return(
        <div className="flex justify-between md:justify-center">
            <div className="border-1">
                Zenvoka
            </div>
            <div className="border-2 border-amber-500">
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>Products</Link>
                <Link href={'/categories'}>Categories</Link>
            </div>
            <div className="border-2 border-green-500">
                <Search />
                <input type="search" placeholder="search products..."/>
            </div>
            <div className="border-2 border-red-500">
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