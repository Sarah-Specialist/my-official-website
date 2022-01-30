import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2gv6vgb', 'template_k0361pi', form.current, 'user_ByCqOpjx1J0RXvSzaSC8A')
      .then((result) => {
          console.log(result.text);
          alert("Your message has been sent!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact">
      <h1>Contact</h1>
    <form ref={form} onSubmit={sendEmail}>
      <div className="name">
        <label>Name:</label>
        <input type="text" name="from_name" />
      </div>
      <div className="email">
        <label>Email:</label>
        <input type="email" name="from_email" />
      </div>
      <div className="message">
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <div className="button">
        <input type="submit" value="Send" />
      </div>
    </form>
    </div>
  );
};