import React, { useState } from "react";
const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
});
const { name, email, message } = formState;

function ContactForm() {
  // JSX
  return (
    <section>
      <h1>Contact Me</h1>
      {/* not sure if the following line goes here */}
      <input type="email" name="email" defaultValue={formState.name} />
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
}
console.log(formState);

export default ContactForm;
