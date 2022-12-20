import React from "react"
import Card from "./Card"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {name: "", description: "", cost: undefined, power: undefined, image: "https://images.immediate.co.uk/production/volatile/sites/25/2022/04/mysteries-universe-4e3dc50.jpg?quality=90&resize=980,654", abilityType: ""}
    )

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
            <Card
                name={formData.name}
                description={formData.description}
                cost={formData.cost}
                power={formData.power}
                image={formData.image}
                abilityType={formData.abilityType}
            />
            <form className="creator--form">
                {/* <label className="creator--form--label" htmlFor="name">Name</label> */}
                <input
                    required
                    id="name"
                    className="creator--form--name"
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <fieldset>
                    {/* <legend>Ability type</legend> */}
                    <div>
                        <input
                            id="none"
                            className="creator--form--type"
                            type="radio"
                            onChange={handleChange}
                            name="abilityType"
                            value=""
                            checked={formData.abilityType === ""}
                        />
                        <label htmlFor="none">None</label>
                    </div>
                    <div>
                        <input
                            id="onReveal"
                            className="creator--form--type"
                            type="radio"
                            onChange={handleChange}
                            name="abilityType"
                            value="On Reveal"
                            checked={formData.abilityType === "On Reveal"}
                        />
                        <label htmlFor="onReveal">On Reveal</label>
                    </div>
                    <div>
                        <input
                            id="ongoing"
                            className="creator--form--type"
                            type="radio"
                            onChange={handleChange}
                            name="abilityType"
                            value="Ongoing"
                            checked={formData.abilityType === "Ongoing"}
                        />
                        <label htmlFor="ongoing">Ongoing</label>
                    </div>
                </fieldset>
                {/* Zet een character limit van 40 hier */}
                {/* <label className="creator--form--label" htmlFor="description">Description</label> */}
                <textarea
                    required
                    maxlength="50"
                    id="description"
                    className="creator--form--description"
                    placeholder="Description"
                    onChange={handleChange}
                    name="description"
                    value={formData.description}
                />
                {/* <label className="creator--form--label" htmlFor="cost">Cost</label> */}
                <div className="creator--form--stats">
                    <input
                        required
                        max={99}
                        id="cost"
                        className="creator--form--stats--cost"
                        type="number"
                        placeholder="Cost"
                        onChange={handleChange}
                        name="cost"
                        value={formData.cost}
                    />
                    {/* <label className="creator--form--label" htmlFor="power">Power</label> */}
                    <input
                        required
                        max={99}
                        id="power"
                        className="creator--form--stats--power"
                        type="number"
                        placeholder="Power"
                        onChange={handleChange}
                        name="power"
                        value={formData.power}
                    />
                </div>
                {/* <label className="creator--form--label" htmlFor="Image">Image</label> */}
                <input
                    required
                    id="image"
                    className="creator--form--image"
                    type="text"
                    placeholder="Image"
                    onChange={handleChange}
                    name="image"
                    value={formData.image}
                />
                {/*<input/> rarity dropdown*/}
                <button className="creator--form--submit">Add to collection</button>
            </form>
        </>
    )
}