import React from 'react';

function FiveDayForecast (props) {

  //filter the forecast to only get 5 days ahead of current day and temperature at 12 noon
  let forecast = props.forecast.filter(day => {
    let date = new Date(day.dt_txt);
    let hour = date.getHours();
    return day.dt !== props.currentDate && hour === 12
  })

  let daysOfWeek =  {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
  }

  console.log('filtered forecast', forecast)
    return (
      <div className="forecast">
        {
          forecast.map(day => {
            return (
              <div key={day.dt} className="forecast-day">
                <h6>{daysOfWeek[new Date(day.dt_txt).getUTCDay()]}</h6>
                <i className={`wi wi-owm-${day.weather[0].id}`}></i>
                <div>{day.main.temp}</div>
              </div>
            )
          })
        }
      </div>
    )
}

export default FiveDayForecast;
