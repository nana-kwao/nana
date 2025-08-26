import ContactForm from "./ContactForm";
import {
  SubjectHeading,
  AuthBackGroundWrapper,
  Attribution,
  IconsWithText,
} from "milesuicomponents";

const Contact = () => {
  return (
    <>
      <AuthBackGroundWrapper
        id="contact"
        style={{ background: "none", paddingTop: "1rem", height: "auto" }}
      >
        <SubjectHeading style={{ textAlign: "center" }}>
          Contact Me
        </SubjectHeading>
        <ContactForm />
        <div style={{ margin: "1em 0", display: "flex", gap: "2em" }}>
          <a
            href={"https://facebook.com/f.nanakwao"}
            style={{ color: "#213547" }}
          >
            facebook
          </a>
          <a href={"https://wa.me/+233559082614"} style={{ color: "#213547" }}>
            whatsApp
          </a>
          <a
            href={"https://x.com/f_nanakwao"}
            style={{ color: "#213547", marginBottom: "1em" }}
          >
            x
          </a>
        </div>
        <Attribution className="attribution">
          Powered by <a href="https://x.com/f_nanakwao">f.nanakwao</a>
        </Attribution>
      </AuthBackGroundWrapper>
    </>
  );
};
export default Contact;
