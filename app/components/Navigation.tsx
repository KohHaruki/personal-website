"use client"
import { useState } from "react";
import Image from "next/image";
export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const SIZE = 30;

    const src = `/icons/${isMenuOpen ? 'cross.svg' :'hamburger-menu.svg'}`

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    }

    return (
        <div className="bg-light text-black py-6 px-6 tracking-wider font-semibold 
            fixed top-0 shadow-md z-10 w-full"
        >
            <div className="container mx-auto flex flex-row justify-between items-center">
                <h1 className="link"><a href="#">HARUKIKOH.COM</a></h1>
                <ul className="nav md:flex md:flex-row md:justify-evenly gap-16 hidden md:visible">
                    <li className="link"><a href="#about">ABOUT</a></li>
                    <li className="link"><a href="#projects">PROJECTS</a></li>
                    <li className="link"><a href="#experience">EXPERIENCE</a></li>
                    <li className="link"><a href="#contact">CONTACT</a></li>
                </ul>
                <div className="hamburger-menu md:hidden">
                    <Image src={src} alt="hamburger menu" width={SIZE} height={SIZE} onClick={handleMenuToggle}/>
                    <ul className={`nav absolute left-0 top-[78px] ${isMenuOpen ? "visible" : "hidden"}`}>
                        <li className="link" onClick={handleMenuToggle}><a href="#about">ABOUT</a></li>
                        <li className="link" onClick={handleMenuToggle}><a href="#projects">PROJECTS</a></li>
                        <li className="link" onClick={handleMenuToggle}><a href="#experience">EXPERIENCE</a></li>
                        <li className="link" onClick={handleMenuToggle}><a href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}