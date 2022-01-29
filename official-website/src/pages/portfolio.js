import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import Article from './components/article/article';
import Footer from './parts/footer/footer';
import './Portfolio.css';

export default function Portfolio() {

  return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div className="main">
            <Article />
        </div>
        <Footer />
      </div> 
    </div>
  );
}