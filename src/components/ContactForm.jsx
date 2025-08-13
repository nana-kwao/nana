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

  const sendEmail = async () => {
    try {
      const response = await fetch(
        "https://mycvserver.onrender.com/api/sendemail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formInput),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }
      return await response.json();
    } catch (error) {
      return `Error sending email: ${error}`;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let res = await sendEmail();
      setFormInput({ name: "", email: "", message: "" });
      return res;
    } catch (error) {
      return `Error in form submission: ${error}`;
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
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
        <button type="submit">Submit!</button>
      </form>
    </>
  );
};
export default ContactForm;
