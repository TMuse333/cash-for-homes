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
          name:'JV Partners',
          destination:'/jv-partners',
          hasScroll:false
        },
        {
          name:'About Us',
          destination:'/about'
        }
      ]


    return (
        <>
        <Navbar links={links}
        />
        <main className="mt-[6rem] w-full overflow-x-hidden
        bg-gray-200">

            <Content2
            {...contactContent2}
            />

            <ApplicationForm/>

            <Footer
            links={links}
            />

        </main>

</>
    )
}


export default Contact