import ProjectItem from "./ProjectItem"
import { ProjectItemInterface } from "./ProjectItem"
import data from '@/json/data.json'


export default function Projects() {
    return (
        <div className="projects section bg-neutral" id="projects">
            <div className="container mx-auto">
                <h1 className="title mb-8 text-center tracking-wide font-semibold uppercase">Hackathons & Projects</h1>
                <div className="grid grid-cols-2 gap-8">
                    {data.projects.map((project: ProjectItemInterface, i: number) => {
                        return (
                            <ProjectItem
                                title={project.title}
                                host={project.host}
                                award={project.award}
                                startMonth={project.startMonth}
                                startYear={project.startYear}
                                endMonth={project.endMonth}
                                endYear={project.endYear}
                                rank={project.rank}
                                isCurrent={project.isCurrent}
                                isCrowned={project.isCrowned}
                                bulletPoints={project.bulletPoints}
                                technologies={project.technologies}
                                links={project.links}
                                key={i}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}