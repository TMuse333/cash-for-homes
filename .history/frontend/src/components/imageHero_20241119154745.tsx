"use client"

import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Image from "next/image";
import handshake from '../../public/handshake.webp'


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
          
<h1 className="relative text-4xl mb-4 mt-4 text-sm sm:text-md md:text-lg bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent 
">
 We help you sell house fast ontario canada
</h1>

            <h2 className="mt-4  pr-4 pl-4 mb-5 text-white
            text-2xl sm:text-3xl md:text-4xl">Get Cash Fast by Selling Your House to Ontario Property Buyers</h2>

            <p className="text-white px-4 mb-2">
            Ontario Cash For Houses is your professional cash home buyer, offering a fast and hassle-free solution to sell your house in Ontario, Canada. We buy houses as-is, with no real estate agent fees, commissions, or closing costs. Whether you&posre looking to sell quickly or need a fair cash offer, our straightforward process helps homeowners in any situation. Get your free cash offer today and sell your house without the stress of traditional methods.
            </p>
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
               
                    <Image
                    priority
                    width={600}
                    height={1300}
                    
                        src={handshake}
                        alt={'Sell cash for house quick handshake'}
                        className={`w-full h-[68%] md:h-full top-0 object-cover
                         absolute  object-center opacity-1  transition-opacity rounded-xl
                          duration-1000 `}
                    />
            
            </div>
        </header>
    );
};

export default ImageHero;