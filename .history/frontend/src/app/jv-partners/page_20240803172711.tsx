"use client"
import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"

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
    mt-[8rem] bg-gray-200 h-screen">
        <ContactForm/>
    </main>
    </>
}


export default ContactPage