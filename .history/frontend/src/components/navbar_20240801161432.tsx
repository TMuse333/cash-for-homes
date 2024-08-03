"use client"

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "@/context/context";

// import logo1 from '../../media/logo1.svg';

interface NavbarProps {
    links: {
        name: string,
        destination: string,
        hasScroll: boolean
    }[]
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
    const [subMenuClicked, setSubMenuClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    function handleSubmenuClick() {
        setSubMenuClicked(!subMenuClicked);
    }

    function handleScroll(destination: string) {
        const element = document.getElementById(destination);

        if (element) {
            const offset = -100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });

            setSubMenuClicked(false);
        } else {
            console.warn(`Element with ID '${destination}' not found.`);
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1000) {
                setSubMenuClicked(false);
                console.log('large screen');
            }

            setIsMobile(window.innerWidth <= 1000);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`fixed top-0 z-[200] w-screen left-0 h-[100px] flex 
        justify-between items-center transition-colors duration-1000`} 
        style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            <div className="relative h-full flex justify-between items-center w-screen lg:w-[90vw] max-w-[1500px] lg:justify-between lg:items-stretch ml-auto mr-auto">
                <div className="absolute top-[30%] flex -translate-x-[1rem]
                sm:translate-x-[0rem] overflow-x-auto justify-center items-center">
                    <Link to='/'>
                        <img src={logo1} className='w-[258px] pl-3 h-full md:w-[300px] object-cover pl-6 object-contain ml-auto mr-auto' />
                    </Link>
                </div>
                <div
                    className={`fixed right-[-8%] sm:right-[0%] top-[45px] flex flex-col justify-center items-center lg:relative lg:top-auto lg:right-auto`}
                    onClick={handleSubmenuClick}
                >
                    <div className="lg:hidden w-[140px] lg:w-auto flex flex-col justify-center items-center">
                        <div className={`h-[3px] w-[20px] mb-1`} />
                        <div className={`h-[3px] w-[20px] mb-1`} />
                        <div className={`h-[3px] w-[20px] mb-1`} />
                    </div>
                </div>
                <ul
                    className={`text-left 
                    fixed right-[5%] top-[70px] overflow-hidden 
                    transition-[height] duration-[250ms] transition colors duration-[1500ms]
                    flex flex-col items-center justify-center rounded-lg w-[140px]
                    lg:w-auto lg:relative lg:overflow-auto lg:top-auto lg:right-auto 
                    lg:flex-row lg:bg-transparent ${subMenuClicked && isMobile ? 'h-[200px] p-0' : 'h-[0px] p-0 lg:h-auto'}`}
                >
                    {links.map((link, index) => (
                        <React.Fragment key={index}>
                            {link.hasScroll ? (
                                <li
                                    className={`text-md lg:text-lg mb-2 pl-2 pr-2 lg:mb-0 hover:text-blue-400 cursor-pointer`}
                                    onClick={() => handleScroll(link.destination)}
                                >
                                    {link.name}
                                </li>
                            ) : (
                                <Link to={link.destination}>
                                    <li className={"text-md lg:text-lg mb-2 pl-2 pr-2 lg:mb-0 hover:text-blue-400"}>
                                        {link.name}
                                    </li>
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
