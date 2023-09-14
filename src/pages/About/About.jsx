import "./About.css"
import { useState, useEffect } from "react";
import Flare from "../../components/Flare/Flare";
import Loading from "../Loading/Loading";

function About({ setPage }) {
    const [about, setAbout] = useState(null);

    async function getAboutData() {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => {
        setPage("about")
        getAboutData()
    }, []);


    function loaded() {
        return (
            <section className="About">

                <div className="info">
                    <div className="title">
                        <h1 className="pink-text">About</h1>
                    </div>
                    <div className="quick-facts">
                        <div className="fact">
                            <img src={require(`../../assets/${about.resumeIcon}`)} />
                            <p><a className="blue-text" href={about.resume} target="_blank">Resume</a></p>
                        </div>
                        <div className="fact">
                            <img src={require(`../../assets/${about.locationIcon}`)} />
                            <p className="green-text">{about.location}</p>
                        </div>
                        <div className="fact">
                            <img src={require(`../../assets/${about.codingIcon}`)} />
                            <p className="green-text">{about.education}</p>
                        </div>
                    </div>
                    <div className="bio">
                        <p><span className="bold">{about.name}</span> {about.bio}</p>
                    </div>
                </div >
                <div className="headshot-card">
                    <img className="headshot" src={require(`../../assets/${about.headshot}`)} alt={`${about.name} headshot`} />
                    <Flare side={'left'} />
                </div>
            </section >
        )
    };

    return about ? loaded() : <Loading />;
}

export default About;