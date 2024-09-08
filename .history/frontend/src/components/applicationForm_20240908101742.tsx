import React from "react";
import { applicationQuestions } from "@/data/data";
import InputForm from "./inputForm";
import dog from '../../public/theresa-dog.webp'
import Image from "next/image";

const ApplicationForm = () => {




    return (
        <section className="w-screen flex flex-col ml-auto
        mr-auto md:flex-row  mb-8 
        bg-blue-200 justify-around max-w-[1200px]
           ">
            
            <section className="  ">
                <h3 className="text-2xl text-center
                mt-4 mb-4 text-black">Ontario Cash for Houses
                </h3>
               <Image
               src={dog}
               alt='logo'
               className='w-[40vw] mx-auto
               max-w-[445px]
               max-h-[550px]'
               width={1200}
               height={630}
               />
            </section>
            <section className="
            md:w-[50vw] max-h-[550px]
            overflow-y-scroll">
                <h3 className="mt-4 mb-[-2rem]">
                    Fill out the form below to get a fast, personalized cash offer and let us help you sell your house with ease and confidence.

                </h3>
                <InputForm
                questions={applicationQuestions}
                />


            </section>
        </section>
    )
}


export default ApplicationForm