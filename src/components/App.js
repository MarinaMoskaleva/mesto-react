import React,{ useState } from 'react';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import PopupWithForm from './PopupWithForm.js'
import ImagePopup from './ImagePopup.js'

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className='root'>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name='edit-profile' title='Редактировать профиль' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input
                id="name-input"
                type="text"
                className="popup__input popup__input_type_name"
                name="name-input"
                required
                placeholder="Введите имя"
                minLength="2"
                maxLength="40"/>
          <span className="name-input-error popup__error"></span>
          </label>
          <label className="popup__form-field">
            <input
                id="description-input"
                type="text"
                className="popup__input popup__input_type_description"
                name="description-input"
                required
                placeholder="Введите описание"
                minLength="2"
                maxLength="200"/>
            <span className="description-input-error popup__error"></span>
          </label>
      </PopupWithForm>
      <PopupWithForm name='add-place' title='Новое место' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} buttonText='Создать'>
        <label className="popup__form-field">
          <input
                id="title-input"
                type="text"
                className="popup__input popup__input_type_title"
                name="popup-add-name"
                required
                placeholder="Название"
                minLength="2"
                maxLength="30"/>
          <span className="title-input-error popup__error"></span>
          </label>
          <label className="popup__form-field">
            <input
                id="url-input"
                type="url"
                className="popup__input popup__input_type_url"
                name="popup-add-url"
                required
                placeholder="Ссылка на картинку"/>
            <span className="url-input-error popup__error"></span>
          </label>
      </PopupWithForm>
      <PopupWithForm name='edit-avatar' title='Обновить аватар' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input
                id="avatar-input"
                type="url"
                className="popup__input popup__input_type_url"
                name="popup-avatar-url"
                required
                placeholder="Ссылка на аватар"/>
          <span className="avatar-input-error popup__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm name='delete-place' title='Вы уверены?'>
        <button className="popup__close-button" type="button" aria-label="Close"></button>
        <h2 className="popup__title">Вы уверены?</h2>
        <button className="popup__button" type="submit">Да</button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
