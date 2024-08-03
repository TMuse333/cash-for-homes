"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/Link'



interface HeroProps {
    images:{
        src:string,
        alt:string
    }[]
}

const ImageHero: React.FC<HeroProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);





    useEffect(() => {
        const interval = setInterval(() => {
            // Calculate the index of the next image
            const nextImageIndex = (currentImageIndex + 1) % images.length;
            setCurrentImageIndex(nextImageIndex);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clear the interval on component unmount
    }, [currentImageIndex, images.length]);

    return (
        <header className="flex w-screen flex flex-col relative
        mt-8 sm:mt-5
        md:flex-row 
        pb-10 h-screen md:h-auto">
            <div className="md:w-[40vw] relative
            md:flex md:flex-col md:justify-start md:items-center
            mb-8 text-center mt-auto mb-auto">
{/*  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[2px] after:w-4/5 after:bg-gray-underline */}
          
<h1 className="relative text-4xl mb-4 mt-4 sm:text-6xl text-gray-500">
  Ontario Cash for Homes
</h1>

            <p className="mt-4 sm:text-xl pr-4 pl-4 mb-5 text-gray-500">We will quickly buy your home for cash</p>
            {/* <p className="text-2xl mb-4 sm:text-3xl">Place address Here</p> */}
            <Link href='contact'
            passHref>

 
            <button className="bg-white 
            border border-black p-2
            rounded-sm hover:text-white hover:bg-gradient-to-b from-gold-light to-gold-dark
            transition-all text-black">
                Book a consultation
            </button>
            </Link>
            </div>

            <div className=" h-[70vh]  relative
            md:w-[60vw]">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`w-full h-[68%] md:h-full top-0 object-cover
                         absolute  object-center opacity-0  transition-opacity rounded-xl
                          duration-1000 ${index === currentImageIndex ? 'opacity-100' : ''}`}
                    />
                ))}
            </div>
        </header>
    );
};

export default ImageHero;