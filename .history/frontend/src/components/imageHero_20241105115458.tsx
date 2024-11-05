"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/link'



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
        mt-8 sm:mt-5 overflow-x-hidden
        md:flex-row 
        pb-10 h-screen md:h-auto
        bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-300 ">
            <div className="md:w-[40vw] relative
            md:flex md:flex-col md:justify-start md:items-center
            mb-8 text-center mt-auto mb-auto">
{/*  after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-5px] after:h-[2px] after:w-4/5 after:bg-gray-underline */}
          
<h1 className="relative text-4xl mb-4 mt-4 text-sm sm:text-md bg-gradient-to-b from-black to-gray-800 bg-clip-text text-transparent 
">
  Sell house fast ontario canada
</h1>

            <h2 className="mt-4  pr-4 pl-4 mb-5 text-black
            text-xl sm:text-2xl md:text-3xl">Ontario Cash for Houses</h2>
            {/* <p className="text-2xl mb-4 sm:text-3xl">Place address Here</p> */}
            <Link href='contact'
            passHref>

 
            <button className="bg-white 
             p-3
            rounded-xl hover:text-white hover:bg-gradient-to-b from-gold-light to-gold-dark
            transition-all text-black">
                Call Us Now!
            </button>
            </Link>
            <h3 className="mt-4 text-xl mb-4 sm:text-2xl md:text-3xl">(647)&nbsp;951-2070</h3>
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