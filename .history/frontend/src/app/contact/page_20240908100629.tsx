"use client"

import ApplicationForm from "@/components/applicationForm";
import Content2 from "@/components/content2";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { contactContent2 } from "@/data/data";
import React from "react";




const Contact = () => {
    const links = [
        {
            name:'Home',
            destination:'/',
            hasScroll:false
          },
        {
          name:'How it works',
          destination:'/process',
          hasScroll:false
        },
       
      
        {
          name:'About Us',
          destination:'/about'
        },
        // {
        //   name:'JV Partners',
        //   destination:'/jv-partners',
        //   hasScroll:false
        // },
      ]


    return (
        <>
        <Navbar links={links}
        />
        <main className="mt-[6rem] w-full overflow-x-hidden
        bg-gray-200">
          <h1 className=" bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent 
          text-2xl text-center mt-4 sm:text-3xl md:text-5xl">Contact us</h1>

            <Content2
            {...contactContent2}
            />
        

<h3 className=" bg-gradient-to-b from-gray-800 to-gray-500 bg-clip-text text-transparent 
          text-2xl text-center mt-4 sm:text-3xl md:text-5xl">You can contact us directly at
          (647)951-2070 
          </h3>

            <ApplicationForm/>

            <Footer
            links={links}
            />

        </main>

</>
    )
}


export default Contact