export interface SkillItemInterface {
    src: string,
    language: string,
    width: number,
}

export default function SkillItem(props: SkillItemInterface) {
    return (
        <div className="language my-auto">
            <div className="flex flex-row gap-2 justify-center items-center">
                <img src={`icons/${props.src}`} alt={props.language} width={props.width} height="auto"/>
                <p>{props.language}</p>
            </div>
        </div>
    )
}