import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Target } from "lucide-react";

const Hero: NextPage = () => {
    return(
              <div className="flex flex-col lg:flex-row flex-center gap-[var(--gap-fluid)] pt-20">
        <div className="flex flex-col gap-6 max-w-[500px] lg:max-w-[400px] xl:max-w-[500px]">
          <h1 className="text-h1">
            Discover Amazing Products
          </h1>
          <p className="text-body text-text-secondary">
            Explore our curated collection of high-quality products. From electronics to clothing, find everything you need in one place.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href={'/products'}>
              <Button 
              className="w-full"
              variant={'primary'}
              >Shop Now</Button>
            </Link>
            <Link href={'/categories'}>
              <Button 
              className="w-full"
              variant={'inverted'}
              >View Categories</Button>
            </Link>
          </div>

          <div className="flex gap-4">
            <p>
              <span className="text-body font-semibold">10K+</span><br/>
              <span className="text-text-secondary text-small">Products</span>

            </p>
            <p>
              <span className="text-body font-semibold">50K+</span><br/>
              <span className="text-small text-text-secondary">Happy Customers</span>
            </p>
            <p>
              <span className="text-body font-semibold">99%</span><br/>
              <span className="text-text-secondary text-small">Satisfaction</span>
            </p>
          </div>
        </div>


        <div className="relative w-full max-w-[700px] md:aspect-[22/30] aspect-[4/5] lg:aspect-[16/20]">
          <Image
            src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg"
            alt="hero-image"
            fill
            className="object-cover rounded-md"
            priority
          />
          <div className="card absolute bottom-6 left-6 flex flex-center gap-2">
            <Target className="w-4 h-4" />
            <p>
                <span className="font-bold">Free Shipping</span><br/>
                <span className="text-text-secondary">on order over $50</span>
            </p>
          </div>
        </div>
      </div>
    )
}

export default Hero;