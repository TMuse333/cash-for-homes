import { StaticImageData } from "next/image";
import React from "react";

interface Content2Props {
    title:string,
    image:StaticImageData,
    alt:string,
    description:string
}



const Content2:React.FC<Content2Props> = ()