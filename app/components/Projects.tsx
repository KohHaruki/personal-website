import ProjectItem from "./ProjectItem"
import { ProjectItemInterface } from "./ProjectItem"
import data from '@/json/data.json'


export default function Projects() {
    return (
        <div className="projects bg-neutral" id="projects">
            <div className="container mx-auto">
                <h1 className="text-6xl text-center font-semibold uppercase">Hackathons & Projects</h1>
                <div className="grid grid-cols-2 gap-8">
                    {data.projects.map((project: ProjectItemInterface, i: number) => {
                        return (
                            <ProjectItem
                                title={project.title}
                                host={project.host}
                                hasBeenAwarded={project.hasBeenAwarded}
                                startMonth={project.startMonth}
                                startYear={project.startYear}
                                endMonth={project.endMonth}
                                endYear={project.endYear}
                                isCurrent={project.isCurrent}
                                isCrowned={project.isCrowned}
                                bulletPoints={project.bulletPoints}
                                technologies={project.technologies}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}