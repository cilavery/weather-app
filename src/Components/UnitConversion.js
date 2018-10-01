import React from 'react';

function UnitConversion (props) {
    return (
      <div className="convert-unit">
        Convert Unit:
        {
          props.unit === 'imperial' ?
          <div className="unit-conversion">
            <div className="active unit">F</div>
            <div className="unit" onClick={props.toggle}>C</div>
          </div>
          : <div className="unit-conversion">
            <div className="unit" onClick={props.toggle}>F</div>
            <div className="active unit">C</div>
          </div>
        }


      </div>
    )
}


export default UnitConversion;
