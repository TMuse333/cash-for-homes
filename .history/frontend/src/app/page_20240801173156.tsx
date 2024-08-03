import Image from "next/image";
import { content1Data, heroImages,openingText } from "@/data/data";
import ImageHero from "@/components/imageHero";
import Navbar from "@/components/navbar";
import Content from "@/components/content";
import Closer from "@/components/closer";

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
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?
    <Navbar
    links={links}
    />
  <main className="bg-gray-200 mt-[8rem]">
    <ImageHero
    images={heroImages}
    />
    <Closer
    {...openingText}
    />
    <Content
    {...content1Data}
    />
  </main>
  </>
  );
}
