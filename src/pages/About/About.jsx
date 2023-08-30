import "./About.css"
import { useState, useEffect } from "react";

function About({page, setPage}) {
    const [about, setAbout] = useState(null);

    async function getAboutData() {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        getAboutData()
        setPage("about")
    }, []);


    function loaded() {
        return (
            <section className="About">
                <div className="title">
                    <h1>About</h1>
                    <hr />
                </div>
                <section className="page">
                    <div className="profile-card">
                        <h3>Joe Gilberto</h3>
                        <img className="headshot" src={about.headshot} alt={`${about.name} headshot`} />
                        <div className="contact-div">
                            <div className="question">
                                <p>Email</p>
                                <p>GitHub</p>
                                <p>LinkedIn</p>
                            </div>
                            <div className="answer">
                                <p><a href={`mailto:${about.email}?subject="Hello, Joe!"`}>{about.email}</a></p>
                                <p><a href={about.github} target="_blank">github.com/joekgilberto</a></p>
                                <p><a href={about.linkedin} target="_blank">linkedin.com/in/joe-gilberto/</a></p>
                            </div>
                        </div>

                    </div>
                    <div className="info">
                    <div className="bio">
                        <p>{about.bio}</p>
                    </div>
                    <div className="resume">
                        <h2>Resume</h2>
                        <hr />
                        <p>Joe Gilberto's resume can be found <a href={about.resume} target="_blank">here</a>.</p>
                    </div>
                    </div>
                </section>
            </section>
        )
    };

    return about ? loaded() : <h1>Loading, please hold!</h1>;
}

export default About;