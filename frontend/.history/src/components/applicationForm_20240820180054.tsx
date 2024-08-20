import React from "react";
import { applicationQuestions } from "@/data/data";
import InputForm from "./inputForm";
import dog from '../../public/theresa-dog.webp'
import Image from "next/image";

const ApplicationForm = () => {




    return (
        <section className="w-screen flex flex-col ml-auto
        mr-auto md:flex-row bg-gray-200 mb-8">
            <section className="md:w-[50vw] ">
                <h1 className="text-2xl text-center
                mt-4 mb-4 text-black">Ontario Cash for Houses</h1>
               <Image
               src={dog}
               alt='logo'
               className='w-[40vw] mx-auto'
               width={1200}
               height={630}
               />
            </section>
            <section className="overflow-y-scroll h-[400px]
            md:w-[50vw]">
                <InputForm
                questions={applicationQuestions}
                />


            </section>
        </section>
    )
}


export default ApplicationForm