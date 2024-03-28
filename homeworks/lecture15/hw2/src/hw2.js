import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./card";

export default function HW2() {
  const { cardId } = useParams();
  const [cards, setCards] = useState([
    { name: "first", color: "white", id: 1 },
    { name: "second", color: "white", id: 2 },
    { name: "third", color: "white", id: 3 },
    { name: "fourth", color: "white", id: 4 },
    { name: "fifth", color: "white", id: 5 },
    { name: "sixth", color: "white", id: 6 },
  ]);

  const [selectedColor, setSelectedColor] = useState({});
  const [selectedCard, setSelectedCard] = useState("");

  const colors = ["red", "blue", "purple", "yellow", "green", "pink"];

  const handleSelectCard = (e) => {
    setSelectedCard(e.target.value);
  };

  const handleSelectColor = (e) => {
    setSelectedColor(e.target.value);
    console.log(e.target.value);
    const newCards = [...cards];
    newCards.forEach((card) => {
      if (card.name === selectedCard) {
        card.color = e.target.value;
      }
    });
    setCards(newCards);
  };

  const handleInputChange = (newName, id) => {
    // console.log("input changed");
    const newCards = [...cards];
    // console.log(newCards);
    newCards.forEach((card, index) => {
      if (card.id === id) {
        card.name = newName;
      }
    });
    setCards(newCards);
  };

  const targetCard = cards.find((card) => card.id == cardId);
  console.log(targetCard);

  return (
    <>
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <select
            style={{ width: "150px", height: "50px" }}
            onChange={handleSelectCard}
          >
            {cards.map((card, idx) => (
              <option key={idx} value={card.name}>
                {card.name}
              </option>
            ))}
          </select>
          <select
            style={{ width: "150px", height: "50px" }}
            onChange={handleSelectColor}
          >
            {colors.map((color, idx) => (
              <option key={idx} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{
            display: "flex",
            flex: "1 1 1",
            gap: "20px",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          {targetCard ? (
            <Card
              name={targetCard.name}
              color={targetCard.color}
              handleInputChange={(newName) =>
                handleInputChange(newName, targetCard.id)
              }
            />
          ) : (
            <p>Cannot find the card.</p>
          )}
        </div>
      </div>
    </>
  );
}
