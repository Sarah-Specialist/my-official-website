import React from 'react';
import './card.css';

export default function Card(props) {
    const {title, paragraph} = props;

    return (
        <div className="card">
            <h2 className="title">{title}</h2>
            <p className="paragraph">{paragraph}</p>
        </div>
    )
}