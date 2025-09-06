'use client'
import { NextPage } from "next";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderTabs: NextPage = () => {
    const pathname = usePathname();

    const activeTab = (href: string) => pathname === href ? 'font-semibold' : 'font-normal';

    return(
    <div className="hidden md:flex gap-6 ">
        <p>
            <Link href={'/'} className={`${activeTab('/')}`}>Home</Link>
        </p>
        <p>
            <Link href={'/products'} className={`${activeTab('/products')}`}>Products</Link>
        </p>
        <p>
            <Link href={'/categories'} className={`${activeTab('/categories')}`}>Categories</Link>
        </p>
    </div>
    )
}

export default HeaderTabs;