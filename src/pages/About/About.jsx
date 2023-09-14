import "./About.css"

import { useState, useEffect } from "react";

import Flare from "../../components/Flare/Flare"
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
                    <h1 className="pink-text">About</h1>
                    <div className="quick-facts">
                        <div className="facts">
                            <img src={require(`../../assets/${about.resumeIcon}`)} alt='resume' />
                            <p><a className="blue-text" href={about.resume}>Resume</a></p>
                        </div>
                        <div className="facts">
                            <img src={require(`../../assets/${about.locationIcon}`)} alt='resume' />
                            <p className="green-text">{about.location}</p>
                        </div>
                        <div className="facts">
                            <img src={require(`../../assets/${about.codingIcon}`)} alt='resume' />
                            <p className="green-text">{about.coding}</p>
                        </div>
                    </div>
                    <div className="bio">
                        <p>{about.bio}</p>
                    </div>
                </div>
                <div className="profile-card">
                    <img className="headshot" src={require(`../../assets/${about.headshot}`)} alt={`${about.name} headshot`} />
                    <Flare side={'left'} />

                </div>
            </section>
        )
    };

    return about ? loaded() : <Loading />;
}

export default About;