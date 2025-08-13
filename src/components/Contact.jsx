import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="footer-area" id="contacts">
        <h3>Contact Me</h3>
        <ContactForm />
        <div className="social-links">
          <Link to={"https://facebook.com/f.nanakwao"}>Facebook</Link>
          <Link to={"https://facebook.com/f.nanakwao"}>WhatsApp</Link>
          <Link to={"https://facebook.com/f.nanakwao"}>Twitter(X)</Link>
        </div>
        <p className="attribution">
          Powered by <i>f.nanakwao</i>
        </p>
      </div>
    </>
  );
};
export default Contact;
