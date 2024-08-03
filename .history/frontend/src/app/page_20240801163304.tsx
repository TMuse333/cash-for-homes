import Image from "next/image";
import { heroImages } from "@/data/data";
import ImageHero from "@/components/imageHero";
import Navbar from "@/components/navbar";

export default function Home() {

const links = [
  {
    name:'Tab 1',
    destination:'/',
    hasScroll:false
  },
  {
    name:'Tab 2',
    destination:'/',
    hasScroll:false
  },
  {
    name:'Tab 3',
    destination:'/',
    hasScroll:false
  },
]

  return (
    
    <>
    <Navbar
    links={links}
    />
  <main className="bg-gray-200 mt-8">
    <ImageHero
    images={heroImages}
    />
  </main>
  </>
  );
}
