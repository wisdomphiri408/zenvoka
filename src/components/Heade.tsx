import { NextPage } from "next";
import Link from "next/link";
import { Search,ShoppingCart, User } from "lucide-react";
import { ModeToggle } from "./theme-toggle";

const Header: NextPage = () => {
    return(
        <div>
            <div>Zenvoka</div>
            <div>
                <Link href={'/'}>Home</Link>
                <Link href={'/products'}>Products</Link>
                <Link href={'/categories'}>Categories</Link>
            </div>
            <div>
                <Search />
                <input type="search" placeholder="search products..."/>
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