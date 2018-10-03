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
                <p className="forecast-day-item">{daysOfWeek[new Date(day.dt_txt).getUTCDay()]}</p>
                <i className={` forecast-day-item wi wi-owm-${day.weather[0].id}`}></i>
                <div className="forecast-temp forecast-day-item">{Math.round(day.main.temp)}&deg;</div>
              </div>
            )
          })
        }
      </div>
    )
}

export default FiveDayForecast;
