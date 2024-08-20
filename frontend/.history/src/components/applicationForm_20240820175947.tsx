import React from "react";
import { applicationQuestions } from "@/data/data";
import InputForm from "./inputForm";
import dog from '../../public/theresa-dog.webp'


const ApplicationForm = () => {




    return (
        <section className="w-screen flex flex-col ml-auto
        mr-auto md:flex-row bg-gray-200 mb-8">
            <section className="md:w-[50vw] bg-blue-400">
                <h1 className="text-2xl text-center
                mt-4 mb-4">Ontario Cash for Houses</h1>
               <Image
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