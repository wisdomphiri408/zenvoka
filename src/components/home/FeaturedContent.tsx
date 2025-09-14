import { NextPage } from "next";
import FeaturedTabs from "./FeaturedTabs";


const fetchProductsByCategory = async (category: string) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`,{next: {revalidate:3600}});
    if (!res.ok) {
      throw new Error('Server Error');
    }
    const data = await res.json();
    return { data, error: null };
  } catch (error) {
    console.error(`Error fetching category ${category}:`, error);
    return { data: null, error: 'Failed to fetch products' };
  }
};

const FeaturedContent: NextPage = async () => {
  const categories = [
    "men's clothing",
    "women's clothing",
    "electronics",
    "jewelery"
  ];

  const results = await Promise.all(categories.map(fetchProductsByCategory));

  const hasError = results.some(result => result.error !== null);

  if (hasError) {
    return (
      <div className="text-center my-6 p-6">
        <h3 className="text-h3">⚠️ Oops!</h3>
        <p className="text-text-secondary">
          We couldn’t load some of the featured products. Please check your connection and try again.
        </p>
      </div>
    );
  }

  const tabData = {
    all: [
      ...results[0].data, // men
      ...results[2].data, // electronics
      ...results[3].data, // jewelery
    ],
    men: results[0].data,
    women: results[1].data,
    electronics: results[2].data,
    jewelery: results[3].data
  };

  return (
    <div className="max-w-[1500px] m-auto">
      <div className="text-center my-6 p-6">
        <h3 className="text-h3">Featured Products</h3>
        <p className="text-text-secondary">
          Discover our carefully curated collection of high-quality products from trusted brands around the world.
        </p>
      </div>
      <div>
        <FeaturedTabs tabData={tabData} />
      </div>
    </div>
  );
};


export default FeaturedContent;