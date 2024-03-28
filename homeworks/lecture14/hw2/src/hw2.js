import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";

export default function HW2() {
  const [cards, setCards] = useState([
    { name: "first", color: "white" },
    { name: "second", color: "white" },
    { name: "third", color: "white" },
    { name: "fourth", color: "white" },
    { name: "fifth", color: "white" },
    { name: "sixth", color: "white" },
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

  const handleInputChange = (newName, idx) => {
    // console.log("input changed");
    const newCards = [...cards];
    // console.log(newCards);
    newCards.forEach((card, index) => {
      if (index === idx) {
        card.name = newName;
      }
    });
    setCards(newCards);
  };

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
          {cards.map((card, idx) => (
            <Card
              key={idx}
              name={card.name}
              color={card.color}
              handleInputChange={(newName) => handleInputChange(newName, idx)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
