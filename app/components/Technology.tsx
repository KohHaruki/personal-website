export interface TechnologyInterface {
    language: string
}

export default function Technology(props: TechnologyInterface) {
    return (
        <div className="tech my-auto px-4 py-2 bg-shade rounded-xl font-semibold text-content">
            {props.language}
        </div>
    )
}