export interface BulletPointsInterface {
    bulletPoints: Array<string> | undefined
}
export default function BulletPoints(props: BulletPointsInterface) {
    return (
        <div className="mb-2">
            <ul className="list-disc pl-4">
                {props.bulletPoints?.map((bullet: string, i: number) => {
                    return (
                        <li className="leading-relaxed" key={i}>{bullet}</li>
                    )
                })}
            </ul>
        </div>
    )
}