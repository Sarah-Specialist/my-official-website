import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="article">
      <Article 
      articleImg={"https://media-exp1.licdn.com/dms/image/C4E22AQEU0daWdlKwKA/feedshare-shrink_800/0/1640229225826?e=1646265600&v=beta&t=s6oP_tOb7lrqzLUkWJUsg6RvR9aEbNdQcx_Mpua9yQU"}
      articleTitle="The PaO2 / FiO2 calculator – HTML, CSS, JavaScript"
      articleDiv="This is my individual project for the SkillsUnion/NTU Software Developer Immersive course. I created a PaO2/FiO2 calculator based on my experience in healthcare. This tool helps physicians understand the patient’s lung condition and oxygenation status. This is typically used for patients with acute respiratory distress syndrome (ARDS). The PaO2/FiO2 calculator features all the following: #javascript #css #html #github #softwaredeveloper #healthcare #project
      - input validation
      - mathematics calculation
      - mouseover event
      - radio buttons that autofill input text.
       
      Check it out on my GitHub!
      https://sarah-specialist.github.io/PFcalculator/"
       />
      <Article />
      <Article />
    </div>
  );
}