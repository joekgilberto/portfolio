import { useState, useEffect } from "react";

function Projects(props) {
    const [projects, setProjects] = useState(null);

    async function getProjectsData() {
        const response = await fetch("./projects.json");
        const data = await response.json();
        setProjects(data);
    };

    useEffect(() => { getProjectsData() }, []);

    function loaded() {
        return projects.map((project,idx) => (
            <section key={idx}>
                <h1>{project.name}</h1>
                <img src={project.image} />
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>live site</button>
                </a>
            </section>
        ));
    }

    return projects ? loaded() : <h1>Loading, please hold!</h1>;
}

export default Projects;

