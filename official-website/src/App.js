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
            paragraph="Hello! My name is Sarah!" />
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
