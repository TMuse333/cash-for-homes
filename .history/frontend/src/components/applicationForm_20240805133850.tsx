import React from "react";
import { applicationQuestions } from "@/data/data";
import InputForm from "./inputForm";


const ApplicationForm = () => {




    return (
        <section className="w-screen flex flex-col ml-auto
        mr-auto md:flex-row bg-gray-200">
            <section className="md:w-[50vw] bg-blue-400">
                <h1 className="text-2xl text-center
                mt-4 mb-4">Lets get your home sold</h1>
                <ul className="m">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, iure.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quibusdam.</li>
                    <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, rem!</li>
                </ul>
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