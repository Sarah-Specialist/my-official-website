import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import Card from './components/card/card';
import Profile from './components/profile/profile';
import ContactInfo from './components/contactInfo/contactInfo';
import Footer from './parts/footer/footer';
import './App.css';

function App() {



  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div className="main">
          <Card 
            title={<Profile />}
            paragraph="Reach for your dreams with specialized design for your brand and company!
            Your website will be intuitive to use and responsive to the user." />
          <Card 
            title="Get in touch!"
            paragraph={<ContactInfo />} />
        </div>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
