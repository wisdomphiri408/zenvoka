import { NextPage } from "next";
import FeaturedTabs from "./FeaturedTabs";

const FeaturedContent: NextPage = () => {
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
                    <FeaturedTabs />
                </div>
        </div>
    )
}

export default FeaturedContent;