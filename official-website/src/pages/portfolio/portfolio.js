import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="article">
      <Article 
      articleTitle="The PaO2 / FiO2 calculator – HTML, CSS, JavaScript"
      articleGoal="Goal: This tool helps physicians understand the patient’s lung condition and oxygenation status. This is typically used for patients with acute respiratory distress syndrome (ARDS)."
      articleLF="Languages and Frameworks: HTML, CSS, JavaScript, draw.io, Visual Studios Code, GitHub"
      articleFeatures="Features: input validation, mathematics calculation, mouseover event, radio buttons that autofill input text."
      articleProcess="Process:"
      articleLink="Link: https://sarah-specialist.github.io/PFcalculator/"
      articleTags="#javascript #css #html #github #softwaredeveloper #healthcare #project"
       />
      <Article />
      <Article />
    </div>
  );
}