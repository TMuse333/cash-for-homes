"use client"

import Image from "next/image";
import { accordionProps, content1Data, content2Data, heroImages,openingText } from "@/data/data";
import ImageHero from "@/components/imageHero";
import Navbar from "@/components/navbar";
import Content from "@/components/content";
import Closer from "@/components/closer";
import TextFormat from "@/components/textFormat";
import cashHome1 from '../../public/cash_for_home1.jpg'
import Footer from "@/components/footer";
import Accordion from "@/components/accordion";
import { reverse } from "dns";
import Testimonials from "@/components/testimonials";
import { TextParallaxContentExample } from "@/components/parallaxText";
import { dunk } from "@/data/data";


const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem ad debitis nemo qui praesentium sequi architecto vel repellat cum magni sint voluptatibus totam, animi ex atque? Tenetur itaque adipisci facilis, officia repellat, voluptatum quaerat incidunt sit assumenda quam quod.'


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
    
    {/* <Navbar
    links={links}
    /> */}
  <main className="bg-gray-200 mt-[8rem]
   left-0 
 ">
    <ImageHero
    images={heroImages}
    />

   

 
    <Closer
    {...openingText}
    />
       <TextParallaxContentExample
    src={dunk}
alt="meme"
isVideo={true}
description={lorem}
muted={true}
thumbnail={cashHome1.src}


    />
    <Content
    {...content2Data}
    />

    <Content
    customText={<TextFormat
    reverse={true}
    isAnimated={true}/>}
    image={cashHome1}
   hasAnimation={true}
   reverse={true}
  //  background='bg-gradient-to-b from-blue-300 via-blue-500 to-blue-400 '
    />

    <Content
    image={cashHome1}
    customText={<Accordion
    {...accordionProps}
  />
}
reverse={false}
/>


<Testimonials/>

    <Footer
    links={links}
    />


  </main>
  </>
  );
}
