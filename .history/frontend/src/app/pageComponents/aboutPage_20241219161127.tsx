"use client"

import Navbar from "@/components/navbar"
import { aboutCloser,  aboutContent3} from "../../../posts/data/data"
import React from "react"
import Content from "../../components/content";

import Closer from "../../components/closer";
import Footer from "@/components/footer"


const AboutPage = () => {

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
          name:'Contact Us',
          destination:'contact'
        }
      ]

    return (
        <>
        <Navbar
        links={links}
        />
        <main className="w-screen bg-gray-200 mt-[6rem]">
        

<h1 className=" text-black
mt-[4rem] pt-6
          text-2xl text-center mt-4 sm:text-3xl md:text-5xl">About Ontario Cash for Homes</h1>

<Content
            {...aboutContent3}
            />

           

            <Closer
            {...aboutCloser}
            />

            <Footer
            links={links}
            />
        </main>
        </>

    )
}

export default AboutPage