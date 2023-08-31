import "./Projects.css"
import { useState, useEffect } from "react";

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
                        <p>JG</p>
                        <h1>{project.name}</h1>
                    </div>
                    <img src={project.image} />
                    <p>{project.description}</p>
                </div>
                <div className="post-bottom">
                    <hr />
                    <div className="post-buttons">
                        <a href={project.live} target="_blank">

                            <button className="live">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Red-simple-heart-symbol-only.png?20210611024846" alt="heart" />
                                Live
                            </button>
                        </a>
                        <a href={project.git} target="_blank">
                            <button className="github">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Font_Awesome_5_regular_comment-alt.svg/1024px-Font_Awesome_5_regular_comment-alt.svg.png?20180810174434" alt="comment" />
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
                <div className="social-logo">
                    <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Globe_icon-white.svg/840px-Globe_icon-white.svg.png?20150908170847" alt="globe" />
                    <h1>Projects</h1>
                </div>
                <div className="hamburger">
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                </div>
            </div>
            <div className="post-body">
                {projects ? loaded() : <h1>Loading, please hold!</h1>}
            </div>
        </section>
    )
}

export default Projects;
