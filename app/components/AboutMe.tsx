import data from '@/json/data.json'
import Technology from './Technology';
export default function AboutMe() {
    const SIZE = 339;
    return (
        <div className="about section" id="about">
            <div className="container mx-auto">
                <h1 className="title mb-8 text-center tracking-wide font-semibold uppercase">About Me</h1>
                <div className="about-me-content">
                    <div className='introduction px-4 md:px-0'>
                        <table className='table-auto text-xl'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>Haruki Koh</td>
                                </tr>
                                <tr>
                                    <th>University</th>
                                    <td>University of Melbourne</td>
                                </tr>
                                <tr>
                                    <th>Degree</th>
                                    <td>Bachelor of Science</td>
                                </tr>
                                <tr>
                                    <th>Major</th>
                                    <td>Computing and Software Systems</td>
                                </tr>
                                <tr>
                                    <th>Graduation</th>
                                    <td>June 2025</td>
                                </tr>
                                <tr>
                                    <th>My Skills</th>
                                    <td>
                                        <ul className="flex flex-row flex-wrap gap-y-2 gap-x-2 text-base">
                                            {data.languages.map((language: string, i: number) => (
                                                <Technology language={language} key={i} />
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <img className="framed mx-auto mb-8 lg:mb-0 order-first lg:order-last" src={`selfie_up.jpg`} alt="Haruki Koh" width={SIZE} height="auto"/>
                </div>
            </div>
        </div>
    )
}