"use client"
import ContactForm from "@/components/contactForm"
import React from "react"

const ContactPage = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]

    return 
    <main className="w-screen overflow-x-hidden">
        <ContactForm/>
    </main>
}


export default ContactPage