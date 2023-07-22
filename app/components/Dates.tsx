export interface DatesInterface {
    startMonth: number,
    startYear: number,
    endMonth?: number | null,
    endYear?: number | null,
    isCurrent: boolean,
    displayEnd?: boolean,
    displayDuration?: boolean
}

const MONTHS = [undefined, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const NUM_MONTHS = 12;

export default function Dates(props: DatesInterface) {
    let dates = `${MONTHS[props.startMonth]} ${props.startYear}`;
    let duration: number;
    
    if (props.isCurrent) {
        dates += ` - Present`;
    } else if (props.endMonth && props.endYear && (props.displayEnd || (props.endMonth !== props.startMonth && props.endYear !== props.startYear))) {
        dates += ` - ${MONTHS[props.endMonth!]} ${props.endYear}`;
    }

    if (props.displayDuration) {
        let endYear: number;
        let endMonth: number;

        if (props.endMonth && props.endYear) {
            endYear = props.endYear;
            endMonth = props.endMonth;
        } else {
            const currTime = new Date();
            endYear = currTime.getFullYear();
            endMonth = currTime.getMonth() + 1;
        }

        duration = endYear * NUM_MONTHS + endMonth - (props.startYear * NUM_MONTHS + props.startMonth) + 1;


        let duration_year = Math.floor(duration / NUM_MONTHS);
        let duration_remaining_month = duration % NUM_MONTHS;
        
        dates += ` (${duration_year !== 0 ? duration_year + ' yr ' : ''}${duration_remaining_month} mo)`
    }

    return (
        <div className="dates">
            <p>{dates}</p>
        </div>
    )
}