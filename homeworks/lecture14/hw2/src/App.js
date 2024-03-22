import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Card from './Card';

function App() {
  const [cards, setCards] = useState([
    {name: 'Card1', color: 'white'},
    {name: 'Card2', color: 'white'},
    {name: 'Card3', color: 'white'},
    {name: 'Card4', color: 'white'},
    {name: 'Card5', color: 'white'},
    {name: 'Card6', color: 'white'},
  ]);
  const[selectedCard, setSelectedCard] = useState(null);
  const[selectedColor, setSelectedColor] = useState(null);

  const handleNameChange = (index, newName) => {
    const updatedCards = [...cards];
    updatedCards[index].name = newName;
    setCards(updatedCards);
  };

  const handleCardSelect = (name) => {
    setSelectedCard(name);
  }

  const handleColorSelect = (newColor) => {
    setSelectedColor(newColor);
    const updatedCards = [...cards];
    updatedCards.forEach((card) => {
      if(card.name === selectedCard) {
        card.color = newColor;
      }
    });
    setCards(updatedCards);
  }

  const colorOptions = ['red', 'white', 'yellow', 'green'];

  return (
    <div className='container'>
      <div className='button-list'>
        <Dropdown
          options={cards.map((card) => card.name)} 
          onSelect={handleCardSelect}
          buttonLabel="Choose Card"
          id="dp1"
        />
        <Dropdown
          options={colorOptions}
          onSelect={handleColorSelect}
          buttonLabel="Choose Color"
          id="dp2"
        />
      </div>
      <div className='card-list'>
        {cards.map((card, index) => (
          <Card 
            name={card.name}
            color={card.color}
            handleNameChange={(newName) => handleNameChange(index, newName)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
