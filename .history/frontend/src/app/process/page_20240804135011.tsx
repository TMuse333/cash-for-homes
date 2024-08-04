"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData, jvParallaxContent} from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"



const Process = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]



    return (
            <>
          
            <main className="w-screen mt-[6rem] bg-gray-200">
            <Navbar
            links={links}
            relative={true}
            />
                <TextParallaxContentExample
                {...jvParallaxContent}/>

                <SlideShowCarousel
                {...processCarouselData}/>
            </main>
            
            
            </>
    )
}

export default Process