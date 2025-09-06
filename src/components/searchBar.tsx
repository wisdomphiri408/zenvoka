'use client'
import { NextPage } from "next";
import { Search } from "lucide-react";
import InputField from "./Inputfield";
import { useState } from "react";

const SearchBar: NextPage = () => {

    const [search, setSearch] = useState('');

    const handleSearch = (e:React.FormEvent) =>{
        e.preventDefault();

        alert(`The form is submited! ${search}`);
    }
    return(
        <div className="hidden sm:block">
            <form onSubmit={handleSearch}>
                <div className="flex items-center">
                <Search
                onClick={handleSearch} 
                className="z-10"/>
                <InputField 
                type="search"
                value={search}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                placeholder="search products..."
                className="ml-[-28px] md:w-[var(--input-fluid)] pl-[28px]"
                />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;