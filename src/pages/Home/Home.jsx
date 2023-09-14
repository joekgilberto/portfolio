import "./Home.css"
import { Link } from 'react-router-dom';
import { useEffect } from "react";

import Flare from "../../components/Flare/Flare";

function Home({ setPage}) {

    useEffect(() => {
        setPage("home")
    }, []);

    return (
        <section className="Home">
            <h1>JOE GILBERTO</h1>
            <div className="fake-search-bar">
                <h2>Full-Stack Software Engineer</h2>
                <Link to='/about'>
                    <img className="fake-search" src={require('../../assets/search.png')} alt="fake search icon" />
                </Link>
            </div>
            <Flare side={'center'} />
        </section>
    );
}

export default Home;