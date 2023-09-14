import "./Projects.css"
import { useState, useEffect } from "react";

import Post from "../../components/Post/Post";
import Flare from "../../components/Flare/Flare";
import Loading from "../Loading/Loading";

function Projects({ setPage }) {
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
            <Post key={idx} project={project} />
        ));
    }
    
    return (
        <section className="Projects">
            <div className="project-header pink-text">
                <h1>Projects</h1>
                <Flare side={'right'} />
            </div>
            <div className="project-feed">
                {projects ? loaded() : <Loading />}
            </div>
        </section>
    )
}

export default Projects;

