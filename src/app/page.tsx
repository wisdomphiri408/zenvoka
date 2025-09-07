import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="border-2">
        <div>
          <h1 className="text-h1">
            Discover Amazing Products
          </h1>
          <p className="text-body">
            Explore our curated collection of high-quality products. From electronics to clothing, find everything you need in one place.
          </p>
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
