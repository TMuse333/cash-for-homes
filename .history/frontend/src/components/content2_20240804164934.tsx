import { StaticImageData } from "next/image";
import React from "react";
import Image from 'next/image'

interface Content2Props {
    title:string,
    image:StaticImageData,
    alt:string,
    description:string
    bg:string
}



const Content2:React.FC<Content2Props> = (
    {title, image, alt, description}
) => {



    return (
        <section className="w-screen overflow-x-hidden">
            <p className="text-xl text-center text-black">
                {title}
            </p>
            <Image className='ml-auto mr-auto h-[60vw]
            w-[80vw] object-contain'
            src={image}
            alt={alt}/>
        </section>
    )
}