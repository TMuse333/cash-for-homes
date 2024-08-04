"use client"
import Navbar from "@/components/navbar"
import React from "react"



const Process = () => {

    const links = [
        {
            name:'Home',
            destination:'/'
        },
       
    ]



    return (
            <>
            <Navbar
            links={links}
            />
            <main className="w-screen mt-[6rem] bg-gray-200">
                <Slid
            </main>
            
            
            </>
    )
}