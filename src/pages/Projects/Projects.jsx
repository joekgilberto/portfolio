import "./Projects.css"
import { useState, useEffect } from "react";

import Post from "../../components/Post/Post";
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
            <Post key={idx} project={project} idx={idx} />
        ));
    }
    return (
        <section className="Projects">
            <div className="project-header">
                <h1 className="pink-text">Projects</h1>
                <Flare side={'right'} />
            </div>
            <div className="feed">
                {projects ? loaded() : <Loading />}
            </div>
        </section>
    )
}

export default Projects;