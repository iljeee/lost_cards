import React from "react"
import Card from "./Card"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {name: "Name", description: "Description", cost: 0, power: 0, image: "https://images.immediate.co.uk/production/volatile/sites/25/2022/04/mysteries-universe-4e3dc50.jpg?quality=90&resize=980,654", abilityType: ""}
    )

    console.log(formData)

    /*Make input field name value match the property name in your state. This way you can use event.target.name to figure out which field the input is coming from*/
    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return(
        <>
            <form className="creator--form">
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                {/* Zet een character limit van 40 hier */}
                <textarea
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                <input
                    type="text"
                    placeholder="0"
                    onChange={handleChange}
                    name="cost"
                    value={formData.cost}
                />
                <input
                    type="text"
                    placeholder="0"
                    onChange={handleChange}
                    name="power"
                    value={formData.power}
                />
                <input
                    type="text"
                    placeholder="URL"
                    onChange={handleChange}
                    name="image"
                    value={formData.image}
                />
                <fieldset>
                    <legend>Ability type</legend>
                    <label htmlFor="none">None</label>
                    <input
                        id="none"
                        type="radio"
                        onChange={handleChange}
                        name="abilityType"
                        value=""
                        checked={formData.abilityType === ""}
                    />
                    <label htmlFor="onReveal">On Reveal</label>
                    <input
                        id="onReveal"
                        type="radio"
                        onChange={handleChange}
                        name="abilityType"
                        value="On Reveal"
                        checked={formData.abilityType === "On Reveal"}
                    />
                    <label htmlFor="ongoing">Ongoing</label>
                    <input
                        id="ongoing"
                        type="radio"
                        onChange={handleChange}
                        name="abilityType"
                        value="Ongoing"
                        checked={formData.abilityType === "Ongoing"}
                    />
                </fieldset>
                {/*<input/> rarity dropdown*/}
                <button>Submit</button>
            </form>
            <Card
                name={formData.name}
                description={formData.description}
                cost={formData.cost}
                power={formData.power}
                image={formData.image}
                abilityType={formData.abilityType}
            />
        </>
    )
}