import React from "react";

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <>
            <button className="element__trash-button" type="button" aria-label="Trash"></button>
            <img className="element__image" src={`${card.link}`} onClick={handleClick} alt={`${card.name}`}/>
            <div className="element__subtitle">
                <h2 className="element__subtitle-text">{card.name}</h2>
                <div className="element__subtitle-like">
                    <button className="element__subtitle-like-button" type="button" aria-label="Like"></button>
                    <p className="element__subtitle-like-count">{card.likes.length}</p>
                </div>
            </div>
        </>
    );
}

export default Card;