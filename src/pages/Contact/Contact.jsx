import "./Contact.css"

import { useState, useEffect } from "react";

import Flare from "../../components/Flare/Flare";
import Loading from "../Loading/Loading"

function Contact({ setPage }) {

    const [width, setWidth] = useState()
    const [contact, setContact] = useState(null);

    async function getContactData() {
        const response = await fetch("./contact.json");
        const data = await response.json();
        setContact(data);
    };

    function updateWidth(){
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        setPage("contact")
        getContactData()
        updateWidth()
    }, []);

    function loaded() {
        return (
            <section className="Contact">
                <div className="contact-sidebar">
                    <h2 className="purple-text">Contact</h2>
                    <Flare side={'upward'} />

                </div>
                <div className="contact-info">
                    <div className="hello-there">
                        <div className="hello-there-title">
                            <h3 className="blue-text">Hello, there!</h3>
                            <h3 className="wave">👋</h3>
                        </div>
                        <p>Feel free to email me, check out my work, connect on LinkedIn, or message me through the following form!  I would love to get in touch.</p>
                    </div>
                    <div className="contact-link-list">
                        {contact.map((c, idx) => {
                            return (
                                <div className="contact-link" key={idx} style={{ animation: `rise .5s forwards ${idx - (.75 * idx)}s` }}>
                                    <h3 className="pink">{c.name}</h3>
                                    <p><a className="purple-text" href={c.link} target="_blank">{width>=500?c.linkText:c.linkShort}</a></p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        )
    };

    return contact ? loaded() : <Loading />;
}

export default Contact;