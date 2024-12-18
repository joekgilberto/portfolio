import "./Project.css"

import Flare from "../Flare/Flare"

export default function Project({ project, idx }) {
    return (
        <section className="project" style={{ animation: `rise 1s forwards ${idx - (.75 * idx)}s` }}>
            <div className="project-top">
                <div className="project-title">
                    <h3 className="purple-text">{project.name}</h3>
                </div>
                <img className="project-img" src={require(`../../assets/${project.image}`)} />
                <Flare side={'inline'} />
                <div className="project-info">
                    <p className="project-tools blue">{project.tools}</p>
                    <p className="project-description">{project.description}</p>
                </div>
            </div>
            <div className="project-bottom">
                <div className="project-buttons">
                    <a href={project.repo} target="_blank">
                        <button className='purple'>GitHub</button>
                    </a>
                    {project.live ?
                        <a href={project.live} target="_blank">
                            <button className='pink'>Live</button>
                        </a>
                        : null}
                </div>
            </div>
        </section>
    )
}