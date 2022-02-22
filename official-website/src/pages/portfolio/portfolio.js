import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="articles">
      <div className="article">
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
       </div>
       <div className="article">
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
      </div>
      <div className="article">
        <Article 
        src="https://i.ibb.co/8zdvQ01/image.jpg"
        alt="official website"
        articleTitle="My Official Website"
        articleGoal="Goal: To create a website that showcase the value of my projects and allow interactions with clients and other developers."
        articleLF="Languages and Frameworks: React, React-Router-Dom, React Functional Components, EmailJS, HTML, CSS, JavaScript, Visual Studios Code, GitHub"
        articleFeatures="Features: summary of projects, attractive and simple design, react form"
        articleProcess="Process: It is important for me to be able to connect with clients and other developers through my website. Since React applications require third-party plugins to send an email from a website form, I looked into using EmailJS to achieve my goals. It worked wonderfully!"
        articleLink="Link: https://sarah-specialist.github.io/my-official-website/"
        />
      </div>
      <div className="article">
        <Article
        src="https://i.ibb.co/fqPRsSn/ambrosial.jpg"
        alt="menu app"
        articleTitle="In-Restaurant Menu App"
        articleGoal="Goal: Customers of 'Ambrosial' can access the electronic ordering menu through the QR code."
        articleLF="Languages and Frameworks: React, React-Router-Dom, React Functional Components, EmailJS, Axios, CSS, JavaScript, Visual Studios Code, GitHub, Agile/Scrum"
        articleFeatures="Features: View restaurant menu by scanning a QR code, view carousel of ongoing promotion, choose quantity of an item before adding, add item to the order, change the quantity of your items on the order list, view your total bill, send the order to kitchen, call the server, request for the bill, and join membership."
        articleProcess="Process: This is a group project for the SkillsUnion/NTU Software Developer Immersive course. We utilized the Agile / Scrum methodology to guide our project management process."
        articleLink="Link: https://thenhao.github.io/group4Module2Project/"
        />
      </div>
      <div className="article">
        <Article
        src="https://ibb.co/6Dx8NHD"
        alt="medication delivery order system"
        articleTitle="Medication Delivery Order System"
        articleGoal="Goal: To create a medication delivery order system, with my own db.json file and API data using jsonplaceholder.typicode.com."
        articleLF="Languages and Frameworks: React, React Hooks, React Functional Components, Axios, CSS, JavaScript, Visual Studios Code, GitHub"
        articleFeatures="Features: Choose the medication from your prescription list. Choose the number of weeks/months of the medication you wish to order."
        articleProcess="Process: This is an individual project that I completed on the side. Moving forward, I will add a requirement for the user to perform user authentication prior to accessing his/her prescription."
        articleLink="Link: https://sarah-specialist.github.io/medication-order/"
        />
      </div>
    </div>
  );
}
