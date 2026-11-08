import Content from "../components/Content";
import ContactInfo from "../components/ContactInfo";
import contactImage from "../assets/contact.jpeg";

interface Contacts {
  label: string;
  value: string;
  link: string;
  newTab?: boolean;
}

const CONTACTS: Contacts[] = [
  {
    label: "Email",
    value: "joekgilberto@gmail.com",
    link: "mailto:joekgilberto@gmail.com",
    newTab: false,
  },
  {
    label: "LinkedIn",
    value: "in/joekgilberto",
    link: "https://www.linkedin.com/in/joekgilberto",
  },
  {
    label: "GitHub",
    value: "@joekgilberto",
    link: "https://github.com/joekgilberto",
  },
  {
    label: "Resume",
    value: "View PDF",
    link: "https://drive.google.com/file/d/1AAukBVj_Pqz42LQVwU9zBxom8PvLo1nj/view?usp=sharing",
  },
];

export default function Contact() {
  return (
    <Content
      title="Contact Info"
      image={contactImage}
      imageAlt="Joe Gilberto selfie in a mirror."
    >
      <p>
        While I am not looking for work, I always love to connect with others in
        my field and expand my circles.
      </p>
      {CONTACTS.map(({ label, value, link, newTab }, i) => {
        return (
          <ContactInfo
            label={label}
            value={value}
            link={link}
            newTab={newTab ?? true}
            style={{ animationDelay: `${i * 150}ms` }}
            className="motion-safe:animate-slow-fade-in"
          />
        );
      })}
      <p>Feel free to reach out! I look forward to hearing form you.</p>
    </Content>
  );
}
