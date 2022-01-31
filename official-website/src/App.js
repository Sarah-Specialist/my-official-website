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
          <Link to="/home"><button className="pages">Home</button></Link>
          <Link to="/about"><button className="pages">About Me</button></Link>
          <Link to="/portfolio"><button className="pages">Portfolio</button></Link>
          <Link to="/contact"><button className="pages">Contact</button></Link>
      </div>
      <Logo />
      <div className="main">
        <Switch>
          <Route path="/"><Home /></Route>
          <IndexRoute to="/home" />
          <Route path="/about"><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/contact"><Contact /></Route>
        </Switch>
      </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
