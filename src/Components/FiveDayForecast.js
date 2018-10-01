import React from 'react';

const daysOfWeek =  {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Thu',
  5: 'Fri',
  6: 'Sat'
}


function FiveDayForecast (props) {

  let forecast = props.forecast

  return (
      <div className="forecast">
        {
          forecast.map(day => {
            return (
              <div key={day.dt} className="forecast-day">
                <h6>{daysOfWeek[new Date(day.dt_txt).getUTCDay()]}</h6>
                <i className={`wi wi-owm-${day.weather[0].id}`}></i>
                <div>{Math.round(day.main.temp)}º</div>
              </div>
            )
          })
        }
      </div>
    )
}

export default FiveDayForecast;
