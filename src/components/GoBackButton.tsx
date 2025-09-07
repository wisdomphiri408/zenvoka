'use client'
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { ArrowBigLeftIcon } from "lucide-react";
import { Button } from "./ui/button";

const GoBackButton: NextPage = () => {
    const router = useRouter();

    return(
            <Button
                variant={"inverted"}
                onClick={() => router.back()}
                className="ml-2">
                <ArrowBigLeftIcon className="h-4 w-4"/> Go Back
            </Button>
    )
}

export default GoBackButton;