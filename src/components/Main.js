import React  from "react";
import EditIcoPath from '../images/EditIco.svg';
import api from '../utils/Api.js'
import Card from './Card.js'

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUser()
        .then(userData => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
        })
        .catch((err)=>{
            console.log(err);
        });

        api.getInitialCards()
        .then(cardsData => {
            setCards(cardsData);
        })
        .catch((err)=>{
            console.log(err);
        });
    });


    return (
       <main className="content">
            <section className="profile">
                <div className="profile__current">
                    <img alt="Аватар" className="profile__avatar" src={`${userAvatar}`}/>
                    <div className="profile__avatar-edit" onClick={props.onEditAvatar}>
                        <img src={EditIcoPath} alt="Иконка" className="profile__avatar-edit-ico"/>
                    </div>
                    <div className="profile__info">
                        <div className="profile__info-name">
                            <h1 className="profile__info-name-current">{userName}</h1>
                            <button className="profile__info-edit-button" onClick={props.onEditProfile} type="button" aria-label="Edit"></button>
                        </div>
                        <p className="profile__info-description">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace} aria-label="Add"></button>
            </section>
            <section className="elements">
                {cards.map((item, i) => (
                    <div className="element" key={item._id}>
                        <Card card={item} onCardClick={props.onCardClick}/>
                    </div>
                ))}
            </section>
        </main>
    );
}

export default Main;