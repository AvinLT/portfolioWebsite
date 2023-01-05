import React from "react";
import "./contact.css";
import { useRef } from "react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { BsEnvelope } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_9jarqn7",
      "template_7m1y1pc",
      form.current,
      "HlFXQa310iXv4WcTu"
    );
    setMsg("Mensagem Enviada! Obrigado.");
    e.target.reset();
    // .then((result) => {
    //     console.log(result.text);
    // }, (error) => {
    //     console.log(error.text);
    // });
  };

  return (
    <section id="contact">
      <h5 className="text-light">
        Send me a message if you would like to talk!
      </h5>
      <h2 className="text-light">Contact Me!</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FaMailBulk className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>tharakaa@mcmaster.ca</h5>
            <a href="mailto:tharakaa@mcmaster.ca">Email me</a>
          </article>

          <article className="contact__option">
            <FaPhoneAlt className="contact__option-icon" />
            <h4>Phone Number</h4>
            <h5>(905)921-1361</h5>
            <a
              href="https://wa.me/message/HHVKC53QFOWZI1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            required
            placeholder="Your message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
          <span>{msg}</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
