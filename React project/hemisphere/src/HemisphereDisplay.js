import React from 'react'
import './Hemisphere.css';

import northernPic from "./images/NorthernHemisphere.jpg";
import southernPic from "./images/SouthernHemisphere.jpg";

const hemisphereConfig = {
    Northern: {
        text: "Hey you are in the Northern Hemisphere",
        picture: northernPic
    },
    Southern: {
        text: "Hey you are in the Southern Hemisphere",
        picture: southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? "Northern":"Southern";
    // const picture = latitude > 0 ? northernPic : southernPic;
    const {text,picture} = hemisphereConfig[hemisphere];

    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment"> 
                <div className="image">
                    <img src={picture} alt="" />
                </div>
                <div className="ui teal bottom attached label">
                    <h1>{text}</h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;