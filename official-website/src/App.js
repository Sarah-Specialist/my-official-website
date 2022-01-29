import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import Card from './components/card/card';
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
              title="General"
              paragraph="About forwarding Limits" />
          <Card />
        </div>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
