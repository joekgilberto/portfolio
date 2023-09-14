import "./Flare.css"

export default function Flare({side}){
    return(
        <div className={`Flare ${side}`}>
            <div className="pink bar"></div>
            <div className="blue bar"></div>
            <div className="green bar"></div>
        </div>
    )
}