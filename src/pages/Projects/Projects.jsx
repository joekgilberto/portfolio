import "./Projects.css"
import { useState, useEffect } from "react";

import Flare from "../../components/Flare/Flare";
import Loading from "../Loading/Loading";

function Projects({ page, setPage }) {
    const [projects, setProjects] = useState(null);

    async function getProjectsData() {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => {
        setPage("projects")
        getProjectsData()
    }, []);

    function loaded() {
        return projects.map((project, idx) => (
            <section key={idx} className="post">
                <div className="post-top">
                    <div className="post-title">
                        <p className="green">JG</p>
                        <h1 className="green-text">{project.name}</h1>
                    </div>
                    <img className="project-img" src={require(`../../assets/${project.image}`)} />
                    <Flare side={'inline'} />
                    <p>{project.description}</p>
                </div>
                <div className="post-bottom">
                    <div className="post-buttons">
                        <a href={project.live} target="_blank">

                            <button className="pink">
                                <img src={require('../../assets/heart.png')} alt="heart" />
                                Live
                            </button>
                        </a>
                        <a href={project.git} target="_blank">
                            <button className="blue">
                                <img src={require('../../assets/comment.png')} alt="comment" />
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        ));
    }
    return (
        <section className="Projects">
            <div className="fake-header">
                <h1 className="pink-text">Projects</h1>
                <Flare side={'right'} />
            </div>
            <div className="post-body">
                {projects ? loaded() : <Loading />}
            </div>
        </section>
    )
}

export default Projects;

