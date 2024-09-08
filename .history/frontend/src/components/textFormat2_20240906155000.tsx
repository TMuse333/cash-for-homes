import Link from "next/link";
import React from "react";


const TextFormat2 = () => {


    return (
        <section className="text-black pl-6
        pt-6">
            <h3 className="text-2xl font-bold mb-4">Are you a motivated seller?</h3>
            <ul className="mb-2">
                <li className="mb-2">Do you need to sell quickly?</li>
                <li className="mb-2">
                        Does your property need a lot of repairs
                </li>
                <li className="mb-2">
                    Do you want a fast cash offer
                </li>
            </ul>
            <p >
                If you answered YES to these three questions...
                <br/><br/>
                <span className="font-bold text-xl">
                Contact us today!
                </span>
               
            </p>
            <Link
            href='contact'
            className="mt-4">
                <button className="bg-blue-400 hover:bg-white
                transition-colors text-white hover:text-blue-400
                p-3 rounded-xl mt-4">
                    Contact us
                </button>
            </Link>
        </section>
    )
}

export default TextFormat2