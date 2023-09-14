import "./Post.css"

export default function Post({ project }) {
    return (
        <section className="post">
            <div className="post-top">
                <div className="post-title">
                    <p className="green">JG</p>
                    <h1 className="green-text">{project.name}</h1>
                </div>
                <img className="post-img" src={require(`../../assets/${project.image}`)} />
                <p className="post-description">{project.description}</p>
            </div>
            <div className="post-bottom">
                <div className="post-buttons">
                    <a href={project.live} target="_blank">
                        <button className="pink">
                            <img src={require('../../assets/heart.png')} />
                            Live
                        </button>
                    </a>
                    <a href={project.git} target="_blank">
                        <button className="blue">
                            <img src={require('../../assets/comment.png')} />
                            GitHub
                        </button>
                    </a>
                </div>
            </div>
        </section>
    )
}