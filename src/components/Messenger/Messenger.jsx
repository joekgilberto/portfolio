import "./Messenger.css"

export default function Messenger({ setSent }) {

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <form className="Messenger" onSubmit={handleSubmit}>
            <label>Name
                <input type="text" placeholder="Your name (ex: Jane Doe)" />
            </label>
            <label>Email
                <input type="text" placeholder="Your email (ex: jane.doe@email.com)"  />
            </label>
            <label>Message
                <textarea placeholder="Your message (ex: Hello, Joe!)"  />
            </label>
            <button className="green" type="submit">Send</button>
        </form>
    )
}