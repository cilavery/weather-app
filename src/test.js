import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import LocationInfo from './Components/LocationInfo';

it('test', () => {
  expect(3).toEqual(3);
  expect(9).toEqual(9);
})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders Location Info', () => {
  const wrapper = shallow(<App />);
  console.log(wrapper.text())
});

//test api call
//test visual - logo, temp, description date, city show up?
//5 day forecast show up?
//when temperature format is changed does the correct calculation show up?
//when zipcode is entered is the correct city entered?
//is direction given to user in case browser geolocation is not working or off?
