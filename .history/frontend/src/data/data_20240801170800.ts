import { StaticImageData } from 'next/image';
import

export const heroImages = [
    {
        src:'/home.jpg',
        alt:'A picture of a home'
    },
    {
        src:'/cash.jpg',
        alt:'A lot of cash'
    }
]



export const content1Data: {
    image: StaticImageData;
    customText: string | null;
    description: string[];
    mainTitle: string;
    reverse: boolean;
    hasAnimation:boolean,
    background:string
  } = {
    image:restaurant,// Directly import the image as StaticImageData
    customText: null,
    description: [
      'A beautiful view of our restaurant from the outside, showcasing the ambiance and location.',
      'Enjoy dining in a cozy and welcoming environment.',
    ],
    mainTitle: 'Welcome to Our Restaurant',
    reverse: false,
    hasAnimation:true,
    background:'bg-black'
  };


// image:  StaticImageData;
//   customText: React.ReactNode;
//   description?: string[] | null  ;
//   reverse: boolean | null;
//   mainTitle?: string | null;
//   floatingImage?: boolean;
//   hasAnimation?: boolean;
//   buttonLink?:string,
//   buttonText?:string