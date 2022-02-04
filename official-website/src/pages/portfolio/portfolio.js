import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="articles">
      <Article 
      src="https://media-exp1.licdn.com/dms/image/C4E22AQEU0daWdlKwKA/feedshare-shrink_800/0/1640229225826?e=1646265600&v=beta&t=s6oP_tOb7lrqzLUkWJUsg6RvR9aEbNdQcx_Mpua9yQU"
      alt="P F calculator"
      articleTitle="The PaO2 / FiO2 calculator"
      articleGoal="Goal: This tool helps physicians understand the patient’s lung condition and oxygenation status. This is typically used for patients with acute respiratory distress syndrome (ARDS)."
      articleLF="Languages and Frameworks: HTML, CSS, JavaScript, draw.io, Visual Studios Code, GitHub"
      articleFeatures="Features: input validation, mathematics calculation, mouseover event, radio buttons that autofill input text"
      articleProcess="Process: While thinking of a topic for my project, I was motivated to solve a problem that is commonly faced by junior doctors - being unsure of the amount of oxygen that a particular mask/device is providing. This tool allows physicians to directly select the device and have the FiO2 field auto-filled. In a real clinical setting, the PaI2 value should be obtained by running an arterial blood gas (ABG) through the ABG machine. The FiO2 value is collected by observing the patient’s oxygen device or getting the FiO2 setting from the ventilator. The FiO2 value might not be easily observed if the patient is on a device that does not explicitly state the FiO2. This tool provides a convenient way to access the FiO2 values for these devices. The maximum oxygen flow in this tool is set to 6L as it is recommended that physicians consider using different devices if oxygen requirement is higher."
      articleLink="Link: https://sarah-specialist.github.io/PFcalculator/"
       />
      <Article 
      src="https://media-exp1.licdn.com/dms/image/C4E22AQF-AiLR37TQdw/feedshare-shrink_800/0/1641550173472?e=1646265600&v=beta&t=H36gOCjopmro9UnALz2gncXA_g2OTAg6dVQY6xekYag"
      alt="carpark availability"
      articleTitle="Carpark Availability"
      articleGoal="Goal: This tool helps the general public to easily find and source for available parking."
      articleLF="Languages and Frameworks: HTML, CSS, JavaScript, Axios, API, Modular Programming, Visual Studios Code, GitHub"
      articleFeatures="Features: real carpark data from data.gov.sg API, Using real-time information"
      articleProcess="Process: In this assignment, developers were to demonstrate the fetching of data from an API using Axios methods. While the assignment was required only vanilla JavaScript, I was eager to go beyond the scope of the class and create a front-end webpage. However, I encountered the “Cross—Origin Resource Sharing” error because Axios uses XMLHttpRequest under the hood. With research and help from my mentors, I was able to successfully deploy my webpage. "
      articleLink="Link: https://sarah-specialist.github.io/CarparkAvailability/"
      />
      <Article 
      src="https://github.com/Sarah-Specialist/my-official-website/blob/be66aff5f1545ef48f9d4ea586c51c0ee877bf57/image.jpg"
      alt="official website"
      articleTitle="My Official Website"
      articleGoal="Goal: To create a website that showcase the value of my projects and allow interactions with clients and other developers."
      articleLF="Languages and Frameworks: React, React-Router-Dom, React Functional Components, EmailJS, HTML, CSS, JavaScript, Visual Studios Code, GitHub"
      articleFeatures="Features: summary of projects, attractive and simple design, react form"
      articleProcess="Process: It is important for me to be able to connect with clients and other developers through my website. Since React applications require third-party plugins to send an email from a website form, I looked into using EmailJS to achieve my goals. It worked wonderfully!"
      articleLink="Link: https://sarah-specialist.github.io/my-official-website/"
      />
    </div>
  );
}