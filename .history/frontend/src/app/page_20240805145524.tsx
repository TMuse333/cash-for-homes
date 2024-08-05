"use client"

import Image from "next/image";
import { accordionProps, circleInfographicData1, content1Data, content2Data, heroImages,openingText } from "@/data/data";
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
import { CircleInfoGraphic } from "@/components/circleInfographic";


const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem ad debitis nemo qui praesentium sequi architecto vel repellat cum magni sint voluptatibus totam, animi ex atque? Tenetur itaque adipisci facilis, officia repellat, voluptatum quaerat incidunt sit assumenda quam quod.'


export default function Home() {

const links = [
  {
    name:'How it works',
    destination:'process',
    hasScroll:false
  },
  {
    name:'JV Partners',
    destination:'jv-partners',
    hasScroll:false
  },
  {
    name:'About us',
    destination:'about',
    hasScroll:false
  },
  {
    name:'Contact Us',
    destination:'contact'
  }
]

  return (
    
    <>
    
    <Navbar
    links={links}
    />
  <main className="bg-gray-200 mt-[6rem]
   
 ">
    <ImageHero
    images={heroImages}
    />

   

 
   
       <TextParallaxContentExample
    src={dunk}
alt="meme"
isVideo={true}
heading='Your title Here'
subHeading="Subtitle here"
description={lorem}
muted={false}
thumbnail={cashHome1.src}


    />
    <Content
    {...content2Data}
    />

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

    <Content
    customText={<TextFormat
    reverse={true}
    isAnimated={true}/>}
    image={cashHome1}
   hasAnimation={true}
   reverse={false}
  //  background='bg-gradient-to-b from-blue-300 via-blue-500 to-blue-400 '
    />

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

    <Content
    image={cashHome1}

    customText={<Accordion
    {...accordionProps}
    inContent={true}
    margin='mr-12'
  />
}
reverse={true}
/>

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

<CircleInfoGraphic
{...circleInfographicData1}
/>

<h2 className="text-center">Testimonials here</h2>
<p className="text-center">Our clients have had monumental success working with us, you can be next!</p>

<Testimonials
/>

 <Closer
    {...openingText}
    />

    <Footer
    links={links}
    />


  </main>
  </>
  );
}
