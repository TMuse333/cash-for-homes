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
      <Navbar links={links} />
      <main className="bg-gray-200 mt-[6rem]">
        <ImageHero images={heroImages} />

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

        <Content {...content2Data} />

        {/* Add the rest of the content as dynamically loaded components */}
        <Content
          customText={<TextFormat2 />}
          image={nicerHome}
          hasAnimation={true}
          reverse={false}
        />

        <Content
          customText={<TextFormat reverse={true} isAnimated={true} />}
          image={nicerHome}
          hasAnimation={true}
          reverse={true}
        />

        
        
        <CircleInfoGraphic {...circleInfographicData1} />

        <Testimonials />

        <Closer {...openingText} />

        <Footer links={links} />
      </main>
    </>
  );
};

export default Homepage;
