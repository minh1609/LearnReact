import React from "react";

//function base component
const seasonDisplay = props => {
    return (
        <div>
            <h1>Lattitude: {props.lat}</h1>
            <div>It is {props.season}</div>
        </div>
    );
};

//defaylt props
seasonDisplay.defaultProps = {
    lat: 0,
    season: "I don know"
};

export default seasonDisplay;
