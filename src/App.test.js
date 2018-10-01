import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import LocationInfo from './Components/LocationInfo';

describe('Location Component', () => {
  it('should output location name, date, weather description', () => {
    let wrapper = shallow(<LocationInfo />);
    expect(wrapper).toMatchSnapshot();
  });
});

//test api call
//test visual - logo, temp, description date, city show up?
//5 day forecast show up?
//when temperature format is changed does the correct calculation show up?
//when zipcode is entered is the correct city entered?
//is direction given to user in case browser geolocation is not working or off?
