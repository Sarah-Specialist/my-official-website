import React from 'react';
import Navbar from './parts/navbar/navbar';
import Logo from './parts/logo/logo';
import Footer from './parts/footer/footer';
import './About.css';

export default function About() {
    function background() {
        return (
            <>
                <p>I decided to give it a shot, and never looked back!</p>
                <p>Growing up, I’ve always had a knack for Science and pursued my passion for the Healthcare industry. As part of the medical ICU team, I’ve worked in high-pressure work environment and contributed as a front-line healthcare worker during the COVID-19 pandemic. I will always retain a strong interest toward Healthcare, and I cannot wait to merge those experiences with new skills that I am learning everyday.</p>
                <p>I’ve had an interest in coding for a long time, and I used to spend my free time attending courses and reading up. I am currently enrolled in the NTU Software Developer Immersive course, and I’m learning a lot from wonderful mentors and classmates! The curriculum for this course include programming fundamentals, frontend framework and APIs, backend framework and APIs, mobile and full-stack development, relational & noSQL databases, and agile & product development.</p>
            </>
        )
    }

    return (
    <div className="App">
      <div className="container">
          <Navbar />
          <Logo />
        <div className="main">
            {background}
        </div>
        <Footer />
      </div> 
    </div>
    );
}