import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="navbar">
          <Link to="/"><button className="pages">Home</button></Link>
          <Link to="/pages/about/about"><button className="pages">About Me</button></Link>
          <Link to="/pages/portfolio/portfolio"><button className="pages">Portfolio</button></Link>
          <Link to="/pages/contact/contact"><button className="pages">Contact</button></Link>
      </div>
      <Logo />
      <div className="main">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/pages/about/about"><About /></Route>
          <Route path="/pages/portfolio/portfolio"><Portfolio /></Route>
          <Route path="/pages/contact/contact"><Contact /></Route>
        </Switch>
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
