import React, { Component } from 'react';
import LocationInfo from './Components/LocationInfo';
import CurrentTemp from './Components/CurrentTemp';
import FiveDayForecast from './Components/FiveDayForecast';
import axios from 'axios';
import './Stylesheets/weather-icons.css';
import './Stylesheets/App.css';

const APIKEY = '3317ddd89ed0eaa04733ad6ab3569291';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeather: [],
      fiveDayWeather: [],
      format: 'fahrenheit'
    }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;

        axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${APIKEY}`)
        .then(res => res.data)
        .catch(err => console.err(err))
        .then(data => {
          this.setState({
            currentWeather: data.currentWeather
          })
        })
      });
    }
  }

  render() {
    console.log('state', this.state)

    return (
      <div className="App">
        <h2>Today's Weather</h2>

          {/* changeLocation component */}
          <div>
          <p>Change location</p>
          <input type="text" placeholder="zipcode"/>
          <button type="submit">enter</button>
          </div>

          {/* tempConversion component */}
          <p>F | C</p>

          {/* LocationInfo component */}
          <LocationInfo
            location={this.state.name}
            date={this.state.dt}
            description={this.state.weather}
          />

          {/* CurrentTemp component */}
          {
            this.state.currentWeather !== []
            ? <CurrentTemp temp={this.state.main}/>
            : null
          }


          <h4>5-Day Forecast</h4>

          {/* fiveDayForecast component */}
          <FiveDayForecast />


      </div>
    );
  }
}

export default App;
