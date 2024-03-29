import "./Flare.css"

export default function Flare({side}){
    return(
        <div className={`Flare ${side}`}>
            <div className="purple bar"></div>
            <div className="blue bar"></div>
            <div className="pink bar"></div>
        </div>
    )
}