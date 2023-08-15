export default function Header(){
    return(
        <>
        <header id="header">
            <div>
                <h2>Harsimran Singh</h2>
                <p>Full Stack Web Developer</p>
            </div>
            <nav>
            <img id="ham" src="./ham.png" alt="ham"/>
                <ul className="menu" id="menu">
                    <li> <a href="/">Home</a></li>
                    <li> <a href="/work">Employment History</a></li>
                    <li> <a href="/education">Education</a></li>
                    <li> <a href="/projects">Projects</a></li>
                    <li> <a href="">Resume</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}