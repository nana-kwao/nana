import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <div className="footer-area" id="contact">
        <h3>Contact Me</h3>
        <ContactForm />
        <div className="social-links">
          <a href={"https://facebook.com/f.nanakwao"}>Facebook</a>
          <a href={"https://facebook.com/f.nanakwao"}>WhatsApp</a>
          <a href={"https://facebook.com/f.nanakwao"}>Twitter(X)</a>
        </div>
        <p className="attribution">
          Powered by <i>f.nanakwao</i>
        </p>
      </div>
    </>
  );
};
export default Contact;
