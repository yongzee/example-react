import React from "react";

import './card.styles.css';






export const Card = props => (
    <div className="card-container">
        <img src= {require('./card images/v3.jpg')} alt="monsters" />
        <h1>{props.monsters.name}</h1>
        <p>{props.monsters.username}</p>
    </div>
);
