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
            destination:'/',
            hasScroll:false
          },
        {
          name:'How it works',
          destination:'process',
          hasScroll:false
        },
       
        {
          name:'About us',
          destination:'about',
          hasScroll:false
        },
        {
          name:'Contact Us',
          destination:'contact'
        }
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

                <p className="text-center text-gray-500">Quick and easy</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, deleniti quibusdam fugit dicta temporibus sed!</p>

                <SlideShowCarousel
                {...processCarouselData}/>

            <p className="rounded-md bg-gray-400
            w-[80%] ml-auto mr-auto relative
            p-8 rounded-xl sm:text-xl mt-[-8rem] mb-[4rem]">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusantium ipsam cumque amet iste asperiores vero qui quisquam nostrum blanditiis ea maxime, tempora itaque quis saepe. Nisi id odit, dolorem commodi mollitia ea maiores, deleniti repellat ducimus est iusto iure?
            <br/>
             <button className="mt-4 bg-blue-500 p-3 rounded-xl hover:scale-[1.05]
             hover:bg-white transition-all hover:text-blue-500">
                Contact Us
             </button>
            </p>

                

                <Footer
                links={links}
                />
            </main>
            
            
            </>
    )
}

export default Process