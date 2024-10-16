"use client"
import Content2 from "@/components/content2"
import Navbar from "@/components/navbar"
import { aboutCloser, aboutContent1 } from "@/data/data"
import React from "react"
import Content from "../../components/content";
import { content1Data, openingText } from "@/data/data";
import Closer from "../../components/closer";
import Footer from "@/components/footer"


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
        <main className="w-screen bg-gray-200 mt-[6rem]">
                <Content2
                {...aboutContent1}
                />

<Content
            {...content1Data}
            />

            <Content
            {...content1Data}
            reverse={true}
            background='bg-gradient-to-tr from-blue-400 via-blue-300 to-blue-200'
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

export default About