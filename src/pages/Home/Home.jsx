import "./Home.css"
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <section className="Home">
            <h1>JOE GILBERTO</h1>
            <div className="fake-search-bar">
                <h2>Full-Stack Software Engineer</h2>
                <Link to='/about'>
                    <img className="fake-search" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1024px-Magnifying_glass_icon.svg.png?20130526065603" alt="fake search icon" />
                </Link>
            </div>
        </section>
    );
}

export default Home;