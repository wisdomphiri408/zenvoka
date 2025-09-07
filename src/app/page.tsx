import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="px-2">
      {/* Hero section */}
      <Hero />
      <div>
        <h1 className="text-h3">Featured Cotent</h1>
      </div>
    </div>
  );
}
