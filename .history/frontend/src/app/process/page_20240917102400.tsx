
import dynamic from "next/dynamic"

import { Metadata } from "next"

const ProcessPage = dynamic(()=>import('../pageComponents/processPage.tsx'),{
  ssr:false,
  const AboutPage = dynamic(() => import('../pageComponents/aboutPage'), {
    ssr: false, // Optional: Disable Server-Side Rendering for this component if needed
    loading: () => <p>Loading...</p>, // Optional: Provide a fallback component while loading
  });
})

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

 

    return (
            <>
          
         
              <ProcessPage/>
            
            
            </>
    )
}

export default Process