import React from "react";
// import Tilt from 'react-parallax-tilt';

export default function Card(props) {
    const backgroundImage = {
        backgroundImage: `url(${props.image}`
    }

    return(
        <div className="card">
            {/* <Tilt
                tiltReverse={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareMaxOpacity={0}
                perspective={800}
            > */}
            <div className="card--visual" /*data-tilt*/>
                <div className="card--stats cost">{props.cost}</div>
                <div className="power--wrap">
                    <div className="card--stats power">{props.power}</div>
                </div>
                <div className="card--main" style={backgroundImage}></div>
                <p className="card--name">{props.name}</p>
            </div>
            {/* </Tilt> */}
            <p className="card--description"><span className="bold">{props.abilityType}{props.abilityType === "" ? "" : ":"}</span> {props.description}</p>
        </div>
    )
}