'use client'
import { NextPage } from "next";
import { useState } from "react";
import { Funnel,ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../ui/button";

const tabs = [
    {id: 'all products',label: 'All products'},
    {id: 'electronics',label: 'Electronics'},
    {id: 'jewelery',label: 'Jewelery'},
    {id: "men's clothing",label: "Men's Clothing"},
    {id: 'women\'s clothing',label: 'Women\'s Clothing'},
]

const FeaturedTabs: NextPage = () => {
    const [activeTab, setActiveTab] = useState<string>('all products');
    const [dropDown, setDropDown] = useState<Boolean>(false);

    return(
        <div className="flex flex-col md:flex-row md:justify-center gap-4">
            {/* Tabs */}
            <div className="card flex flex-col ">
            <div className="flex items-center justify-between mb-2">
                <p className="flex gap-2 items-center">
                    <Funnel className="w-4 h-4" />
                    <span>Categories</span>   
                </p> 
                {dropDown 
                ? <ChevronUp className="w-4 h-4" onClick={()=>setDropDown(false)}/>
                : <ChevronDown className="w-4 h-4" onClick={() => setDropDown(true)}/>}      
            </div>
             
             {dropDown && (
                <div className="flex flex-col gap-1">
                {tabs.map((tab) => (
                    <Button
                    key={tab.id}
                    variant={activeTab === tab.id
                        ? "primary"
                        :"default"
                    }
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full py-2 px-2 text-sm font-medium transition-colors duration-200 flex justify-between
                        ${activeTab === tab.id ? "" : ""}
                    `}
                    >
                    {tab.label}
                    {activeTab === tab.id && (
                    <span className="m-2 p-1 rounded-md bg-background-color text-text-primary dark:bg-background-color-dark dark:text-text-secondary">Active</span>
                    )}

                    </Button>
                ))}
                </div>
             )}

            </div>



            {/* Tabs Content */}
            <div className="border-2 border-red-500">
                {activeTab === 'all products' &&(
                    <p>
                        Welcome to products tab
                    </p>
                )}

                {activeTab === 'electronics' && (
                    <p>This is electronics</p>
                )}

                {activeTab === 'jewelery' && (
                    <p>
                        This is a jewelery tab
                    </p>
                )}

                {activeTab === 'men\'s clothing' && (
                    <p>This is {'men\'s clothing'}</p>
                )}

                {activeTab === 'women\'s clothing' && (
                    <p>
                        This is Women's clothing
                    </p>
                )}
            </div>

        </div>
    )
}

export default FeaturedTabs;