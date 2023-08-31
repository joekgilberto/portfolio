import "./Error.css"
import { useEffect } from "react";

export default function Error({page, setPage}){

    useEffect(() => {
        setPage(null)
    }, []);

    return(
        <section className="Error">
            <h1>404 Page Not Found</h1>
        </section>
    )
}