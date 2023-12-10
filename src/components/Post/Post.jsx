import "./Post.css"

import Flare from "../Flare/Flare"

export default function Post({project, idx}){
    return(
        <section className="post" style={{animation: `rise 1s forwards ${idx-(.75*idx)}s`}}>
                <div className="post-top">
                    <div className="post-title">
                        <p className="green">JG</p>
                        <h1 className="green-text">{project.name}</h1>
                    </div>
                    <img className="post-img" src={require(`../../assets/${project.image}`)} />
                    <Flare side={'inline'} />
                    <div className="post-info">
                    <p className="post-tools">{project.tools}</p>
                    <p className="post-description">{project.description}</p>
                    </div>
                </div>
                <div className="post-bottom">
                    <div className="post-buttons">
                        <a href={project.live} target="_blank">

                            <button className="pink">
                                <img src={require('../../assets/heart.png')} alt="heart" />
                                Live
                            </button>
                        </a>
                        <a href={project.repo} target="_blank">
                            <button className="blue">
                                <img src={require('../../assets/comment.png')} alt="comment" />
                                GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </section>
    )
}