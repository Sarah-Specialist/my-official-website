import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="article">
      <Article 
      src="https://media-exp1.licdn.com/dms/image/C4E22AQEU0daWdlKwKA/feedshare-shrink_800/0/1640229225826?e=1646265600&v=beta&t=s6oP_tOb7lrqzLUkWJUsg6RvR9aEbNdQcx_Mpua9yQU"
      alt="P F calculator"
      articleTitle="The PaO2 / FiO2 calculator"
      articleGoal="Goal: This tool helps physicians understand the patient’s lung condition and oxygenation status. This is typically used for patients with acute respiratory distress syndrome (ARDS)."
      articleLF="Languages and Frameworks: HTML, CSS, JavaScript, draw.io, Visual Studios Code, GitHub"
      articleFeatures="Features: input validation, mathematics calculation, mouseover event, radio buttons that autofill input text"
      articleProcess="Process: While thinking of a topic for my project, I was motivated to solve a problem that is commonly faced by junior doctors - being unsure of the amount of oxygen that a particular mask/device is providing. This tool allows physicians to directly select the device and have the FiO2 field auto-filled."
      articleLink="Link: https://sarah-specialist.github.io/PFcalculator/"
       />
      <Article 
      src="https://media-exp1.licdn.com/dms/image/C4E22AQF-AiLR37TQdw/feedshare-shrink_800/0/1641550173472?e=1646265600&v=beta&t=H36gOCjopmro9UnALz2gncXA_g2OTAg6dVQY6xekYag"
      alt="carpark availability"
      articleTitle="Carpark Availability"
      articleGoal="Goal: This tool helps the general public to easily find and source for available parking."
      articleLF="Languages and Frameworks: HTML, CSS, JavaScript, Axios, API, Modular Programming, Visual Studios Code, GitHub"
      articleFeatures="Features: real carpark data from data.gov.sg API, Using real-time information"
      articleProcess="Process: The main challenge I faced during this project was to match the input value with a dataset and extract information from that specific dataset."
      articleLink="Link: https://sarah-specialist.github.io/CarparkAvailability/"
      />
      <Article 
      articleTitle="My Official Website"
      articleGoal="Goal: To create a website that showcase the value of my projects and allow interactions with like-minded individuals."
      articleLF="Languages and Frameworks: React, React-Router-Dom, HTML, CSS, JavaScript, Visual Studios Code, GitHub"
      articleFeatures="Features: summary of projects, attractive and simple design, react form"
      articleProcess="Process: The main challenge I faced during this project was to match the input value with a dataset and extract information from that specific dataset."
      articleLink="Link: https://sarah-specialist.github.io/my-official-website/"
      />
    </div>
  );
}