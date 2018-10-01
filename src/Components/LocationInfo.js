import React from 'react';

function LocationInfo (props) {
    return (
      <div>
        <h2>{props.location}</h2>
        <h3>{props.date}</h3>
        <h3><em>{props.description}</em></h3>
      </div>
    )
}


export default LocationInfo;
