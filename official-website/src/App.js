import React from 'react';
import Header from './parts/header/header';
import Footer from './parts/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Footer />
        Hello world
      </div> 
    </div>
  );
}

export default App;
