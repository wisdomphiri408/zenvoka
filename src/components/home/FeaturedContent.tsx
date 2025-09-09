import { NextPage } from "next";
import FeaturedTabs from "./FeaturedTabs";
import { error } from "console";

const fetchProductsByCategory = async (category:string) => {
    const res = await fetch(`https://api.escuelajs.co/api/v1/categories/${category}/products`)
    
    if(!res.ok){
        throw Error('Sever Error');
    }
    const data = await res.json();
    return data
}

const FeaturedContent: NextPage = async() => {
    const clothes = await fetchProductsByCategory('1');
    const electronics = await fetchProductsByCategory('2');
    const furniture = await fetchProductsByCategory('3');
    const shoes = await fetchProductsByCategory('4');
    const miscalleneous = await fetchProductsByCategory('5');

    const tabData = {
        clothes,
        electronics,
        furniture,
        shoes,
        miscalleneous,
    };

    return(
        <div>
            <div className="text-center my-6 p-6">
                <h3 className="text-h3">
                    Featured Products
                </h3>
                <p className="text-text-secondary">
                    Discover our carefully curated collection of high-quality products from trusted brands around the world.
                </p>
            </div>
                {/*Featured Tabs */}
                <div>
                    <FeaturedTabs tabData={tabData}/>
                </div>
        </div>
    )
}

export default FeaturedContent;