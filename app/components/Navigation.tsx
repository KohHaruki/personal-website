export default function Navigation() {
    return (
        <div className="bg-light text-black py-6 px-6 tracking-wider font-semibold 
            sticky top-0 shadow-md z-10"
        >
            <div className="container mx-auto flex flex-row justify-between items-center">
                <h1 className="link"><a href="#">HARUKIKOH.COM</a></h1>
                <ul className="nav flex flex-row justify-evenly gap-16">
                    <li className="link"><a href="#about">ABOUT</a></li>
                    <li className="link"><a href="#projects">PROJECTS</a></li>
                    <li className="link"><a href="#experience">EXPERIENCE</a></li>
                    <li className="link"><a href="#contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}