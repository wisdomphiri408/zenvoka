'use client'
import { NextPage } from "next";
import { useState } from "react";
import { Funnel } from "lucide-react";
import { Button } from "../ui/button";

const tabs = [
    {id: 'all products',label: 'All products'},
    {id: 'electronics',label: 'Electronics'},
    {id: 'jewelery',label: 'Jewelery'},
    {id: "men's clothing",label: "Men's Clothing"},
    {id: 'women\'s clothing',label: 'Women\'s Clothing'},
]

const FeaturedTabs: NextPage = () => {
    const [activeTab, setActiveTab] = useState('all products');

    return(
        <div className="flex flex-col md:flex-row md:justify-center">
            {/* Tabs */}
            <div className="card flex flex-col ">
            <div className="flex items-center justify-between mb-2 border-b py-2">
                <p className="flex gap-2 items-center">
                    <Funnel className="w-5 h-5" />
                    <span>Categories</span>   
                </p> 
                {}      
            </div>
             
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