import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import ContactInfo from './components/contactInfo/contactInfo';
import Footer from './parts/footer/footer';
import './Contact.css';

export default function Contact() {

  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div className="main">
            <form>
                
            </form>
            <ContactInfo />
        </div>
        <Footer />
      </div> 
    </div>
  );
}