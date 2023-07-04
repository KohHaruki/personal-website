export default function Navigation() {
    return (
        <div className="flex flex-row justify-between bg-primary text-white py-4 px-6 items-center">
            <h1 id="home"><a href="#home">harukikoh.com</a></h1>
            <ul className="nav flex flex-row justify-evenly gap-4">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}