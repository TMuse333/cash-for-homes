"use client"
import React, {useState} from "react";

import { accordionProps, circleInfographicData1, content1Data, content2Data, heroImages,openingText } from "@/data/data";
import ImageHero from "@/components/imageHero";
import Navbar from "@/components/navbar";
import Content from "@/components/content";
import Closer from "@/components/closer";
import TextFormat from "@/components/textFormat";

import Footer from "@/components/footer";
import Accordion from "@/components/accordion";

import Testimonials from "@/components/testimonials";
import { TextParallaxContentExample } from "@/components/parallaxText";

import { CircleInfoGraphic } from "@/components/circleInfographic";
import { useAppContext } from "@/context/context";


import theresaDog from '../../../public/theresa-dog.webp'
import theresaSeated from '../../../public/seated-theresa.webp'

import { introDescription } from "@/data/data";

import nicerHome from '../../../public/nicer-home.webp'
import TextFormat2 from "@/components/textFormat2";


import { intro2 } from "@/data/data";

//
const Homepage =() => {

const links = [
  {
    name:'How it works',
    destination:'process',
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
  },
  // {
  //   name:'JV Partners',
  //   destination:'jv-partners',
  //   hasScroll:false
  // },
]

const { loggedIn, setLoggedIn } = useAppContext()
const [password, setPassword] = useState('');

const handleLogin = () => {
  if (password === 'clients2024') {
    setLoggedIn(true);
  } else {
    alert('Incorrect password');
  }
};



  return (
    
    <>

   

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
alt="meme"
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
  //  background='bg-gradient-to-b from-blue-300 via-blue-500 to-blue-400 '
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

   
  </>
  );
}

export default Homepage