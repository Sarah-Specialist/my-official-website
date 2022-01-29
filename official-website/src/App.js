import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Testimonials from './pages/testimonials';
import Contact from './pages/contact';
import Logo from './parts/logo/logo';
import Card from './components/card/card';
import Profile from './components/profile/profile';
import ContactInfo from './components/contactInfo/contactInfo';
import Footer from './parts/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="navbar">
      <Router>
        <Link to="/">
          <button className="pages">Home</button>
        </Link>
        <Link to="/about">
          <button className="pages">About Me</button>
        </Link>
        <Link to="/portfolio">
          <button className="pages">Portfolio</button>
        </Link>
        <Link to="/testimonials">
          <button className="pages">Testimonials</button>
        </Link>
        <Link to="/contact">
          <button className="pages">Contact</button>
        </Link>
      
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/testimonials">
          <Testimonials />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
        </Route>
      </Switch>
      </Router>
      </div>
      <div className="container">
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
