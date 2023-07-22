import data from '@/json/data.json'
import ExperienceItem from './ExperienceItem'

export interface ExperienceItemInterface {
    id: number,
    jobTitle: string,
    company: string,
    location: string,
    startMonth: number,
    startYear: number,
    endMonth: number | null,
    endYear: number | null,
    isCurrent: boolean,
    bulletPoints: Array<string>
}

export default function Experience() {
    return (
        <div className="experience section" id="experience">
            <div className="container mx-auto">
                <h1 className="title mb-8 text-center tracking-wide font-semibold uppercase">Experience</h1>
                <div className="flex flex-col-reverse text-content">
                    {data.experience.map((exp: ExperienceItemInterface, i: number) => {
                        return (
                            <ExperienceItem 
                                id={exp.id}
                                jobTitle={exp.jobTitle}
                                company={exp.company}
                                location={exp.location}
                                startMonth={exp.startMonth}
                                startYear={exp.startYear}
                                endMonth={exp.endMonth}
                                endYear={exp.endYear}
                                isCurrent={exp.isCurrent}
                                bulletPoints={exp.bulletPoints}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}