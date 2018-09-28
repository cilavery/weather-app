import React from 'react';

function CurrentTemp (props) {
  let temp = props.temp;
console.log('props in currentTemp', temp)
    return (
      <div>
        <i className="wi wi-night-sleet"></i>
      {
        temp ?
        (<h3>{temp}</h3>)
        : (
        <h3>no temp</h3>
        )}
      </div>
    )
}

export default CurrentTemp;
