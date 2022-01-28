import React from 'react';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import Navbar from './parts/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div>
          
        </div>
        <Footer />
      </div> 
    </div>
  );
}

export default App;
