import React from 'react';
import ContactInfo from '../../components/contactInfo/contactInfo';
import './contact.css';

import {useState} from 'react';
import './contact.css';

export default function Contact() {
    const [form, setForm] = useState({name: '', email: '', subject: '', message:''});

    const handleInputChange = event => {
      const newForm = {...form};

      switch(event.target.name) {
        case "name":
          newForm.name = event.target.value;
        break;

        case "email":
          newForm.email = event.target.value;
        break;

        case "subject":
          newForm.subject = event.target.value;
        break;

        case "message":
          newForm.message = event.target.value;
        break;
        default:
        break;
      }
      setForm(newForm);
    }

    const handleSubmit = (event) => {
      event.preventDefault();
    }

  return (
    <div className="contact">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="name">
        <label>Name:</label>
        <input type="text"
                name="name"
                placeholder="Your name"
        />
        </div>
        <div className="email">
        <label>Email:</label>
        <input type="text"
                name="email"
                placeholder="Your email"
                onChange={handleInputChange}
        />
        </div>
        <div className="subject">
        <label>Subject:</label>
        <input type="text"
                name="subject"
                placeholder="Topic"
                onChange={handleInputChange}
        />
        </div>
        <div className="message">
        <label>Message:</label>
        <input type="textarea"
                name="message"
                placeholder="Type your message here"
                onChange={handleInputChange}
        />
        </div>
        <div className="button">
          <button type="submit">Submit</button>
        </div>
      </form><br />
      <h2>Get in touch with me!</h2>
      <ContactInfo />
    </div>
  );
}