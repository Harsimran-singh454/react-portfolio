export default function Home(){
    return(
        <>
            <main>
            <div className="homePage">
                <div className="intro white-bg">
                    <div className="aboutmecontainer">
                        <h3>I am a Web Developer</h3>
                        <p>I am a web development enthusiast. I excell in building web applications with tech stack - PHP-Laravel, MySQL, Javascript, JQuery, REST apis, HTML, CSS, Bootstrap.</p>
                    </div>
                    <div className="contactme">
                        <h3>Reach Out to me!</h3>
                        <p>simranubhi68@gmail.com</p>
                        <p>+1(647)300-1269</p>
                        <a href = "https://www.linkedin.com/in/harsimran-singh-13b380245/" target="_blank">linked in</a>
                        <a href="https://github.com/Harsimran-singh454?tab=repositories" target="_blank">Github</a>
                    </div>
                </div>
                <div className="skills white-bg">
                    <img src="html.png" alt="html logo" />
                    <img src="css.png" alt="css logo" />
                    <img src="js.png" alt="js logo" />
                    <img src="php.png" alt="php logo" />
                    <img src="laravel.png" alt="laravel logo" />
                    <img src="nodejs.png" alt="node.js logo" />
                    <img src="react.png" alt="react.js logo" />
                    <img src="mongo.png" alt="mongo DB logo" />
                    <img src="sql.png" alt="sql logo" />
                </div>
            </div>
            </main>
        </>
    );
}