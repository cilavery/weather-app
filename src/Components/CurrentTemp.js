import React from 'react';

function CurrentTemp (props) {
    //find appropriate icon based on weather id
    let icon = props.id;
    let iconFont = `wi wi-owm-${icon}`;
    return (
      <div className="current-temp">
        <i className={iconFont}></i>
        {
          props.temp ?
          <h1>{Math.round(props.temp)}º</h1>
          : null
        }

      </div>
    )
}

export default CurrentTemp;
