import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import './App.css';

function App() {
  //hamburger menu
  const [show, setShow] = useState(true);
  const handleMenu = () => setShow(!show)

  return (
    <div className="App">
      <Router>
      <div className="logo">
        <div className="toggleMenu" onClick={handleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <Logo />
      </div>
      <div className={show ? "navbar active" : "navbar"}>
          <Link to="/" style={{textDecoration: "none"}}><button className="pages">Home</button></Link>
          <Link to="/about" style={{textDecoration: "none"}}><button className="pages">About</button></Link>
          <Link to="/portfolio" style={{textDecoration: "none"}}><button className="pages">Portfolio</button></Link>
          <Link to="/contact" style={{textDecoration: "none"}}><button className="pages">Contact</button></Link>
      </div>
      <div className="main">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/portfolio"><Portfolio /></Route>
          <Route path="/contact"><Contact /></Route>
          <Redirect from ="*" to="/" />
        </Switch>
      </div>
      </Router>
      <div className="appFooter">
        <Footer />
      </div>
    </div>
  );
}

export default App;
