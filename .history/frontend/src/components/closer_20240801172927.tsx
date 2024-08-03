"use client"

import React, { useState} from "react";
import Link from "next/link";
import {motion} from 'framer-motion'
import useIntersectionObserver from './intersectionObserver'

interface Props {
    image:string,
    title:string,
    description:string,
    buttonText:string,
    destination:string

}

const Closer: React.FC<Props> = ({image,title,description,
destination,buttonText}) => {

    const [inView, setInView] = useState(false)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.6,
      };
    
      // Use the custom hook to get a ref and observe intersection
      const componentRef = useIntersectionObserver(setInView, options);

      const variants = {
        initial:{
            opacity:0,
            x:-100
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                opacity:{
                    duration:0.5
                }
            }
        }
        
      }

      const textVariants = {
        initial:{
            y:-20,
            opacity:0
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                delay:0.5
            }
        }
      }

    return (
        <motion.section ref={componentRef}
        
        className={`w-screen text-white h-[600px]
        relative flex flex-col items-center justify-center
        bg-center
        `}
        variants={variants}
        initial='initial'
        animate={inView ? 'animate' : 'initial'}
        >
            <img src={image}
            className='absolute w-full h-full'
                style={{
                    filter:'brightness(0.6)'
                }}
            />

            <motion.div className="-mt-12 relative z-[4]"
              variants={textVariants}
              initial='initial'
              animate={inView ? 'animate' : 'initial'}>
            <motion.h1 
           
            className="pl-4    ">{title}
            </motion.h1>
          
            <p className="mt-4 text-left pl-4 pr-4
            max-w-[800px] sm:text-xl">{description}</p>

            <Link href={destination}
            passHref>
                <button className="mt-6 text-black
                bg-white ml-4 hover:bg-gradient-to-b from-gold-light to-gold-dark
                transition-all hover:text-white
                hover:scale-[1.05]">
                   {buttonText}
                </button>
            </Link>
            </motion.div>
        </motion.section>
    )
}

export default Closer