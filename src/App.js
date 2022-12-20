//https://github.com/mkosir/react-parallax-tilt

import React from "react";
import Card from "./components/Card";
// import Form from "./components/Form";
import CardData from "./CardData";
import "./index.css"
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  const testCardsCollection = collection(db, "cards")
  const [testCards, setTestCards] = React.useState([])
  React.useEffect(() => {
    const getTestCards = async () => {
      const data = await getDocs(testCardsCollection)
      setTestCards(data.docs.map(doc => ({...doc.data(), id: doc.id})))
    }
    getTestCards()
  }, [testCardsCollection])
  
  // const [cardData, setCardData] = React.useState(CardData)
  const [formData, setFormData] = React.useState(
    {name: "", description: "", cost: 0, power: 0, image: "https://images.immediate.co.uk/production/volatile/sites/25/2022/04/mysteries-universe-4e3dc50.jpg?quality=90&resize=980,654", type: ""}
    )
    
  // console.log(cardData)

  const cardCollection = testCards.map(card => {
    return <Card
      key={card.id}
      id={card.id}
      name={card.name}
      description={card.description}
      image={card.image}
      cost={card.cost}
      power={card.power}
      type={card.type}
      rarity={card.rarity}
    />
  })

  const submit = async (e) => {
    if(formData.name !== "" && formData.description !== "" && formData.image !== "") {
      e.preventDefault()
      // setCardData(prevCardData => [formData, ...prevCardData])
      await addDoc(testCardsCollection, {name: formData.name, description: formData.description, image: formData.image, cost: parseInt(formData.cost), power: parseInt(formData.power), type: formData.type})
    }
  }

  const handleChange = (e) => {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [e.target.name]: e.target.value
        }
    })
}

  return (
    <>
      {/* <h1>Marvel Snap - The Lost Cards</h1> */}
      {/* {testCards.map(card => {
        return <div><p>Name is {card.name} and cost is {card.cost}</p></div>
      })} */}
      <div className="app">
        <div className="creator">
          <div className="creator__left">
            <h1 className="creator__title">The Lost<br/>Cards</h1>
            <Card
              name={formData.name}
              description={formData.description}
              cost={formData.cost}
              power={formData.power}
              image={formData.image}
              type={formData.type}
            />
          </div>
          <form className="form">
            <div className="form__stats">
                <div className="form__stat">
                  <label className="form__label" htmlFor="cost">Cost</label>
                  <input
                      required
                      max={99}
                      min={-99}
                      id="cost"
                      className="form__cost"
                      type="number"
                      placeholder="Cost"
                      onChange={handleChange}
                      name="cost"
                      value={formData.cost}
                  />
                </div>
                <div className="form__stat">
                  <label className="form__label" htmlFor="power">Power</label>
                  <input
                      required
                      max={99}
                      min={-99}
                      id="power"
                      className="form__power"
                      type="number"
                      placeholder="Power"
                      onChange={handleChange}
                      name="power"
                      value={formData.power}
                  />
                </div>
              </div>
              <label className="form__label" htmlFor="Image">Image</label>
              <input
                  required
                  id="image"
                  className="form__image"
                  type="text"
                  placeholder="Image"
                  onChange={handleChange}
                  name="image"
                  value={formData.image}
              />
              <label className="form__label" htmlFor="name">Name</label>
              <input
                  required
                  maxLength="25"
                  id="name"
                  className="form__name"
                  type="text"
                  placeholder="Name"
                  onChange={handleChange}
                  name="name"
                  value={formData.name}
              />
              <label className="form__label" htmlFor="type">Type</label>
              <fieldset id="type" className="form__type">
                  {/* <legend>Ability type</legend> */}
                  <div className="form__radioGroup">
                      <input
                          id="none"
                          className="form__radioInput"
                          type="radio"
                          onChange={handleChange}
                          name="type"
                          value=""
                          checked={formData.type === ""}
                      />
                      <label className="form__radioLabel" htmlFor="none">None</label>
                  </div>
                  <div className="form__radioGroup">
                      <input
                          id="onReveal"
                          className="form__radioInput"
                          type="radio"
                          onChange={handleChange}
                          name="type"
                          value="On Reveal"
                          checked={formData.type === "On Reveal"}
                      />
                      <label className="form__radioLabel" htmlFor="onReveal">On Reveal</label>
                  </div>
                  <div className="form__radioGroup">
                      <input
                          id="ongoing"
                          className="form__radioInput"
                          type="radio"
                          onChange={handleChange}
                          name="type"
                          value="Ongoing"
                          checked={formData.type === "Ongoing"}
                      />
                      <label className="form__radioLabel" htmlFor="ongoing">Ongoing</label>
                  </div>
              </fieldset>
              <label className="form__label" htmlFor="description">Description</label>
              <textarea
                  required
                  maxLength="50"
                  id="description"
                  className="form__description"
                  placeholder="Description"
                  onChange={handleChange}
                  name="description"
                  value={formData.description}
              />
              {/*<input/> rarity dropdown*/}
              <button onClick={submit} className="form__submit">Add to collection</button>
          </form>
        </div>
        <div className="collection">
          {cardCollection}
        </div>
      </div>
    </>
  );
}

export default App;
