import { NextPage } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import GoBackButton from "@/components/GoBackButton";


const NotFound: NextPage = () => {

    return(
        <div className="flex-center flex-col text-center pt-21">
            <h1 className="text-display-lg text-gray-300 font-bold">404</h1>
            <h2 className="text-h3">Page Not Found</h2>
            <p className="max-w-[340px] text-body text-gray-500 mb-4">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
            </p>
            <p>
                <Link href={'/'}>
                        <Button className="bg-black text-gray-300 dark:bg-white dark:text-black mr-4">
                            <Home className="h-4 w-4"/> Home
                        </Button>
                </Link>
                <GoBackButton />
            </p>
        </div>
    )
}

export default NotFound;