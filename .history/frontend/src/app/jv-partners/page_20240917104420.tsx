"use client"
// import ContactForm from "@/components/contactForm"
import Navbar from "@/components/navbar"
import React from "react"
import { accordionProps, jvParallaxContent } from "@/data/data"
import  TextParallaxContentExample from "@/components/parallaxText"
import Footer from "@/components/footer"
import Accordion from "@/components/accordion"
import Content2 from "@/components/content2"
import jv from '../../../public/jv-partners.webp'


const Partners = () => {

  const intro = 'Our JV Partners are forward-thinking collaborators who unite their expertise, resources, and strategic vision to achieve shared goals. Together, we harness collective strengths to create powerful synergies, driving innovation and transformative growth in the real estate market, ensuring mutual success'

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
      image={jv}
      title='JV Partners'
      alt='An image represent the joint ventures of our cash for houses business'
      description={intro}
      />
        {/* <TextParallaxContentExample
        {...jvParallaxContent}
        /> */}
        
        {/* <ContactForm/> */}

       

        <Footer
        links={links}/>


    </main>
    </>
}


export default Partners