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
        <div>
            <form onSubmit={handleSearch}>
                <Search />
                <InputField 
                type="search"
                value={search}
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                placeholder="search products..."
                className=""
                />
            </form>
        </div>
    )
}

export default SearchBar;