import Flare from "../../components/Flare/Flare"
import "./Loading.css"

export default function Loading(){
    return(
        <section className="Loading">
            <h1 className="purple-text">Loading...</h1>
            <Flare side={'loading'} />
        </section>
    )
}