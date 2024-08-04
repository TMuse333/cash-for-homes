"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData, jvParallaxContent,
openingText} from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"
import Closer from "@/components/closer"
import Footer from "@/components/footer"



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

<p className="rounded-md bg-gray-400
            w-[80%] ml-auto mr-auto relative
            p-8 rounded-xl sm:text-xl">
              {description}
            </p>

                <Closer
                {...openingText}
                />

                <Footer
                links={links}
                />
            </main>
            
            
            </>
    )
}

export default Process