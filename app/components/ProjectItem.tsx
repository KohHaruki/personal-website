import { hasSubscribers } from "diagnostics_channel";
import SkillItem from "./SkillItem"
import data from '@/json/data.json'
import Dates from "./Dates";

export interface ProjectItemInterface {
    title: string,
    host?: string,
    hasBeenAwarded?: string,
    startMonth: number,
    startYear: number,
    endMonth?: number,
    endYear?: number,
    isCurrent: boolean,
    isCrowned: boolean,
    bulletPoints?: Array<string>,
    technologies: Array<string>
}

export default function ProjectItem(props: ProjectItemInterface) {
    const SIZE = 30;
    return (
        <div className="relative bg-slate-300 rounded-md shadow-lg p-4 max-w-5xl">
            {
                props.isCrowned ? 
                    <img src={'/icons/crown_icon.svg'} alt="crown" width={30} height={30}
                        className="absolute top-0 left-0 -translate-x-2 -translate-y-2"/> 
                    : ""
            }

            <h2 className="text-3xl mb-2">{props.title + (props.host ? " @ " + props.host : "")}</h2>
            <div className="flex justify-between">
                <div className="rounded-lg mb-2 px-4 py-1 bg-black inline-block">
                    <p className="gold font-semibold">{props?.hasBeenAwarded}</p>
                </div>
                <div className="date">
                    <Dates startMonth={props.startMonth} startYear={props.startYear} 
                        endMonth={props.endMonth} endYear={props.endYear} isCurrent={props.isCurrent}/>
                </div>
            </div>
            

            {/* <h2 className="text-3xl mb-2">{props.hasBeenAwarded ? props.hasBeenAwarded : ""}</h2> */}

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
            <div className="flex flex-row flex-wrap justify-evenly gap-1">
                {props.technologies.map((language: string, i: number) => {
                    return (
                        <SkillItem src={data.icons[language]} language={language} width={SIZE}/>
                    )
                })}
            </div>
        </div>
    )
}