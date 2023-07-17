import data from '@/json/data.json'
import SocialItem from './SocialItem'
import { SocialMedia } from '@/app/types/types'

export default function Hero() {
    const SIZE = 20;
    return (
        <div className="hero h-screen text-center flex items-center">
            <div className="container mx-auto">
                <div className="fade-in-text">
                    <div>
                        <h1 className="hero-title text-6xl sm:text-8xl tracking-wider leading-snug font-bold uppercase px-4">I'm Haruki Koh</h1>
                        <h3 className="hero-subtitle text-3xl sm:text-4xl leading-snug mt-6 text-content px-4">Full-stack Developer & CS Student @ UniMelb</h3>
                    </div>
                    
                    <div className="socials mt-12 text-content px-4">
                        <ul className="flex flex-row flex-wrap justify-center gap-8 text-xl">
                            {data.socials.map((value: string, i: number) => {
                                const social = value as SocialMedia;
                                return (
                                    <SocialItem 
                                        src={data.icons[social]}
                                        href={data['social-links'][social]}
                                        alt={social}
                                        text={social}
                                        width={SIZE}
                                        height={SIZE}
                                        isDownload={false}
                                        showText={true}
                                        key={i}
                                    />
                                )
                            })}
                        </ul>
                    </div>

                    
                    <a href="#projects" className='call-to-action inline-block mt-12'>
                        Check My Projects
                    </a>
                    
                    
                </div>

                
            </div>
        </div>
    )
}