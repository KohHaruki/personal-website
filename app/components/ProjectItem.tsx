import Technology from "./Technology"
import data from '@/json/data.json'
import Dates from "./Dates";

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
    technologies: Array<string>
}

export default function ProjectItem(props: ProjectItemInterface) {
    const SIZE = 30;

    const award_text_color = (1 <= props.rank && props.rank <= 3) ? `text-rank-${props.rank}` : '';

    return (
        <div className="relative bg-light rounded-3xl shadow-md p-6 max-w-5xl text-content">
            <h2 className="text-3xl mb-2 text-title">{props.title + (props.host ? " @ " + props.host : "")}</h2>

            <div className="flex justify-between">
                
                <p className={`font-semibold ${award_text_color}`}>
                    {props?.award}
                </p>
                
                <div className="date">
                    <Dates startMonth={props.startMonth} startYear={props.startYear} 
                        endMonth={props.endMonth} endYear={props.endYear} isCurrent={props.isCurrent}/>
                </div>
            </div>

            <div className="mb-2">
                <ul className="list-disc pl-4">
                    {props.bulletPoints?.map((bullet: string, i: number) => {
                        return (
                            <li key={i}>{bullet}</li>
                        )
                    })}
                </ul>
            </div>
            <p>Tech: </p>
            <div className="flex flex-row flex-wrap gap-1">
                {props.technologies.map((language: string, i: number) => {
                    return (
                        <Technology src={data.icons[language]} language={language} width={SIZE} key={i}/>
                    )
                })}
            </div>
        </div>
    )
}