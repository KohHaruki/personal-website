import Technology from "./Technology"
import SocialItem from "./SocialItem";
import data from '@/json/data.json'
import Dates from "./Dates";
import BulletPoints from "./BulletPoints";

export interface ProjectItemInterface {
    title: string,
    host?: string,
    award?: string,
    startMonth: number,
    startYear: number,
    endMonth?: number,
    endYear?: number,
    rank: number,
    isCurrent: boolean,
    isCrowned: boolean,
    bulletPoints?: Array<string>,
    technologies: Array<string>,
    links: {GitHub: string | null,
            DevPost: string | null,
            Demo: string | null
        }
}

export default function ProjectItem(props: ProjectItemInterface) {
    const SIZE = 20;

    const award_text_color = (1 <= props.rank && props.rank <= 3) ? `text-rank-${props.rank}` : '';

    return (
        <div className="mx-4 sm:mx-0 relative bg-light rounded-3xl shadow-md p-6 max-w-5xl text-content">
            <h2 className="subtitle text-title">{props.title + (props.host ? " @ " + props.host : "")}</h2>

            <div className="flex justify-between mb-2">
                <div className="socials">
                    <ul className="flex flex-row gap-4">
                        {
                            props.links.GitHub ? 
                                <SocialItem 
                                    src={data.icons["GitHub"]} 
                                    href={props.links.GitHub} 
                                    alt="GitHub link"
                                    text="GitHub"
                                    width={SIZE}
                                    height={SIZE}
                                    isDownload={false}
                                    showText={true}
                                /> : ""
                        }
                        {
                            props.links.DevPost ? 
                                <SocialItem 
                                    src={data.icons["DevPost"]} 
                                    href={props.links.DevPost} 
                                    alt="Devpost link"
                                    text="DevPost"
                                    width={SIZE}
                                    height={SIZE}
                                    isDownload={false}
                                    showText={true}
                                /> : ""
                        }
                        {
                            props.links.Demo ? 
                                <SocialItem 
                                    src={data.icons["Demo"]} 
                                    href={props.links.Demo} 
                                    alt="Demo link"
                                    text="Demo"
                                    width={SIZE}
                                    height={SIZE}
                                    isDownload={false}
                                    showText={true}
                                /> : ""
                        }
                    </ul>
                </div>

                <div className="date">
                    <Dates startMonth={props.startMonth} startYear={props.startYear} 
                        endMonth={props.endMonth} endYear={props.endYear} isCurrent={props.isCurrent}/>
                </div>
            </div>

            <p className={`mb-1 font-semibold ${award_text_color}`}>
                {props?.award}
            </p>
            
            <BulletPoints bulletPoints={props.bulletPoints}/>

            <p>Tech: </p>
            <div className="flex flex-row flex-wrap gap-2">
                {props.technologies.map((language: string, i: number) => {
                    return (
                        <Technology language={language} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}