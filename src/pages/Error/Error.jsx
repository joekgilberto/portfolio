import "./Error.css"
import { useEffect } from "react";
import ErrorFiller from "./ErrorFiller";
import { Link } from "react-router-dom";

export default function Error({ setPage }) {

    useEffect(() => {
        setPage('error')
    }, []);

    return (
        <section className="Error">
            <div className="fake-search-header">
                <h1>JOE GILBERTO</h1>
                <div className="fake-search-bar-error">
                <h3>ERROR 404</h3>
                <Link to='/about'>
                    <img className="fake-search" src={require('../../assets/search.png')} alt="fake search icon" />
                </Link>
                </div>
            </div>
            <div className="fake-search-body">
                <div className="page-not-found">
                    <Link to="/">
                        <h2>Page not found</h2>
                    </Link>
                    <p>Click above to return to the homepage.</p>
                </div>
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
            </div>

        </section>
    )
}