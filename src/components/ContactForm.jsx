import Button from "./Button";
import { useState } from "react";

const ContactForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormInput = (event) => {
    const { name, value } = event.target;
    setFormInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          id="name"
          value={formInput.name}
          onChange={handleFormInput}
          required
          placeholder="Your name"
        />
        <input
          type="email"
          name="email"
          id="email"
          value={formInput.email}
          onChange={handleFormInput}
          required
          placeholder="Your email"
        />
        <textarea
          name="message"
          id="message"
          value={formInput.message}
          onChange={handleFormInput}
          placeholder="Your message"
        />
        <Button text={"Submit!"} />
      </form>
    </>
  );
};
export default ContactForm;
