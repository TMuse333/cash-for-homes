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
            p-8 rounded-xl sm:text-xl mt-[-8rem] mb-[4rem]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium ipsam cumque amet iste asperiores vero qui quisquam nostrum blanditiis ea maxime, tempora itaque quis saepe. Nisi id odit, dolorem commodi mollitia ea maiores, deleniti repellat ducimus est iusto iure?
             <button
            </p>

                

                <Footer
                links={links}
                />
            </main>
            
            
            </>
    )
}

export default Process