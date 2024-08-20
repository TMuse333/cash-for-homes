import { StaticImageData } from 'next/image';
import cashHome2 from '../../public/cash-for-home2.jpg'
// import dunk from '../../public/best_dunk.mp
import canadianDollar from '../../public/canadian-dollars.jpeg'

import twenty from '../../public/twenty-bills.jpeg'



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
    buttonText:'Book a consultation',
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
    buttonText:'Book a consultation',
    alt:'A fantastic Home'

  };


  export const content2Data:ContentType= {
    image:canadianDollar,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sit, dolore at est quidem blanditiis dicta doloremque beatae similique voluptate?',
    ],
    mainTitle: 'Cash for Houses, Quickly',
    reverse: true,
    hasAnimation:true,
    buttonLink:'contact',
    buttonText:'Book a consultation',
    alt:'A lovely picture',
    video:false,
    poster:canadianDollar.src

  };


  export const openingText = {
    image:'/twenty-bills.jpeg',
    title:'Ready to Take the Next Step?',
    description:'.',
    buttonText:'Book a consulation',
    destination:'/contact'
  }

  export const dunk = '/videos/q3-lion-speech.mp4'

  export const intro = './videos/theresa-intro.mp4'

  export const process = './videos/theresa-process.mp4'

  

  export const jvParallaxContent:ParallaxContentType = {
        src:dunk,
        isVideo:true,
        description:lorem30,
        muted:false,
        thumbnail:'/horizontal-home.jpg',
        heading:'Main title here',
        subHeading:'Subtitle here',
        alt:'Aria label nation'
  }

  export const processParallax:ParallaxContentType = {
    src:process,
    isVideo:true,
    description:lorem30,
    muted:false,
    thumbnail:'/theresa-sitting.webp',
    heading:'How it works',
    subHeading:'',
    alt:'Aria label nation',


  }

  export const processCarouselData = {
    images: [
      {
        src:'/twenty-bills.jpeg',
        alt:'alt nation',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime'
      },
      {
        src:'/canadian-dollars.jpeg',
        alt:'alt nation',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime'
      },
      {
        src:'/dark-gray-home.jpg',
        alt:'alt nation',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime'
      },
      {
        src:'/old-brick-home.jpg',
        alt:'alt nation',
        description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime'
      },

    ],
    title:'Quick and easy',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus quo rerum corrupti exercitationem et ut libero dicta, natus neque nisi, aperiam cupiditate inventore. Labore maxime'

  }


 export const aboutContent1:Content2Type = {
    image:canadianDollar,
    title:'About us',
    alt:'About us picture',
    description:lorem30,
    bg:'bg-gradient-to-tr from-blue-800 via-blue-400 to-blue-300'
    
  }

  export const contactContent2:Content2Type = {
    image:canadianDollar,
    title:'Contact us',
    alt:'About us picture',
    description:lorem30,
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
        alt: 'alt',
        description: 'Our extensive experience in purchasing properties allows us to save significantly on closing and contractor fees. These savings enable us to present you with a more competitive offer, ensuring you receive the maximum value for your home.'
      },
      {
        src: canadianDollar,
        title: 'Avoid Making Repairs',
        alt: 'alt',
        description: 'We purchase homes in any condition, offering you the convenience of selling without the need for costly and time-consuming repairs. By paying in cash, we streamline the process, so you can sell your house as-is, hassle-free.'
      },
      {
        src: canadianDollar,
        title: 'No Fees',
        alt: 'alt',
        description: 'Our service is entirely transparent with no hidden fees or charges. We are committed to a straightforward transaction, where our only goal is to purchase your home with no strings attached.'
      },
      {
        src: canadianDollar,
        title: 'No Commissions',
        alt: 'alt',
        description: 'By selling directly to us, you avoid the hefty commissions that real estate agents typically charge. We act as your direct buyer, eliminating the middleman and ensuring you retain more of your home’s value.'
      },
      {
        src: canadianDollar,
        title: 'Close Fast',
        alt: 'alt',
        description: 'Our ability to pay in cash allows us to close deals at a pace that suits your needs. Whether you wish to close in as little as a week or need more time to make arrangements, we accommodate your schedule, providing flexibility and peace of mind.'
      },
      {
        src: canadianDollar,
        title: 'We Pay Cash',
        alt: 'alt',
        description: 'Paying in cash gives us the unique advantage of bypassing the often cumbersome processes that banks impose on traditional buyers. This means fewer delays, more certainty, and a smoother transaction for you, the seller.'
      },
    ]
  }
  

  export const applicationQuestions = [
    {
        question: 'Seller name',
        placeholder: 'Enter applicant name here',
        required: true,
    },

    {
        question: "Seller email",
        placeholder: 'Enter applicant email here',
        isEmail: true,
        required: true,
    },
    {
        question: 'Seller telephone number',
        placeholder: 'Enter applicant telephone number here',
        isPhoneNumber: true,
        required: true,
    },
    {
      question:'Property address',
      placeholder:'Property address',
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
"Sell your house fast in Ontario regardless of condition, age, size or situation.\n" +
"We buy houses by providing home sellers with a cash offer to purchase. If you are happy with the offer, we move forward and close the transaction when it’s most convenient for you.\n" +
"Are you looking for a way out of a situation that involves a house you own in Ontario? You’ve found the right place! I’m confident we can help you.\n" +
"We are a professional house buying company that buys houses fast in Ontario. We pay cash for homes, which makes the entire process simple and quick.\n" +
"Our guaranteed all-cash offer is the reason so many of our customers choose us.";
