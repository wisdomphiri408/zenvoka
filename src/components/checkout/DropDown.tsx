'use client'

import {NextPage} from "next";

interface Props {
    items: {
        name: string;
        code: string;
    }
}

const DropDown: NextPage <Props>= () => {
    return (
        <div>DropDown</div>
    )
}

export default DropDown;