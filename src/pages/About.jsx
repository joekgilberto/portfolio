import { useState, useEffect } from "react";

function About() {
    const [about, setAbout] = useState(null);

    async function getAboutData() {
        const response = await fetch("./about.json");
        const data = await response.json();
        setAbout(data);
    };

    useEffect(() => { getAboutData() }, []);

    function loaded() {
        return (
            <div>
                <h2>{about.name}</h2>
                <h3>{about.email}</h3>
                <p>{about.bio}</p>
            </div>
        )
    };

    return about ? loaded() : <h1>Loading, please hold!</h1>;
}

export default About;