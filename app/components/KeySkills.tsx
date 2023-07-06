import data from '@/json/data.json'
import IconItem from './Technology';

export default function KeySkills() {
    const SIZE = 40;
    return (
        <div className="keyskills mt-24">
                <div className="flex flex-row flex-wrap gap-x-8 gap-y-4">
                    {data.languages.map((language: string, i: number) => {
                        return (
                            <IconItem src={data.icons[language]} language={language} width={SIZE} key={i}/>
                        )
                    })}
                </div>
        </div>
    )
}