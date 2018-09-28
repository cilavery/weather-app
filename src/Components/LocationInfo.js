import React from 'react';

function LocationInfo (props) {
    return (
      <div>
        <h3>{props.location}</h3>
        <h3>{props.date}</h3>
        <h3>{props.description}</h3>
      </div>
    )
}


export default LocationInfo;
