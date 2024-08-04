"use client"
import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"
import { jvParallaxContent } from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"

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
    <main className="w-screen overflow-x-hidden
    mt-[8rem]">
        <TextParallaxContentExample
        {...jvParallaxContent}
        />
        
        <ContactForm/>
    </main>
    </>
}


export default ContactPage