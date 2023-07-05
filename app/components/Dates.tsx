export interface DatesInterface {
    startMonth: number,
    startYear: number,
    endMonth?: number,
    endYear?: number,
    isCurrent: boolean
}

const MONTHS = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export default function Dates(props: DatesInterface) {
    let dates = `${MONTHS[props.startMonth]} ${props.startYear}`;
    
    if (props.isCurrent) {
        dates += ` - Present`;
    } else if (props.endMonth && props.endYear && props.endMonth !== props.startMonth && props.endYear !== props.startYear) {
        dates += ` - ${MONTHS[props.endMonth]} ${props.endYear}`;
    }

    return (
        <div className="dates">
            <p>{dates}</p>
        </div>
    )
}