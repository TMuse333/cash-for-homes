"use client"

import dynamic from 'next/dynamic';
import Navbar from "@/components/navbar";
import ImageHero from "@/components/imageHero";

// Dynamically import the other components
const TextParallaxContentExample = dynamic(() => import('@/components/parallaxText'));

const Content = dynamic(() => import('@/components/content'));
const Accordion = dynamic(() => import('@/components/accordion'));
const CircleInfoGraphic = dynamic(() => import('@/components/circleInfographic'));
const Testimonials = dynamic(() => import('@/components/testimonials'));
const Closer = dynamic(() => import('@/components/closer'));
const Footer = dynamic(() => import('@/components/footer'));

// Import static data, images, and components that are not lazy-loaded
import { accordionProps, circleInfographicData1, content2Data, intro2, introDescription, openingText,
heroImages } from "@/data/data";
import TextFormat from "@/components/textFormat";
import TextFormat2 from "@/components/textFormat2";

// Images
import theresaDog from '../../../public/theresa-dog.webp';
import nicerHome from '../../../public/nicer-home.webp';
import theresaSeated from '../../../public/seated-theresa.webp';

const Homepage = () => {
  const links = [
    { name: 'How it works', destination: 'process', hasScroll: false },
    { name: 'About us', destination: 'about', hasScroll: false },
    { name: 'Contact Us', destination: 'contact' },
  ];

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

   

 
   
       {/* <TextParallaxContentExample
    src={intro}
alt="meme"
isVideo={true}
heading='Welcome to Ontario Cash for Houses'
subHeading=""
description={introDescription}
muted={false}
thumbnail={theresaDog.src}
destination='/contact'
buttonText="Get Your Cash Offer"

    /> */}

           <TextParallaxContentExample
    src={intro2}
    alt="Ontario Cash for Houses introductory image featuring a friendly and inviting scene that illustrates our commitment to providing fast cash offers for homeowners looking to sell their properties."

isVideo={true}
heading='Welcome to Ontario Cash for Houses'
subHeading=""
description={introDescription}
muted={false}
thumbnail={theresaDog.src}
destination='/contact'
buttonText="Get Your Cash Offer"

    />

    {/* <AppearingContent
    src={intro2}
    id='intro-video'
    sliderText="Welcome to Ontario Cash for Houses"
    isVideo={true}
    /> */}

    
    <Content
    {...content2Data}
    />

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

       <Content
    customText={<TextFormat2
    />}
    image={nicerHome}
   hasAnimation={true}
   reverse={false}
   alt="A quality home in a ontario neighbourhood "  //  background='bg-gradient-to-b from-blue-300 via-blue-500 to-blue-400 '
    />

    <Content
    customText={<TextFormat
    reverse={true}
    isAnimated={true}/>}
    image={nicerHome}
   hasAnimation={true}
   reverse={true}
  //  background='bg-gradient-to-b from-blue-300 via-blue-500 to-blue-400 '
    />

<div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-blue-700 via-blue-700 to-blue-600
        ml-auto mr-auto rounded-[200rem] mb-8">
           
       </div>

    <Content
    image={theresaSeated}
objectContain={true}
    customText={
      <>
    <Accordion
    {...accordionProps}
    inContent={true}
    margin='mr-12'
    // link="about"
  />

 
  </>
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

<h2 className="text-center text-black text-3xl sm:text-5xl font-semibold
mb-4">What they say about us</h2>
<p className="text-center text-black mb-4 sm:text-lg
pl-3 pr-3">Our clients have had monumental success working with us, you can be next!</p>

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
};

export default Homepage;
