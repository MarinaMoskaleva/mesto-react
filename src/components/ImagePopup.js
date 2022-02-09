import React from "react";

function ImagePopup(props){
    return (
        <div className={`popup popup-image ${props.card && 'popup_opened'}`}>
            <form className="popup-image__container">
                <button className="popup__close-button" type="button" aria-label="Close" onClick={props.onClose}></button>
                <img className="popup-image__image" src={`${props.card.link}`} alt="Полноразмерное изображение"/>
                <p className="popup-image__caption">{props.card.name}</p>
            </form>
        </div>
    );
}

export default ImagePopup;