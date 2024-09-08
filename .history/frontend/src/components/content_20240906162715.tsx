"use client"

import React, { useState, } from 'react';
import { Variants, motion,useScroll, useTransform } from 'framer-motion';
import { useIntersectionObserver } from './intersectionObserver'
import { useAppContext } from '@/context/context';
import Image from 'next/image'
import Link from 'next/link';


import {StaticImageData} from 'next/image'
interface contentProps {
  image:  StaticImageData | string;
  alt?:string
  customText: React.ReactNode;
  description?: string[] | null  ;
  reverse: boolean | null;
  mainTitle?: string | null;
  floatingImage?: boolean;
  hasAnimation?: boolean;
  buttonLink?:string,
  buttonText?:string,
  background?:string
  video?:boolean,
  poster?:string
  objectContain?:boolean
}

const Content: React.FC<contentProps> = ({
  image,
  alt,
  customText,
  description,
  reverse,
  mainTitle,
  floatingImage,
  hasAnimation,
  buttonLink,
  buttonText,
  background,
  video,
  objectContain
}) => {
  const [inView, setInView] = useState(false);

  const imageSrc = typeof image === 'string' ? image : (image as StaticImageData).src;

 const {isMobile} = useAppContext()

  // Configure intersection observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold:  0.7,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);


  const imageVariants: Variants = {
    initial: {
      x: reverse ? 180 : -150,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x:  0,
      y: floatingImage ? [0, -5, 0] : 0,
      transition: {
    
        y: {
          delay: 2.45,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  const textVariants = (delay: number): Variants => {
    return {
      initial: {
        x: reverse ? -30 : 30,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
        },
      },
    };
  };

  const headerVariants = (delay:number): Variants => {
    return {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:delay
        }
    }
  }
}

const nullVariant: Variants = {

}




  

  return (
    <section className={`w-screen overflow-x-hidden
    ${background ? `${background}` : ''}`}>


    <motion.article
      ref={componentRef}
      className={`flex flex-col justify-center align-center pt-8 pb-8
       relative mr-auto ml-auto
       md:w-[100vw] md:max-w-[1200px] sm:max-w-[668px] z-1
      
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
        style={{
          scale: useTransform(
            useScroll().scrollYProgress,
            [0, 1],
            [1, 0.85]
          )
        }}
    >

   
     

      {video ? (
           <motion.video
           className='w-[90vw] h-[55vw] object-cover object-bottom sm:object-contain ml-auto mr-auto max-h-[567px] max-w-[668px] rounded-md'
           controls
           preload="auto"
           variants={hasAnimation ? imageVariants : nullVariant}
           initial={hasAnimation ? 'initial' : ''}
           animate={hasAnimation && inView ? 'animate' : ''} // Ensure the video is loaded
       >
           <source src={imageSrc} type="video/mp4" />
           Your browser does not support the video tag.
       </motion.video>
      ) : (
        <motion.img
        className={`w-[90vw] h-[55vw]  ml-auto mr-auto
        md:w-[50vw] md:mr-0 max-h-[567px] max-w-[668px]
        rounded-md ${objectContain ? 'object-contain' : 'object-cover'}`}
         variants={hasAnimation ? imageVariants : nullVariant}
          initial={hasAnimation ? 'initial' : ''}
          animate={hasAnimation && inView ? 'animate' : ''}
          src={imageSrc}
          alt={alt}
          />
      ) }
      
     

      {customText ? (
        <>
          {customText}
        </>
      ) : (
        <div className='text-gray-500'>
          <motion.h3
          variants={headerVariants(0)}
          initial={hasAnimation ? 'initial' : ''}
          animate={hasAnimation && inView ? 'animate' : ''}
           className="text-left pl-5 sm:pl-12 pt-5
           sm:text-4xl font-semibold
           bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent 
           ">{mainTitle}</motion.h3>
          <motion.p
          variants={textVariants(0.45)}
       initial={hasAnimation ? 'initial' : ''}
       animate={inView && hasAnimation? 'animate' : ''}
          className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line
          text-black">
            {description != null ? description[0] :
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'}
               </motion.p>
            <motion.p
             variants={textVariants(0.65)}
             initial={hasAnimation ? 'initial' : ''}
             animate={inView && hasAnimation? 'animate' : ''}
             className="mt-6 text-left pl-5 sm:pl-12
            text-black"
             >
              {description != null ? description[1] :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident odio labore recusandae est accusantium voluptatibus ad doloremque! Quo corrupti cum delectus ad praesentium minus voluptates soluta consectetur perspiciatis veniam? Pariatur vel, error cum possimus ad asperiores inventore obcaecati suscipit.'}
                <br/>
                

                <Link href={buttonLink ? buttonLink : ''}>

                <motion.button
                  variants={headerVariants(1.2)}
                  initial={hasAnimation ? 'initial' : ''}
                  animate={hasAnimation && inView ? 'animate' : ''}
                 className="mt-6 bg-blue-500 p-3 rounded-xl hover:gray-200 text-gray-200
                 hover:text-blue-500 hover:bg-white transition-all">{buttonText  ? buttonText : 'button'}</motion.button>
                  </Link>
            </motion.p>
            
         
        </div>
      )}
    </motion.article>
    </section>
  );
};

export default Content;