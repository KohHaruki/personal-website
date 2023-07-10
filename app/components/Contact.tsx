import data from '@/json/data.json'
import SocialItem from './SocialItem'

export default function Contact() {
    const SIZE = 70;
    return (
        <div className="contact section bg-neutral" id="contact">
            <div className="container mx-auto">
                <h1 className="title mb-8 text-center tracking-wide font-semibold uppercase">Get In Touch</h1>
                <p className="text-center px-4 md:px-0">My inbox is always open! Feel free to shoot me an email or connect on LinkedIn.</p>
            </div>

            <div className="socials mt-12 text-content">
                <ul className="flex flex-row flex-wrap px-4 md:px-0 justify-center gap-4 md:gap-16 text-xl">
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
                                key={i}
                            />
                        )
                    })}
                </ul>
            </div>
            
        </div>
    )
}