## Weather App created by Cecilia Avery

This app shows current weather, depending on the location of your browser or by US zipcode.
Five day weather forecast is also displayed.

The user can input a US zipcode if they wish to know the weather in another location.
They can also choose to view the temperature unit in either fahrenheit or celsius.

The deployed app can be visited at: [Weather-App](https://weather-app-cil-avery.herokuapp.com).


## How to run the app locally

  * Node v8.12.0 needs to be installed.
  * In the command line, while in the directory of your choice type: git clone https://github.com/cilavery/weather-app.git
  * cd weather-app
  * npm install
  * npm start

The project should show up on the brower on localhost:3000

### Tests

I used Enzyme and Jest to write unit tests. To run tests in the terminal type:
  * npm test

## Creating the app/Thought process
I decided to use the create-react-app boilerplate to start building my app. Without having to worry about build configuration I find create-react-app very useful in getting small projects quickly up and running.

Before I started coding I first sketched out how I wanted the app to look and feel. I knew I wanted the user to see their current local temperature at just a glance. The UI needed to be clean, simple and information to be to the point. I wanted to enable geolocation in the browser so that the user would not have to "find" their location in order to know the weather. Also the experience would feel more intuitive with browser geolocation enabled. The 5-day forecast also needed to be simple and easily interpreted. This meant finding a weather icon library that was simple and not clutter the screen with too much imagery. I decided on using [Erik Flowers Icons](https://erikflowers.github.io/weather-icons/).

In my initial sketch I drew out each section of the site, such as title, current temperature, 5-day forecast, location update and conversion unit update. I boxed out which sections I wanted to be presentational components in my React app and which sections would be smart/stateful containers. This made it very easy to organize how to tackle the project. I started by building out my presentational components first and dropping in the components into my main App.js file. I then made my API call to OpenWeatherMap during the componentDidMount lifecycle. Here the weather data is fetched and I passed down data to the presentational components as props. For the stateful components, which ended up being just the LocationInfo and Unit Conversion components, I passed down event handlers as props which were triggered in the stateful component. This allowed for data to be passed back up to the parent App.js component and handle additional API calls or data manipulation. It also ensured that the parent component maintained control and was the one source of data. Once the weather data is updated, the new data is sent from the parent App component and passed down to all related child components.

## Tradeoffs I made

* Some tradeoffs I made were deciding whether to make an additonal API call if the user wanted to change the unit of temperature from fahrenheit to celsius. The type of unit can be requested in the API to OpenWeatherMap however I felt that making these addtional calls just to get a converted temperature seemed unnecessary and lead to a slower upload of data. Instead I opted to calculate the temperature conversion myself in the front-end. The responsiveness in temperature conversion is very fast despite having to write a little extra code.

* I initially wanted to add Redux state management to handle requests however this step seemed unnecessary and overcomplicating a very simple application. I decided to not use Redux and maintain state in the parent App.js component.

## What I'd like to implement with more time

* Currently updating the user's zipcode only works for US locations. I would like to implement a search box with city names so that users can find weather globally.

* I would like to add subtle design upgrades - such as having a subtle background sky pattern/color to match the current temperature.

* Add more robust tests.

