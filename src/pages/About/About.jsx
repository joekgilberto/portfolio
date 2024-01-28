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
                <h1 className="pink-text">About</h1>
                <div className="content">
                    <div className="info">
                        <div className="bio">
                            <div className="quick-facts">
                                <div className="fact-one">
                                    <img src={require(`../../assets/${about.resumeIcon}`)} alt='resume' />
                                    <p><a className="blue-text" href={about.resume} target="_blank">Resume</a></p>
                                </div>
                                <div className="fact-two">
                                    <img src={require(`../../assets/${about.locationIcon}`)} alt='resume' />
                                    <p className="green-text">{about.location}</p>
                                </div>
                                <div className="fact-three">
                                    <img src={require(`../../assets/${about.codingIcon}`)} alt='resume' />
                                    <p className="green-text">{about.coding}</p>
                                </div>
                            </div>
                            <div className="skills">
                                {about.skills?.map((skill,idx)=>{
                                    return <p key={idx} style={{
                                        border: `2px solid ${idx%3===1?'#ff68b8ff'
                                        :idx%3===2?'#4a86e8ff'
                                        :'#5acc29ff'}`,
                                        animation: `appear .5s forwards ${idx%3===1?'1.75s'
                                        :idx%3===2?'2s'
                                        :'2.25s'}`
                                    }} >{skill}</p>
                                })}
                            </div>
                            <p className="bio-blob">{about.bio1}</p>
                            <p className="bio-blob">{about.bio2}</p>
                            <p className="bio-blob">{about.bio3}</p>
                        </div>
                    </div>
                    <div className="profile-card">
                        <img className="headshot" src={require(`../../assets/${about.headshot}`)} alt={`${about.name} headshot`} />
                        <Flare side={'left'} />

                    </div>
                </div>
            </section>
        )
    };

    return about ? loaded() : <Loading />;
}

export default About;