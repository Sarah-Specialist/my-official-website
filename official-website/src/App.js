import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Testimonials from './pages/testimonials';
import Contact from './pages/contact';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="navbar">
          <Link to="/pages/home"><button className="pages">Home</button></Link>
          <Link to="/pages/about"><button className="pages">About Me</button></Link>
          <Link to="/pages/portfolio"><button className="pages">Portfolio</button></Link>
          <Link to="/pages/testimonials"><button className="pages">Testimonials</button></Link>
          <Link to="/pages/contact"><button className="pages">Contact</button></Link>
      </div>
      <Logo />
      <div className="main">
        <Switch>
          <Route path="/pages/home"><Home /></Route>
          <Route path="/pages/about"><About /></Route>
          <Route path="/pages/portfolio"><Portfolio /></Route>
          <Route path="/pages/testimonials"><Testimonials /></Route>
          <Route path="/pages/contact"><Contact /></Route>
        </Switch>
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
