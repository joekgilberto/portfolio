import "./Error.css"
import { useEffect } from "react";
import ErrorFiller from "./ErrorFiller";
import { Link } from "react-router-dom";

export default function Error({ setPage }) {

    useEffect(() => {
        setPage("error")
    }, []);

    return (
        <section className="Error">
            <div className="fake-search-header">
                <h2 className="pink-text">JOE GILBERTO</h2>
                <div className="fake-search-bar-error">
                <h3 className="blue-text">ERROR 404</h3>
                <Link to='/about'>
                    <img className="fake-search-error" src={require('../../assets/search.png')} alt="fake search icon" />
                </Link>
                </div>
            </div>
            <div className="fake-search-body">
                <div className="page-not-found">
                    <Link to="/">
                        <h4 className="purple-text">Page not found</h4>
                    </Link>
                    <p className="blue-text">Click above to return to the homepage.</p>
                </div>
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
                <ErrorFiller />
            </div>

        </section>
    )
}