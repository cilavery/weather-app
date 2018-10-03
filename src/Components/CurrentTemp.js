import React from 'react';

function CurrentTemp (props) {
    //find appropriate icon based on weather id
    let icon = props.id;
    let iconFont = `wi wi-owm-${icon}`;
    let unit;
    if (props.unit === 'imperial') {
      unit = 'F'
    } else {
      unit = 'C'
    }

    return (
      <div className="current-temp">
        <i className={iconFont}></i>
        {
          props.temp ?
          <h1 className="temperature">{Math.round(props.temp)}&deg;{unit}</h1>
          : null
        }

      </div>
    )
}

export default CurrentTemp;
