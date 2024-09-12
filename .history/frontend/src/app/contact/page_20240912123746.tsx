import ContactPage from "../pageComponents/contactPage"

export const metadata: Metadata = {
  title: "Contact Ontario Cash for Houses",
  description: "Get in touch with Ontario Cash for Houses for a fast, no-obligation cash offer on your home. We buy houses in any condition across Ontario, Canada.",
  keywords: "Contact Ontario Cash For Houses, sell house fast contact, cash offer contact Ontario, real estate contact Ontario",
  openGraph: {
    title: `Contact Ontario Cash for Houses | Get Your Cash Offer Fast`,
    description: `Reach out to Ontario Cash for Houses today for a fast and fair cash offer on your home. Whether you're facing foreclosure, inherited a property, or just want to sell quickly, we are here to help. Contact us now to get a no-obligation offer and sell your house in Ontario as-is, with no repairs or realtor fees.`,
    url: "https://www.ontariocashforhouses.com/contact", // Contact page URL
    images: [
      {
        url: "", // Open Graph image for the contact page
        width: 1200,
        height: 630,
        alt: "Contact Ontario Cash for Houses"
      }
    ],
    type: "website",
    locale: "en_US",
    siteName: 'Ontario Cash for Houses | Get in Touch for a Fast Cash Offer'
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



const Contact = () => {
  


    return (
        <>
     <ContactPage/>

</>
    )
}


export default Contact