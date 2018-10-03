import React, { Component } from 'react';
import LocationInfo from './Components/LocationInfo';
import CurrentTemp from './Components/CurrentTemp';
import FiveDayForecast from './Components/FiveDayForecast';
import ChangeLocation from './Components/ChangeLocation';
import UnitConversion from './Components/UnitConversion';
import axios from 'axios';
import './Stylesheets/weather-icons.css';
import './Stylesheets/App.css';

const APIKEY = '3317ddd89ed0eaa04733ad6ab3569291';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      description: '',
      date: '',
      location: '',
      id: '',
      zipcode: '',
      fiveDayForecast: [],
      units: 'imperial' //imperial = fahrenheit  metric = celsius
    }

    this.updateLocation = this.updateLocation.bind(this);
    this.unitConversion = this.unitConversion.bind(this);
;  }

  componentDidMount() {
    //if browser has geolocation enabled
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${this.state.units}&APPID=${APIKEY}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        .then(data => {
          this.setState({
            temperature: data.main.temp,
            description: data.weather[0].main,
            date: new Date().toString().slice(0,15),
            location: data.name,
            id: data.weather[0].id.toString()
          })
        })

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=${this.state.units}&APPID=${APIKEY}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        .then(data => {
          //filter the forecast to only get 5 days ahead of current day and temperature at 12 noon
          console.log('date in GET', data.list)
          let forecast = data.list.filter(day => {
            let today = new Date();
            let date = new Date(day.dt_txt);
            let hour = date.getHours();
            return date.getDate() !== today.getDate() && hour === 12
          })
          this.setState({
            fiveDayForecast: forecast
          })
        })
      });
    }
  }

  updateLocation(zipcode) {
    //update data with new location
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=${this.state.units}&APPID=${APIKEY}`)
    .then(res => res.data)
    .catch(err => console.error(err))
    .then(data => {
      this.setState({
        temperature: data.list[0].main.temp,
        description: data.list[0].weather[0].main,
        date: new Date().toString().slice(0,15),
        location: data.city.name,
        id: data.list[0].weather[0].id.toString()
      })
    })

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},us&units=${this.state.units}&APPID=${APIKEY}`)
    .then(res => res.data)
    .catch(err => console.error(err))
    .then(data => {
      let forecast = data.list.filter(day => {
        let today = new Date();
        let date = new Date(day.dt_txt);
        let hour = date.getHours();
        return date.getDate() !== today.getDate() && hour === 12
      })
      this.setState({
        fiveDayForecast: forecast
      })
    })
  }

  unitConversion () {
    //make call to convert both current temp and forecast temps after user toggles unit
    if (this.state.units === 'imperial') {
      let convertTemp = this.convertUnits('imperial', this.state.temperature);
      let convertForecast = this.state.fiveDayForecast.map(day => {
        let converted = this.convertUnits('imperial', day.main.temp);
        day.main.temp = converted;
        return day;
      })
      this.setState({
        temperature: convertTemp,
        units: 'metric',
        fiveDayForecast: convertForecast
      })
    }

    if (this.state.units === 'metric') {
      let convertTemp = this.convertUnits('metric', this.state.temperature);
      let convertForecast = this.state.fiveDayForecast.map(day => {
        let converted = this.convertUnits('metric', day.main.temp);
        day.main.temp = converted;
        return day
      })
      this.setState({
        temperature: convertTemp,
        units: 'imperial',
        fiveDayForecast: convertForecast
      })
    }
  }

  convertUnits(unit, temp) {
     //calculation to convert this.state.temperature to celsius, set state units to celsius
     if (unit === 'imperial') {
      let tempFahrenheit = temp;
      let tempCelsius = (tempFahrenheit - 32) * (5 / 9);
      return tempCelsius;
     } else if (unit === 'metric') {
       //convert this.state.temperature to fahrenheit, set state units to fahrenheit
      let tempCelsius = temp;
      let tempFahrenheit = (tempCelsius * (9/5)) + 32;
      return tempFahrenheit
     }
  }

  render() {
    return (
      <div className="App">
        <h2 id="title">Today's Weather</h2>

        <div className="location-info">
          {/* LocationInfo component */}
          <LocationInfo
            location={this.state.location}
            date={this.state.date}
            description={this.state.description}
          />
        </div>


        <div className="main-body">
          <div className="display-info-column">
            {/* CurrentTemp component */}
            <CurrentTemp
            id={this.state.id}
            temp={this.state.temperature}
            unit={this.state.units}
            />
          </div>
        </div>


        {/* fiveDayForecast component */}

      <h4 className="forecast-title">5-Day Forecast:</h4>
        <div className="forecast-box">
          <FiveDayForecast
          forecast={this.state.fiveDayForecast}
          currentDate={this.state.date}
          />
        </div>

        <div className="info-edit">
          {/* changeLocation component */}
          <ChangeLocation updateLocation={this.updateLocation}/>
          {/* tempConversion component */}
          <UnitConversion toggle={this.unitConversion} unit={this.state.units}/>
        </div>

      </div>
    );
  }
}

export default App;
