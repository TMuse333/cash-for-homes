import { StaticImageData } from 'next/image';

// import dunk from '../../public/best_dunk.mp
import canadianDollar from '../../public/canadian-dollars.jpeg'

import twenty from '../../public/twenty-bills.jpeg'

import group from '../../public/whole-group.webp'
import oldGray from '../../public/old-gray.webp'

import handshake from '../../public/handshake.webp'
import multiHome from '../../public/multi-home.webp'

interface ContentType {
    image: StaticImageData | string;
    customText: string | null;
    description: string[];
    mainTitle: string;
    reverse: boolean;
    hasAnimation:boolean,
    background?:string,
    buttonLink?:string,
    buttonText?:string,
    alt:string,
    video?:boolean,
    poster?:string

}

interface ParallaxContentType {
    src:string,
    alt:string,
    isVideo:boolean
    description?:string,
    muted?:boolean,
    thumbnail?:string,
    heading:string,
    subHeading:string
}

interface Content2Type {
  image:StaticImageData,
  alt:string,
  description:string,
  title:string,
  bg?:string
}




const lorem30 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime temporibus debitis autem molestiae? '

export const heroImages = [

  {
    src:'/handshake.webp',
    alt:'trading cash for a house'
  },
    {
        src:'/home.jpg',
        alt:'A picture of a home'
    },
    {
        src:'/canadian-dollars.jpeg',
        alt:'A lot of cash'
    }
]

export const accordionProps = {
    text: [
        { title: "No Realtor Fees", description: "You won't need a realtor when working with us; we handle everything directly." },
        { title: "Fast Transactions", description: "We offer quick cash deals with minimal paperwork, ensuring a fast transaction." },
        { title: "No Repairs Needed", description: "Sell your property as-is; no need for repairs or renovations before selling." },
        { title: "Flexible Closing Dates", description: "Choose a closing date that works best for you; we are flexible and accommodating." },
        { title: "Cash Offers", description: "Receive a fair cash offer for your home without any hidden fees or obligations." }
    ],
    hasIntro: true,
    intro: "We really are local and different",
    description: "Our service offers a hassle-free way to sell your house quickly for cash, with no realtor fees or repairs needed.",
    link: ''
};


export const processFAQ = {
  items: [
      { 
          title: "What is the first step in your process?", 
          description: "The first step is an initial phone call where we gather basic information about your property and situation. This helps us understand your needs and allows us to offer a tailored solution.",
          src:'',
          alt:'' 
      },
      { 
          title: "Do I need to make any repairs before selling?", 
          description: "No, you don’t need to make any repairs. We buy houses in any condition, so you can sell your property as-is without worrying about repairs or renovations." ,
          src:'',
          alt:''
      },
      { 
          title: "How do you evaluate my property?", 
          description: "We schedule a property visit at a time that’s convenient for you. Our team assesses your property’s current condition and considers various factors to ensure you receive a fair cash offer." ,
          src:'',
          alt:''
      },
      { 
          title: "How quickly can I get a cash offer?", 
          description: "After evaluating your property, we present you with a cash offer based on the evaluation and market conditions. This offer is competitive, fair, and comes without any obligations.",
          src:'',
          alt:'' 
      },
      { 
          title: "What happens after I accept the offer?", 
          description: "Once you accept the offer, we will forward it to your lawyer. You have the flexibility to choose the closing date that works best for you, making the process smooth and stress-free." ,
          src:'',
          alt:''
      },
      { 
          title: "When will I receive my money?", 
          description: "On the closing date you'll meet with your lawyer to finalize the sale and the money will be directly transferred to you from your lawyer.  ." ,
          src:'',
          alt:''
      },
      { 
          title: "Are there any hidden fees?", 
          description: "No, there are no hidden fees. You receive a straightforward cash offer without any realtor fees, commissions, or additional costs." ,
          src:'',
          alt:''
      },
      { 
          title: "Can I choose my closing date?", 
          description: "Yes, you have the flexibility to choose a closing date that fits your schedule. We accommodate your needs to make the process as convenient as possible for you." ,
          src:'',
          alt:''
      },
      { 
          title: "Why should I choose your service over others?", 
          description: "Our service offers a hassle-free, quick, and reliable way to sell your property. With no realtor fees, no need for repairs, and fast cash offers, we make the process simple and stress-free." ,
          src:'',
          alt:''
      }
  ],
  
  intro: "Frequently Asked Questions",
  description: "Selling your property can be daunting, but we aim to make it as simple and straightforward as possible. Below, you'll find answers to common questions about our process and how we can help you sell your property quickly and easily.",
  link: ''
};






export const content1Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for your property, quickly',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Call Us Now',
    alt:'A fantastic Home'

  };

  export const content3Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for Houses, Quickly',
    reverse: false,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Call Us Now',
    alt:'A fantastic Home'

  };


  export const content2Data:ContentType= {
    image:oldGray,// Directly import the image as StaticImageData
    customText: null,
    description: [
      `Unlock the secrets to a hassle-free property sale. Our proven process ensures that you get the best offer with minimal effort, allowing you to sell your house cash fast. Say goodbye to the traditional selling headaches and hello to a streamlined, straightforward experience.`,
    
      `Ready to take control of your property-selling journey? Visit our How It Works page to see how we turn a complex process into a quick and easy solution to sell house cash fast. Your dream sale is just a click away—learn more and get started today.`,
    ]
    ,
    mainTitle: 'Sell your house for cash, quickly',
    reverse: true,
    hasAnimation:true,
    buttonLink:'process',
    buttonText:`Learn how it's done`,
    alt:'A lovely picture',
    video:false,
    poster:canadianDollar.src

  };


  export const openingText = {
    image:'/twenty-bills.jpeg',
    title:'Ready to Take the Next Step?',
    description:`
    You deserve a smooth, stress-free selling experience, and we’re here to ensure it. With our expertise in buying houses fast for cash, a transparent process, and a commitment to providing the best cash offers, selling your property has never been easier. Whether your home needs repairs or you simply need to sell quickly, we make it simple and hassle-free. Don’t wait—unlock the potential of your property today and discover how quickly and easily you can sell your property for cash. Get started now with a fast, no-obligation cash offer!`,
    buttonText:'Book a consulation',
    destination:'/contact'
  }

  export const dunk = '/videos/q3-lion-speech.mp4'

  export const intro = './videos/theresa-intro2.mp4'
  
  export const intro2 = './videos/theresa-intro2.mov'

  export const process = './videos/theresa-process2.mp4'

  export const dolceVita = './videos/dolce-vita-homepage.mov'

  

  export const jvParallaxContent:ParallaxContentType = {
        src:dunk,
        isVideo:true,
        // description:lorem30,
        muted:false,
        thumbnail:'/horizontal-home.jpg',
        heading:'JV Partnership',
        subHeading:'',
        alt:'Aria label nation'
  }

  export const processParallax:ParallaxContentType = {
    src:process,
    isVideo:true,
    description:'Discover how easy it is to sell your property with our streamlined process. We’ve simplified every step to ensure a hassle-free experience, guiding you from the initial call to the final closing. Let’s explore the five key steps to make selling your property quick and straightforward!',
    muted:false,
    thumbnail:'/theresa-sitting.webp',
    heading:'How it works',
    subHeading:'',
    alt: "Theresa seated, explaining the process of selling houses for cash in Ontario. Learn how to sell your house fast for cash in Ontario, Canada, with Ontario Cash for Houses.",


  }

  export const processCarouselData = {
    images: [
      {
        src: '/preview.webp',
        alt: 'Initial Phone Call with Ontario Cash for Houses',
        description: 'The first step in our process is a simple phone call where we gather basic information about your property and understand your situation. This allows us to get a clear picture of what’s going on so that we can provide the best possible solution tailored to your needs.'
      },
      {
        src: '/evaluation.webp',
        alt: 'Property Evaluation for Fast Cash Offers',
        description: 'Our team will schedule a property visit at a time that’s convenient for you. The condition of your property is not an issue—we assess it as is. Our experts will carefully evaluate the property, considering various factors to ensure you receive a fair and accurate cash offer.'
      },
      {
        src: '/dark-gray-home.jpg',
        alt: 'Receiving Your Cash Offer from Ontario Cash for Houses',
        description: 'Based on our evaluation and current market conditions, we will present you with a competitive cash offer for your property. We’re here to answer any questions you may have, and once you’re satisfied, the offer will be sent to your lawyer for review.'
      },
      {
        src: '/old-brick-home.jpg',
        alt: 'Accepting a Cash Offer to Sell Your House Fast in Ontario',
        description: 'Once you’ve reviewed and accepted the cash offer, we’ll handle all the details. You have the flexibility to choose the closing date that works best for you, ensuring a smooth and stress-free transaction process.'
      },
      {
        src: '/twenty-bills.jpeg',
        alt: 'Closing the Sale and Getting Paid for Your House',
        description: 'At closing, we’ll send all necessary documents to your lawyer. You’ll meet with your lawyer to finalize the sale, and the money will be directly given to you by your lawyer. It’s that simple—you get your cash quickly and securely.'
      }
    ],
    title: 'Quick and Easy Process',
    description: 'Our streamlined process is designed to make selling your house as quick and easy as possible. From the initial phone call to closing, we handle everything so you can focus on what matters most to you. Here’s how it works:'
  };
  
  


 export const aboutContent1:Content2Type = {
    image:group,
    title:'About us',
    alt:'About us picture',
    description:'Ontario Cash For Houses is a real estate solutions company that buys houses in Windsor, ON; London, ON; and Kitchener.',
    bg:'bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-300'
    
  }

  export const contactContent2:Content2Type = {
    image:handshake,
    title:'',
    alt:'About us picture',
    description:`Embarking on the journey to sell your property is a significant step, and we’re here to guide you toward greatness. Our dedicated team is committed to ensuring you receive the best possible cash offer for your property, helping you achieve your goals swiftly and effortlessly. With our streamlined process and personalized support, you can trust that you're making the right choice for your future. Contact us today to discover how we can turn your property into a remarkable opportunity and unlock the door to a brighter tomorrow.`,
    bg:''
  }

  interface InfographicType {
    title?:string,
    description?:string,
    images:{
      src:StaticImageData,
      alt:string,
      description:string,
      title:string
    }[]
  }


  export const circleInfographicData1: InfographicType = {
    images: [
      {
        src: twenty,
        title: 'We Pay More',
        alt: 'Ontario Cash for Houses offers higher cash offers by saving on closing and contractor fees',
        description: 'Our years of experience in buying houses across Ontario help us save on closing costs and contractor fees, enabling us to offer you a more competitive cash offer. This means you can get the maximum value for your house, without the usual real estate expenses.'
      },
      {
        src: canadianDollar,
        title: 'Avoid Making Repairs',
        alt: 'Sell your house fast for cash in Ontario without making repairs',
        description: 'Ontario Cash for Houses buys houses in any condition, meaning you don’t have to worry about costly repairs or renovations. Whether your home needs work or is ready to sell, we provide an easy, cash-based solution to sell as-is.'
      },
      {
        src: canadianDollar,
        title: 'No Fees',
        alt: 'No hidden fees when selling to Ontario Cash for Houses',
        description: 'Our process is fully transparent, with no hidden fees or surprise costs. By selling directly to Ontario Cash for Houses, you can rest assured that there are no extra charges, commissions, or fees to worry about, making for a straightforward transaction.'
      },
      {
        src: canadianDollar,
        title: 'No Commissions',
        alt: 'Avoid hefty commissions by selling directly to Ontario Cash for Houses',
        description: 'When you sell your house to Ontario Cash for Houses, you avoid the hefty commissions that real estate agents typically charge. This saves you money and time, offering a quicker and more profitable way to sell your property.'
      },
      {
        src: canadianDollar,
        title: 'Close Fast',
        alt: 'Fast closing options available when selling your house for cash in Ontario',
        description: 'Selling to Ontario Cash for Houses means you can close quickly—whether you need to close in a week or have a flexible timeline. We can work with your schedule and get the sale completed fast, ensuring a smooth and efficient transaction.'
      },
      {
        src: canadianDollar,
        title: 'We Pay Cash',
        alt: 'Selling to Ontario Cash for Houses means receiving cash offers without bank delays',
        description: 'By offering cash for your property, Ontario Cash for Houses eliminates the long wait times associated with traditional buyers and bank financing. This means a faster, smoother transaction and a reliable cash offer that avoids any financing delays.'
      },
    ]
  }
  
  
  

  export const applicationQuestions = [
    {    
        title:'name',
        question: 'Seller name',
        placeholder: 'Enter applicant name here',
        required: true,
    },

    {
        title:'email',
        question: "Seller email",
        placeholder: 'Enter applicant email here',
        isEmail: true,
        required: true,
    },
    {
      title:'phone',
        question: 'Seller telephone number',
        placeholder: 'Enter applicant telephone number here',
        isPhoneNumber: true,
        required: true,
    },
    {
      title:'address',
      question:'Property address',
      placeholder:'Property address',
      required:true
    },
    {
      title:'city',
      question:'City',
      placeholder:'Enter city here',
      required:true
    },
    {
      title:'province',
      question:'Province',
      placeholder:'Enter Province here',
      required:true
    },
    {
      title:'reason',
      question:'Reason for selling',
      placeholder:'Why are you selling?',
      required:true
    },
    {
      title:'time',
      question:'How soon do you need to sell?',
      placeholder:'Enter amount of time here',
      required:true
    }

    // {
    //     question: 'Seller present address',
    //     placeholder: 'Enter applicant present address here',
    //     required: true,
    // },
    // {
    //     question: 'Applicant duration at present address',
    //     placeholder: 'Enter duration here',
    //     required: true,
    // }
];


  

//   images: {
//     src: string,
//     alt: string,
//     description: string
// }[]
// title?: string,
// description?: string

  // src:string,
  //   alt:string,
  //   isVideo:boolean
  //   description?:string,
  //   muted?:boolean,
  //   thumbnail?:string,
  //   heading:string,
  //   subHeading:string

//   image:string,
//     title:string,
//     description:string,
//     buttonText:string,
//     destination:string


// image:  StaticImageData;
//   customText: React.ReactNode;
//   description?: string[] | null  ;
//   reverse: boolean | null;
//   mainTitle?: string | null;
//   floatingImage?: boolean;
//   hasAnimation?: boolean;
//   buttonLink?:string,
//   buttonText?:string

export const introDescription = 
`Sell your house fast in Ontario, Canada, no matter its condition or your unique situation. Whether you're facing foreclosure, dealing with an inherited property, or simply need to sell quickly for cash, Ontario Cash For Houses is here to help. We specialize in buying houses fast across Ontario, offering a fast, hassle-free solution for homeowners who need to sell their property quickly and efficiently. Our streamlined process ensures that you get a fair cash offer for your house with no delays, real estate agent fees, or commissions.

As Ontario's trusted cash home buyers, we take care of all the paperwork and details, making sure you can move forward with peace of mind. Our competitive, all-cash offer ensures that you get the best value for your home—whether it needs repairs, is in poor condition, or you just want to avoid the stress of a traditional home sale. Join the many satisfied homeowners across Ontario who have chosen us to sell their house fast for cash, and experience a quick, convenient, and stress-free sale that fits your schedule. Contact us today to get started and see how easy it is to sell your house fast in Ontario.`



export const aboutCloser = {
  image:'/twenty-bills.jpeg',
    title:'Ready to Take the Next Step?',
    description:`At Ontario Cash For Houses, we empower homeowners to confidently sell their properties, whether inherited, rental, urban, or rural. We offer competitive cash offers for your property, understanding that every house has a unique story. We’re compassionate, ethical, and experienced real estate problem-solvers, focused on making your home-selling process simple and fast.

    Whether facing foreclosure, repairs, probate, or other challenges, we aim to provide a hassle-free experience. No realtor fees, no closing costs, no repairs needed—we can close quickly. Call us today for a no-obligation cash offer: (647) 951-2070.`,
    destination:'/contact',
    buttonText:'Book a consulation',
} 




export const aboutContent3: ContentType = {
  image: multiHome, // Directly import the image as StaticImageData
  customText: null,
  description: [
    'We focus on helping sellers like you find solutions for your problem property, whether you’re going through a foreclosure, divorce, inherited property, nuisance property, back taxes, can’t sell your property, or just need to sell your house for ANY reason. We can help!\n\n',
    `We'll make you a full cash offer—and close fast, so there's no time to waste. Plus, we'll purchase your home AS-IS.`,
    `We'll buy houses even in rural towns and counties. Regardless of the condition of your home, age, size, or situation. Give us a call and let's talk about your property so we can learn more and make you a full cash offer.`,
  ],
  mainTitle: '',
  reverse: false,
  hasAnimation: true,
  // buttonLink: 'contact',
  // buttonText: 'Book a consultation',
  alt: 'Ontario Cash for Houses: A welcoming home representing our commitment to helping sellers resolve property issues quickly and easily, no matter the condition or situation.'
}


export const aboutContent4:ContentType = {
  image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'We’re a family-owned business that focuses on helping homeowners like you find solutions for your problem property, whether you’re going through a foreclosure, divorce, inherited property, nuisance property, back taxes, can’t sell your property, or just need to sell your house for ANY reason. We can help!',
      // 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: '',
    reverse: false,
    hasAnimation:true,
    // buttonLink:'contact',
    // buttonText:'Book a consultation',
    alt:'A fantastic Home'

}


// title, src, alt, description, aspects,
//     link, reverse, aspectHeader


    export const experienceCard1 = {
      title:'Sell your house for cash, quickly',
      description:`Looking to sell your house fast for cash in Ontario? At Ontario Cash For Houses, we offer a hassle-free solution for homeowners in any situation.
      
      Whether your property needs repairs, you’re facing financial challenges, or simply want to avoid the delays and fees of traditional real estate, we buy houses as-is for a fair cash offer. Our straightforward process eliminates agent fees, closing costs, and listing stress. Visit our How It Works page to learn more and get a no-obligation cash offer today!`,
      src:canadianDollar.src,
      alt:'Sell your house fast for cash in Ontario with a hassle-free and straightforward process, no repairs or agent fees required',
      aspects:[],
      aspectHeader:'',
     

    }

    export const experienceCard2 = {
      title: 'How Our Process Works: Sell Your House Fast and Easy',
      description: `At Ontario Cash For Houses, our process is designed to make selling your house for cash in Ontario fast and hassle-free. After receiving your fair all-cash offer, we manage everything from start to finish, including paperwork, closing details, and ensuring a smooth, stress-free experience. 
    
    Whether you need to sell your house quickly due to financial difficulties, relocation, or simply want to avoid the delays and costs associated with traditional real estate transactions, we make it simple. We buy houses in any condition—no repairs needed—and provide fair cash offers with no agent fees, commissions, or closing costs. Visit our How It Works page to discover how our streamlined process helps homeowners sell their house fast for cash in Ontario without the stress of conventional home selling.`,
      src: canadianDollar.src,
      alt: 'Learn how to sell your house fast for cash in Ontario with our easy process and no repairs or agent fees required',
      aspects: [
        'Fast Reply Times',
        'Hassle-Free Inspection',
        'No Hidden Fees or Commissions'
      ],
      aspectHeader: 'Why Choose Our Simple Process?',
      reverse: true,
      link: '/process',
    }

    export const blogCarousel = [
      {
        src:'/blogs/stressed-man-selling-cash-for-house.webp',
        alt:'This is how you can sell house fast for cash in ontario canada during a financial crisis',
        link:'/blog/how-to-sell-house-quickly-financial-crisis',
        title:'How to Sell Your House for cash fast in ontario During a Financial Crisis',
        date:'December 17th, 2024',
        description: 'Learn how to sell your house fast for cash in Ontario during financial difficulties'

      },
      {
        src: '/blogs/divorce/sell-house-divorce-ontario.webp',
        alt: 'selling your house for cash in ontario after a divorce',
        title: "How to Sell Your House for Cash After a Divorce in Ontario",
        description: "Divorce can be challenging—selling your house for cash offers a quick, stress-free solution. Learn how we can help you sell your home quickly and efficiently.",
        link: '/blog/how-to-sell-house-cash-divorce-ontario',
        date: "December 8th, 2024"
      },
      
      {
        src: "/blogs/blog1/sell-home-fast-cash-ontario-money.jpg",
        alt: "Selling your house as-is in Ontario",
        title: "Why Selling Your House As-Is Could Save You Time and Money",
        description: "Learn how selling your house as-is can save you both time and money. Discover the advantages of avoiding costly repairs and the benefits of a hassle-free, cash sale. Read more to find out why selling as-is might be your best option.",
        link: "/blog/why-selling-house-as-is-saves-time-money",
        date: "December 7th, 2024"
      }
      ,
        {
          src: '/handshake.webp',
          alt: 'Avoid mistakes when selling a house for cash in Ontario',
          title: 'How to Avoid Common Mistakes When Selling Your House for Cash in Ontario',
          description: 'Discover essential tips to avoid common mistakes when selling your house for cash in Ontario. Learn how to maximize your sale value, avoid hidden fees, and make informed decisions—read now!',
          link: '/blog/avoid-common-mistakes-selling-house-cash-ontario',
          date: 'December 5th, 2024'
        }
      ,
      {
        src: '/blogs/blog3/sell-house-cash-fast-ontario-inherited-home.webp',
        alt: 'A home with a SOLD sign to represent selling an inherited house for cash in Ontario',
        title: "How to Sell a Home for Cash Fast in Ontario That You’ve Inherited Without Stress",
        description: "Inherited a home in Ontario? Learn how to sell it for cash quickly without stress. Discover the step-by-step process and tips for a hassle-free transaction—read more now!",
        link: '/blog/how-to-sell-house-cash-fast-ontario-for-inherited-home',
        date: 'December 4th, 2024'
    },
    
      {
        link: '/blog/dont-need-to-renovate-when-sell-house-cash-fast-ontario',
        src: '/blogs/blog2/sell-house-cash-fast-ontario-renovation.webp',
        alt: 'House undergoing renovation, illustrating why renovations are unnecessary to sell house cash fast in Ontario',
        title: 'Why You Don’t Need to Renovate Before Selling Your Home',
        description: 'Discover why you can sell your house cash fast in Ontario Canada without renovations or repairs. Learn how to save time and money by selling as-is.',
        date: 'November 28th, 2024'
      },
      {
        src: '/twenty-bills.jpeg',
        alt: 'Twenty dollar bills to signify what happens when you sell house fast cash Ontario',
        title: "5 Signs It’s Time to Sell Your House Fast for Cash in Ontario",
        description: "Thinking about selling your house for cash in Ontario? Discover the top 5 signs it’s time for a fast cash sale and how it can save you time, money, and stress—read more now!",
        link: '/blog/signs-to-sell-house-fast-cash-ontario',
        date: 'November 25th, 2024'
      },
     
    ];
    
    
    



