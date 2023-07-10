import Dates from "./Dates";
import BulletPoints from "./BulletPoints";
import { ExperienceItemInterface } from "./Experience";

export default function ExperienceItem(props: ExperienceItemInterface) {
    return (
        <div className="experience-item mt-4">
            <h2 className="subtitle">{props.jobTitle}</h2>
            <h3 className="subsubtitle font-bold">{props.company}</h3>
            <Dates 
                startMonth={props.startMonth}
                startYear={props.startYear}
                endMonth={props.endMonth}
                endYear={props.endYear}
                isCurrent={props.isCurrent}
                displayEnd={true}
                displayDuration={true}
            />
            <BulletPoints bulletPoints={props.bulletPoints}/>
        </div>
    )
}