"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData, jvParallaxContent,
openingText} from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"
import Closer from "@/components/closer"



const Process = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]



    return (
            <>
          
            <main className="w-screen  bg-gray-200">
            <Navbar
            links={links}
            relative={true}
            />
                <TextParallaxContentExample
                {...jvParallaxContent}/>

                <SlideShowCarousel
                {...processCarouselData}/>

                <Closer
                {...openingText}
                />
            </main>
            
            
            </>
    )
}

export default Process