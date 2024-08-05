import ApplicationForm from "@/components/applicationForm";
import Navbar from "@/components/navbar";
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
        <Navbar links={links}
        />
        <main className="mt-[6rem] w-full overflow-x-hidden
        bg-gray-200">

            <ApplicationForm/>

        </main>

</>
    )
}


export default Contact