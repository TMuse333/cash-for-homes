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
    intro: "Loerm ipsum",
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
    title:'Closing Statement',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum animi, itaque veniam cumque laboriosam omnis iure accusantium! Veniam ea vero dolor aliquid, ipsa nisi nesciunt esse repellendus laboriosam explicabo maxime.',
    buttonText:'Book a consulation',
    destination:''
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


  export const circleInfographicData1:InfographicType = {
    images:[
      {
        src:twenty,
        title:'Title here',
        alt:'alt',
        description:lorem30
      },
      {
        src:canadianDollar,
        title:'Title here',
        alt:'alt',
        description:lorem30
      },
      {
        src:canadianDollar,
        title:'Title here',
        alt:'alt',
        description:lorem30
      },
      {
        src:canadianDollar,
        title:'Title here',
        alt:'alt',
        description:lorem30
      },
      {
        src:canadianDollar,
        title:'Title here',
        alt:'alt',
        description:lorem30
      },
      {
        src:canadianDollar,
        title:'Title here',
        alt:'alt',
        description:lorem30
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