"use client"
import Navbar from "@/components/navbar"
import SlideShowCarousel from "@/components/slideShowCarousel"
import React from "react"
import { processCarouselData, jvParallaxContent,
openingText,processParallax, dunk,
accordionProps,
processFAQ} from "@/data/data"
import { TextParallaxContentExample } from "@/components/parallaxText"
import Closer from "@/components/closer"
import Footer from "@/components/footer"
import Accordion from "@/components/accordion"
import Link from "next/link"
import { dolceVita } from "@/data/data"

export const metadata: Metadata = {
  title: "Our Process | Ontario Cash for Houses",
  description: "Learn about our simple, hassle-free process for selling your house fast for cash. We buy homes in any condition across Ontario with no fees or repairs needed.",
  keywords: "Ontario Cash For Houses process, sell house fast process, cash home buying steps Ontario, quick house sale process Ontario",
  openGraph: {
    title: `Our Process | How to Sell Your House Fast in Ontario`,
    description: `Discover how easy it is to sell your house fast for cash with Ontario Cash for Houses. Our simple process allows you to sell your home in as little as 7 days. No repairs, no realtor fees, and no stress. We handle everything from the initial offer to closing, so you can sell your house quickly and move on. Learn more about each step of our cash home buying process.`,
    url: "https://www.ontariocashforhouses.com/process", // Process page URL
    images: [
      {
        url: "", // Open Graph image for the process page
        width: 1200,
        height: 630,
        alt: "Our Process - Sell Your House Fast"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'Ontario Cash for Houses | Quick and Easy Home Selling Process'
  },
  icons: {
    icon: ["/favicon.ico?v=4"
   ],
  //  apple:[
  //   '/apple-touch-icon.png?v=4'
  //  ],
  //  shortcut:[
  //   '/apple-touch-icon.png'
  //  ] 
  },
  // manifest:'/site.webmanifest'
}





const Process = () => {

    const links = [
        {
            name:'Home',
            destination:'/',
            hasScroll:false
          },
       
       
        {
          name:'About us',
          destination:'/about',
          hasScroll:false
        },
        {
          name:'Contact Us',
          destination:'/contact'
        },
        // {
        //   name:'JV Partners',
        //   destination:'/jv-partners',
        //   hasScroll:false
        // },
      ]

    return (
            <>
          
            <main className="w-screen  bg-gray-200
   ">
                <Navbar
                links={links}
                relative={true}
                />
                
                <TextParallaxContentExample
                {...processParallax}
               
                />

                <p className="text-center text-gray-800 text-2xl sm:text-3xl md:text-4xl mb-4">Quick and simple</p>
                

                <SlideShowCarousel
                {...processCarouselData}/>


 

            <p className="rounded-md bg-gray-400
            w-[95%] mx-auto relative
            p-8 rounded-xl sm:text-xl mt-[rem] mb-[4rem]
            max-w-[1200px]">
            Don&apos;t wait any longer to get a cash offer for your property with our straightforward and hassle-free process. Contact us today to take the first step toward a quick and easy sale. Let’s work together to make your real estate journey smooth and successful.
            <br/>
            <Link href="/contact">

         
             <button className="mt-4 bg-blue-500 p-3 rounded-xl hover:scale-[1.05]
             hover:bg-white transition-all hover:text-blue-500">
                Let&apos;s get started
             </button>
             </Link>
            </p>

            <Accordion
            {...processFAQ}
            />

                

                <Footer
                links={links}
                />
                        
            </main>
            
            
            </>
    )
}

export default Process