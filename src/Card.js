
import './Card.css';
import React, { useContext, useEffect, useMemo, useState } from 'react';


function Card(props) {

const {
    id,
    title,
    text,
    removePost

} = props;






    return (
        <div className="card" id={id}>
            <div className="card__box">
                <h2 className="card__title">{title}</h2>
                <p className="card__text">{text}</p>
            </div>
            <button className="card__btn" onClick={() => removePost(id)}>X</button>
        </div>
    );
}

export default Card;
