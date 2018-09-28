import React from 'react';

function CurrentTemp (props) {
    let icon = props.id;
    let iconFont = `wi wi-owm-${icon}`;
    return (
      <div>
        <i className={iconFont}></i>
        {
          props.temp ?
          <h2>{Math.round(props.temp)}º</h2>
          : null
        }

      </div>
    )
}

export default CurrentTemp;
