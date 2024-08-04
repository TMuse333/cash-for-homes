"use client"
import Content2 from "@/components/content2"
import Navbar from "@/components/navbar"
import React from "react"


const About = () => {

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
          name:'JV Partners',
          destination:'jv-partners',
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
        <main className="w-screen bg-gray-200">
                <Content2
                
        </main>
        </>

    )
}

export default About