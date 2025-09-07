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
              >Categories</Button>
            </Link>
          </div>

          <div>
            <p>
              <span>10K+</span><br/>
              Products
            </p>
            <p>
              <span >50K+</span><br/>
              Happy Customers
            </p>
            <p>
              <span>99%</span><br/>
              Satisfaction
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
