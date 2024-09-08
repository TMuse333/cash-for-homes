"use client"
import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"
import { accordionProps, jvParallaxContent } from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"
import Footer from "@/components/footer"
import Accordion from "@/components/accordion"
import Content2 from "@/components/content2"

const Partners = () => {

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

    return <>
    <Navbar links={links}
    />
    <main className="w-screen 
    mt-[8rem] bg-gray-200">

      <Content2
      im
      />
        {/* <TextParallaxContentExample
        {...jvParallaxContent}
        /> */}
        
        <ContactForm/>

       

        <Footer
        links={links}/>


    </main>
    </>
}


export default Partners