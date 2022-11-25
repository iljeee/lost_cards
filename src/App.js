import React from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import CardData from "./CardData";
import "./index.css"
import { EasybaseProvider, useEasybase } from 'easybase-react';

function App() {
  const [cardData, setCardData] = React.useState(CardData)
  const collection = cardData.map(card => {
    return <Card
      key={card.id}
      id={card.id}
      name={card.name}
      description={card.description}
      image={card.image}
      cost={card.stats.cost}
      power={card.stats.power}
      abilityType={card.abilityType}
      rarity={card.rarity}
    />
  })

  return (
    <div className="app">
      <div className="creator">
        <Form/>
      </div>
      <div className="collection">
        {collection}
      </div>
    </div>
  );
}

export default App;
