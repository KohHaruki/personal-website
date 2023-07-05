import emailLogo from '@/public/email_icon.svg'
import LinkedInLogo from '@/public/linkedin_icon.svg'
import GitHubLogo from '@/public/github_icon.png'
import resumeLogo from '@/public/resume_icon.png'

import Image from 'next/image'
import KeySkills from './KeySkills'

export default function Hero() {
    const SIZE = 20;
    return (
        <div className="hero h-screen">
            <div className="container mx-auto pt-16">
                {/* texts in hero */}
                <div className="fade-in-text my-auto">
                    <div className="intro">
                        <h2 className="text-6xl">Hi I'm</h2>
                        <h1 className="text-9xl tracking-tight font-bold ml-[-4px] uppercase">Haruki Koh</h1>
                        <h3 className="text-3xl ml-[2px] mt-2">Full-stack Developer & CS Student @ UniMelb</h3>
                    </div>

                    <div className="socials mt-12">
                        <ul className="flex flex-row gap-2">
                            <li className="social-item">
                                <a href="mailto:harukikoh@gmail.com?subject=Hello From Your Website!" target='_blank'>
                                    <Image src={emailLogo} alt={"email"} width={SIZE} height={SIZE}/>
                                    <p>Email</p>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://www.linkedin.com/in/haruki-koh/" target="_blank">
                                    <Image src={LinkedInLogo} alt={"LinkedIn"} width={SIZE} height={SIZE}/>
                                    <p>LinkedIn</p>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="https://github.com/KohHaruki" target='_blank'>
                                    <Image src={GitHubLogo} alt={"GitHub"} width={SIZE} height={SIZE}/>
                                    <p>GitHub</p>
                                </a>
                            </li>
                            <li className="social-item">
                                <a href="" target='_blank'>
                                    <Image src={resumeLogo} alt={"Resume"} width={SIZE} height={SIZE}/>
                                    <p>Resume</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <div className="headshot border-slate-800 border-4"></div> */}

                <KeySkills></KeySkills>
            </div>
        </div>
    )
}