import React, { Component } from 'react';
import LocationInfo from './Components/LocationInfo';
import CurrentTemp from './Components/CurrentTemp';
import FiveDayForecast from './Components/FiveDayForecast';
import ChangeLocation from './Components/ChangeLocation';
import axios from 'axios';
import './Stylesheets/weather-icons.css';
import './Stylesheets/App.css';

const APIKEY = '3317ddd89ed0eaa04733ad6ab3569291';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      description: [],
      date: '',
      location: '',
      id: '',
      zipcode: '',
      fiveDayForecast: [],
      format: 'imperial' //imperial = fahrenheit
    }

    this.updateLocation = this.updateLocation.bind(this)
;  }

  componentDidMount() {
    //if browser has geolocation enabled
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${this.state.format}&APPID=${APIKEY}`)
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

        axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=${this.state.format}&APPID=${APIKEY}`)
        .then(res => res.data)
        .catch(err => console.error(err))
        .then(data => {
          this.setState({
            fiveDayForecast: data.list
          })
        })
      });
    }
  }

  updateLocation(zipcode) {
    //update data with new location
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode}&units=${this.state.format}&APPID=${APIKEY}`)
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
  }

  render() {
    return (
      <div className="App">
        <h2>Today's Weather</h2>

        {/* changeLocation component */}
        <ChangeLocation updateLocation={this.updateLocation}/>


        {/* LocationInfo component */}
        <LocationInfo
          location={this.state.location}
          date={this.state.date}
          description={this.state.description}
        />

        {/* CurrentTemp component */}
        <CurrentTemp
        id={this.state.id}
        temp={this.state.temperature}
        />

        {/* tempConversion component */}
        <p>F | C</p>

        {/* fiveDayForecast component */}
        <h4>5-Day Forecast</h4>
        <FiveDayForecast
        forecast={this.state.fiveDayForecast}
        currentDate={this.state.date}
        tempFormat={this.state.format}
        />
      </div>
    );
  }
}

export default App;
