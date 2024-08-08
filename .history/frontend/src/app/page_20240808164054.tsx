"use client"
import React, {useState} from "react";
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
import { useAppContext } from "@/context/context";
import canadianDollar from '../../public/canadian-dollars.jpeg'


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

const { loggedIn, setLoggedIn } = useAppContext()
const [password, setPassword] = useState('');

const handleLogin = () => {
  if (password === 'clients2024') {
    setLoggedIn(true);
  } else {
    alert('Incorrect password');
  }
};

const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    handleLogin();
  }
};

  return (
    
    <>

    {!loggedIn && 10 === 12 ? (
       <div className="top-[40%] fixed 
       left-1/2 -translate-x-1/2">
        <h1 className="text-3xl text-black
        mb-4">welcome, please enter the password</h1>
       <input 
         type="password" 
         value={password} 
         onChange={(e) => setPassword(e.target.value)} 
         placeholder="Enter password"
         className="border p-2 text-black"
         onKeyDown={handleKeyDown} 
       />
       <button onClick={handleLogin} className="ml-2 p-2 bg-blue-500 text-white">
         Login
       </button>
     </div>
    ) : (

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
thumbnail={canadianDollar.src}


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

<h2 className="text-center text-black text-3xl sm:text-5xl font-semibold
mb-4">Testimonials here</h2>
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

    )}
  </>
  );
}
