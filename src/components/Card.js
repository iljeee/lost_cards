import React from "react";
// import Tilt from 'react-parallax-tilt';

export default function Card() {
    return(
        
        <div className="card">
            {/* <Tilt
                tiltReverse={true}
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                glareMaxOpacity={0}
                perspective={800}
            > */}
            <div className="card--visual" data-tilt>
                <div className="card--stats cost">2</div>
                <div className="power--wrap">
                    <div className="card--stats power">3</div>
                </div>
                <div className="card--main"></div>
                <p className="card--name">War Machine</p>
            </div>
            {/* </Tilt> */}
            <p className="card--description"><span className="bold">Ongoing</span>: +5 power if Iron Man is on this location</p>
        </div>
    )
}