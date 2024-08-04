"use client"
import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"
import { jvParallaxContent } from "@/data/data"

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
        
        <ContactForm/>
    </main>
    </>
}


export default ContactPage