"use client"

import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import ImageHero from "@/components/imageHero";
import React, { useState } from "react";

// Dynamically import the other components
// const TextParallaxContentExample = dynamic(() => import('@/components/parallaxText'),{ssr:true});

const Content = dynamic(() => import('@/components/content'));
const Accordion = dynamic(() => import('@/components/accordion'));
const CircleInfoGraphic = dynamic(() => import('@/components/circleInfographic'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Closer = dynamic(() => import('@/components/closer'));
const Footer = dynamic(() => import('@/components/footer'),{ssr:false});

// Import static data, images, and components that are not lazy-loaded
import {
    circleInfographicData1, intro2, introDescription, openingText,
heroImages, blogCarousel,
experienceCard1,experienceCard2} from "@/data/data";
//  const TextFormat = dynamic(()=>import('@/components/textFormat'))
//  const TextFormat2 = dynamic(()=>import('@/components/textFormat2'))

// Images
import theresaDog from '../../../public/theresa-dog.webp';
// import nicerHome from '../../../public/nicer-home.webp';
// import theresaSeated from '../../../public/seated-theresa.webp';
import AppearingContent from '@/components/appearingSquare';
import ExperienceCard from '@/components/experienceCard';
import ScrollCarousel from '@/components/scrollCarousel';
import SlidingText from '@/components/slidingText';

const Homepage = () => {
  const links = [
    { name: 'How it works', destination: 'process', hasScroll: false },
    { name: 'About us', destination: 'about', hasScroll: false },
    { name: 'Contact Us', destination: 'contact' },
  ];

const [slideComplete, setSlideComplete] = useState(false)

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

   

 
   
  <AppearingContent
  isVideo={true}
  src={intro2}
  sliderText='Sell your house fast with Ontario Cash for Houses'
  description={introDescription}
  alt="Ontario Cash for Houses introductory image featuring a friendly and inviting scene that illustrates our commitment to providing fast cash offers for homeowners looking to sell their properties."
  id='homepage-appearing-square'
  thumbnail={theresaDog.src}
  />

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>
  
<ExperienceCard
{...experienceCard1}
/>

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

<ExperienceCard
{...experienceCard2}
/>
    
    {/* <Content
    {...content2Data}
    /> */}



     

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

    {/* <Content
    alt='An image of theresa describing the reasons why ontario cash for houses is different from the rest and will help you out!'
    image={theresaSeated}
objectContain={true}
    customText={
      <>
    <Accordion
    {...accordionProps}
    inContent={true}
    margin='mr-12'

  />
 
  </>
}
reverse={true}
/> */}

<h2 className="text-center text-black text-3xl sm:text-5xl font-semibold
mb-4">
  Benefits of selling your house for cash with Ontario Cash for Houses?
</h2>
<p className=" text-black mb-4 sm:text-lg
pl-3 pr-3 px-6 text-left w-[90%] mx-auto">
  Discover the benefits of selling your home quickly and hassle-free with Ontario Cash for Houses. We offer competitive cash offers for homes in any condition, eliminating the need for repairs, agent fees, and commissions. Our process is straightforward and fast, allowing you to sell your house as-is and close the deal on your terms. Learn how our transparent process, flexible closing options, and all-cash offers can help you get the best value for your property with no hidden costs or delays.
</p>


<CircleInfoGraphic
{...circleInfographicData1}
/>

<h2 className="text-center text-black text-3xl sm:text-5xl font-semibold mb-4
px-6">
  What Our Clients Say About Selling Their House Fast for Cash
</h2>
<p className="text-left mx-auto w-[90%] text-black mb-4 sm:text-lg pl-3 pr-3">
  Our clients have had monumental success working with us. Whether they needed to sell a house quickly, avoid costly repairs, or simply get a fair cash offer fast, we’ve helped homeowners across Ontario achieve their goals. You can be next! Experience a hassle-free, transparent process with no hidden fees, and sell your house fast for cash with confidence. 
</p>


<Testimonials
/>

<SlidingText
text='The Ontario Cash for Houses Blog'
setSlideComplete={setSlideComplete}
/>

<p className={`text-left mx-auto w-[90%] text-black mb-4 sm:text-lg pl-3 pr-3 transition-all
${slideComplete ? 'opacity-0' : 'opacity-1'}`}>
L
</p>

<ScrollCarousel
images={blogCarousel}
bgImage
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
};

export default Homepage;
