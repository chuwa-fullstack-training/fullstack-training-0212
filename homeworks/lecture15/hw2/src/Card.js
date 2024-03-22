import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import CardComponent from './CardComponent';
import { useParams } from 'react-router-dom';

function Card() {
  const {cardId} = useParams();
  const [cards, setCards] = useState([
    {id:1, name: 'Card1', color: 'white'},
    {id:2, name: 'Card2', color: 'white'},
    {id:3, name: 'Card3', color: 'white'},
    {id:4, name: 'Card4', color: 'white'},
    {id:5, name: 'Card5', color: 'white'},
    {id:6, name: 'Card6', color: 'white'},
  ]);

  const handleNameChange = (id, newName) => {
    const updatedCards = [...cards];
    updatedCards.map(card => {
      if(card.id === id) {
        card.name = newName;
      }
    });
    setCards(updatedCards);
  };

  const handleColorSelect = (newColor) => {
    const updatedCards = [...cards];
    updatedCards.forEach((card) => {
      if(card.id == cardId) {
        card.color = newColor;
      }
    });
    setCards(updatedCards);
  }

  const colorOptions = ['red', 'white', 'yellow', 'green'];
  const currentCard = cards.find(card => card.id == cardId);
  console.log(currentCard);
  return (
    <div className='container'>
      <div className='dropdown-button'>
        <Dropdown
          options={colorOptions}
          onSelect={handleColorSelect}
          buttonLabel="Choose Color"
          id="dp2"
        />
      </div>
      <div className='card'>
        {currentCard ?
          <CardComponent
            name={currentCard.name}
            color={currentCard.color}
            handleNameChange={(newName) => handleNameChange(currentCard.id, newName)}
          /> : <p>This Card Doesn't exist</p>
        }
      </div>
    </div>
  );
}

export default Card;
