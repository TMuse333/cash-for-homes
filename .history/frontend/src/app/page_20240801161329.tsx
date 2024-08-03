import Image from "next/image";
import { heroImages } from "@/data/data";
import ImageHero from "@/components/imageHero";

export default function Home() {

const links = [
  {
    name:'Tab 1',
    destination:'/',
    hasScroll:false
  }
]

  return (
  <main>
    <ImageHero
    images={heroImages}
    />
  </main>
  );
}
