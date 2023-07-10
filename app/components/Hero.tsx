import data from '@/json/data.json'
import SocialItem from './SocialItem'

export default function Hero() {
    const SIZE = 20;
    return (
        <div className="hero h-screen text-center">
            <div className="container mx-auto h-full">
                
                <div className="fade-in-text translate-y-full">
                    <div>
                        <h1 className="text-8xl tracking-wider font-bold uppercase">I'm Haruki Koh</h1>
                        <h3 className="text-4xl mt-6 text-content">Full-stack Developer & CS Student @ UniMelb</h3>
                    </div>

                    <div className="socials mt-12 text-content">
                        <ul className="flex flex-row justify-center gap-8 text-xl">
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