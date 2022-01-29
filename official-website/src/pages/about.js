import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import './About.css';

export default function About() {

  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div className="main">
        </div>
        <Footer />
      </div> 
    </div>
  );
}