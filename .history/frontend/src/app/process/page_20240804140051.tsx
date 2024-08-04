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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae suscipit nam sapiente iusto minus dolore asperiores quidem, praesentium neque nulla!
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