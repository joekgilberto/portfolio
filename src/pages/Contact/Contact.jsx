import "./Contact.css"

import { useState, useEffect } from "react";
import Messenger from "../../components/Messenger/Messenger";
import Flare from "../../components/Flare/Flare";
import Loading from "../Loading/Loading";

export default function Contact({ setPage }) {

    const [contact, setContact] = useState(null);
    const [sent, setSent] = useState(false)

    async function getContactData() {
        const response = await fetch("./contact.json");
        const data = await response.json();
        setContact(data);
    };

    useEffect(() => {
        setPage("contact")
        setSent(false)
        getContactData()
    }, []);

    function loaded() {
        return (
            <section className="Contact">
                <aside>
                    <div>
                        <h1 className="pink-text">Contact</h1>
                        <Flare side={'left'} />
                    </div>
                    <div className="contact-info">
                        <div>
                            <h3>Email</h3>
                            <p><a className="blue-text" href={`mailto:${contact.email}?subject="Hello, Joe!"`}>{contact.email}</a></p>
                        </div>
                        <div className="contact-divider"></div>
                        <div>
                            <h3>GitHub</h3>
                            <p><a className="blue-text" href={contact.github} target="_blank">{contact.github.slice(8)}</a></p>
                        </div>
                        <div className="contact-divider"></div>
                        <div>
                            <h3>LinkedIn</h3>
                            <p><a className="blue-text" href={contact.linkedin} target="_blank">{contact.linkedin.slice(12)}</a></p>
                        </div>
                        <div className="contact-divider"></div>
                        <div>
                            <h3>Resume</h3>
                            <p><a className="blue-text" href={contact.resume} target="_blank">A PDF can be found here.</a></p>
                        </div>
                    </div>
                </aside>
                <div className="contact-form">
                    <div className="hello-there">
                        <h2 className="green-text">Hello, there!</h2>
                        <p>Feel free to email me, check out my work, connect on LinkedIn, or message me through the following form!  I would love to get in touch.</p>
                    </div>
                    {sent ? <h2 className="sent-message">Your message has been sent!</h2> : <Messenger setSent={setSent} />}
                </div>
            </section>
        )
    }

    return contact ? loaded() : <Loading />;
}