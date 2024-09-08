import Link from "next/link";
import React from "react";


const TextFormat2 = () => {


    return (
        <section className="text-black pl-6
        pt-6">
            <h3>Are you a motivated seller?</h3>
            <ul>
                <li>Do you need to sell quickly?</li>
                <li>
                        Does your property need a lot of repairs
                </li>
                <li>
                    Do you want a fast cash offer
                </li>
            </ul>
            <p>
                If you answered YES to these three questions...
                <br/>
                Contact us today!
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