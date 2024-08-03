import Image from "next/image";
import { content1Data, heroImages,openingText } from "@/data/data";
import ImageHero from "@/components/imageHero";
import Navbar from "@/components/navbar";
import Content from "@/components/content";

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
  <main className="bg-gray-200 mt-[8rem]">
    <ImageHero
    images={heroImages}
    />
    <Content
    {...content1Data}
    />
  </main>
  </>
  );
}
