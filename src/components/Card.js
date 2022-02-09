import React from "react";

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <>
            <button className="element__trash-button" type="button" aria-label="Trash"></button>
            <img className="element__image" src={`${props.card.link}`} onClick={handleClick}/>
            <div className="element__subtitle">
                <h2 className="element__subtitle-text">{props.card.name}</h2>
                <div className="element__subtitle-like">
                    <button className="element__subtitle-like-button" type="button" aria-label="Like"></button>
                    <p className="element__subtitle-like-count">{props.card.likes.length}</p>
                </div>
            </div>
        </>
    );
}

export default Card;