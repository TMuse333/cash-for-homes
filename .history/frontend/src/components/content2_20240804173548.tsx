import { StaticImageData } from "next/image";
import React from "react";
import Image from 'next/image'

interface Content2Props {
    title:string,
    image:StaticImageData,
    alt:string,
    description:string
    bg?:string
}



const Content2:React.FC<Content2Props> = (
    {title, image, alt, description}
) => {



    return (
        <section className={`w-screen overflow-x-hidden ${bg ? `${bg}` : ''}`}>
            <p className="text-4xl mt-4 mb-4 text-center text-black
            ">
                {title}
            </p>
            <Image className='ml-auto mr-auto h-[60vw]
            w-[80vw] object-cover max-h-[580px] max-w-[880px]'
            src={image}
            alt={alt}/>

            <p className="mt-4 mb-4 text-black w-[90vw] ml-auto mr-auto
            max-w-[1000px]">{description}</p>
        </section>
    )
}

export default Content2