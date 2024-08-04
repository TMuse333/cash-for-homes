"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData } from "@/data/data"



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
            <main className="w-screen mt-[6rem] bg-gray-200">
                <SlideShowCarousel
                {...processCarouselData}/>
            </main>
            
            
            </>
    )
}