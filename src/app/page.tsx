import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="border-2 flex-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-h1">
            Discover Amazing Products
          </h1>
          <p className="text-body text-light-gray">
            Explore our curated collection of high-quality products. From electronics to clothing, find everything you need in one place.
          </p>
          <div>
            <Link href={'/products'}>
              <Button 
              variant={'primary'}
              className="mr-2">Shop Now</Button>
            </Link>
            <Link href={'/categories'}>
              <Button 
              variant={'inverted'}
              >View Categories</Button>
            </Link>
          </div>

          <div className="flex gap-4">
            <p>
              <span className="text-body font-semibold">10K+</span><br/>
              <span className="text-light-gray text-small">Products</span>

            </p>
            <p>
              <span className="text-body font-semibold">50K+</span><br/>
              <span className="text-small text-light-gray">Happy Customers</span>
            </p>
            <p>
              <span className="text-body font-semibold">99%</span><br/>
              <span className="text-light-gray text-small">Satisfaction</span>
            </p>
          </div>
        </div>

        <Image
          src={'https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg'}
          alt="hero-image"
          width={60}
          height={60}
          className=""
        />
      </div>
    </div>
  );
}
