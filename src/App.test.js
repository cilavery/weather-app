import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//test api call
//test visual - logo, temp, description date, city show up?
//5 day forecast show up?
//when temperature format is changed does the correct calculation show up?
//when zipcode is entered is the correct city enter?
//is there an error when the wrong US city is entered?
//is direction given to ueser in case browser geolocation is not working or off?
