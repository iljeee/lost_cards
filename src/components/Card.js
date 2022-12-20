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
                transitionSpeed={1500}
                scale={1.1}
                glareMaxOpacity={0}
                perspective={800}
            > */}
            <div className="card__visual">
                <div className="card__stats cost">{props.cost}</div>
                <div className="power__wrap">
                    <div className="card__stats power">{props.power}</div>
                </div>
                <div className="card__main" style={backgroundImage}></div>
                <p className="card__name">{props.name}</p>
            </div>
            {/* </Tilt> */}
            <p className="card__description"><span className="bold">{props.type}{props.type === "" ? "" : ":"}</span> {props.description}</p>
        </div>
    )
}