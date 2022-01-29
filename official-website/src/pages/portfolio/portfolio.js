import React from 'react';
import Article from '../../components/article/article';
import './portfolio.css';

export default function Portfolio() {

  return (
    <div className="article">
      <Article 
      articleTitle="P/F Calculator"
      articleParagraph="Reach for your dreams with specialized design for your brand and company!
      Your website will be intuitive to use and responsive to the user." />
      <Article />
      <Article />
    </div>
  );
}