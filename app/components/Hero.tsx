import data from '@/json/data.json'
import SocialItem from './SocialItem'

export default function Hero() {
    const SIZE = 20;
    return (
        <div className="hero h-screen text-center flex justify-center items-center">
            <div className="container mx-auto align-middle">
                <div className="fade-in-text">
                    <div>
                        <h1 className="text-6xl sm:text-8xl tracking-wider leading-snug font-bold uppercase px-4">I'm Haruki Koh</h1>
                        <h3 className="text-3xl sm:text-4xl leading-snug mt-6 text-content px-4">Full-stack Developer & CS Student @ UniMelb</h3>
                    </div>
                    
                    <div className="socials mt-12 text-content px-4">
                        <ul className="flex flex-row flex-wrap justify-center gap-8 text-xl">
                            {data.socials.map((social: string, i: number) => {
                                return (
                                    <SocialItem 
                                        src={data.icons[`${social}`]}
                                        href={data['social-links'][`${social}`]}
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

                </div>
            </div>
        </div>
    )
}