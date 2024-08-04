"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData, jvParallaxContent} from "@/data/data"



const Process = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]



    return (
            <>
            <Navbar
            links={links}
            />
   
                <SlideShowCarousel
                {...processCarouselData}/>
           
            
            
            </>
    )
}

export default Process