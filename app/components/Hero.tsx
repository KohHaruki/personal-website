import Navigation from "./Navigation";
import Selfie from '../../public/self.jpg'
import Image from "next/image";
export default function Hero() {
    return (
        <div className="hero h-screen bg-slate-200">
            <div className="container content mx-auto pt-8">
                <div className="fade-in-text my-auto">
                    <div className="intro">
                        <h2 className="text-6xl">Hi I'm</h2>
                        <h1 className="text-9xl tracking-tight font-semibold ml-[-4px]">Haruki Koh</h1>
                        <h3 className="text-3xl ml-[2px]">Full-stack Developer & CS Student @ UniMelb</h3>
                    </div>

                    <div className="socials mt-8">
                        <ul className="flex flex-row gap-2">
                            <li>Email</li>
                            <li>LinkedIn</li>
                            <li>GitHub</li>
                            <li>Resume</li>
                        </ul>
                    </div>
                </div>

                <div className="headshot border border-slate-800 border-4"></div>
            </div>
        </div>
    )
}