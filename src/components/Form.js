import React from "react"
import Card from "./Card"

export default function Form() {
  const [name, setName] = React.useState("Name")
  const [description, setDescription] = React.useState("Description")

    return(
        <>
            <form className="creator--form">
                <input/>
                <input/>
                <input/>
                <button>Submit</button>
            </form>
            <Card/>
        </>
    )
}