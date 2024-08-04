"use client"
import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"
import { jvParallaxContent } from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"
import Footer from "@/components/footer"

const ContactPage = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]

    return <>
    <Navbar links={links}
    />
    <main className="w-screen 
    mt-[8rem] bg-gray-200">
        <TextParallaxContentExample
        {...jvParallaxContent}
        />
        
        <ContactForm/>

        <Footer
        links={links}/>

        
    </main>
    </>
}


export default ContactPage