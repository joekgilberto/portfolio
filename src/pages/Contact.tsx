import Content from "../components/Content";
import ContactInfo from "../components/ContactInfo";
import contactImage from "../assets/contact.jpeg";

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
      <ContactInfo
        label="Email"
        value="joekgilberto@gmail.com"
        link="mailto:joekgilberto@gmail.com"
        newTab={false}
      />
      <ContactInfo
        label="LinkedIn"
        value="in/joekgilberto"
        link="https://www.linkedin.com/in/joekgilberto"
      />
      <ContactInfo
        label="GitHub"
        value="@joekgilberto"
        link="https://github.com/joekgilberto"
      />
      <ContactInfo
        label="Resume"
        value="View PDF"
        link="https://drive.google.com/file/d/1AAukBVj_Pqz42LQVwU9zBxom8PvLo1nj/view?usp=sharing"
      />
      <p>Feel free to reach out! I look forward to hearing form you.</p>
    </Content>
  );
}
